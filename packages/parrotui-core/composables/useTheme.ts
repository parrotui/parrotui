/**
 * Parrot UI 动态主题系统
 *
 * 核心思路：
 *   后台下发一个 JSON 配置（ThemePatch），调用 applyTheme() 后
 *   将颜色值写入 document.documentElement 的 CSS 变量，
 *   所有使用 var(--pui-*) 的组件立即响应，无需刷新页面。
 *
 * 持久化：
 *   配置存入 uni.setStorageSync('pui_theme_patch') / localStorage，
 *   App 启动时自动还原。
 *
 * 用法：
 *   import { useTheme } from '@parrotui/core/composables/useTheme'
 *   const { applyTheme, resetTheme, currentMode, toggleDark } = useTheme()
 *
 *   // 后台下发配置后调用
 *   applyTheme({ primary: '#7c3aed', success: '#059669' })
 */

import { ref, readonly } from 'vue'

// ─── 类型定义 ─────────────────────────────────────────────────

/**
 * 可被后台覆写的颜色键列表
 * 对应 variables.css 中所有 --pui-* 颜色变量
 */
export interface ThemePatch {
  // 品牌主色（最常用）
  primary?:       string
  primaryLight?:  string
  primaryDark?:   string
  // 功能色
  success?:       string
  successLight?:  string
  warning?:       string
  warningLight?:  string
  danger?:        string
  dangerLight?:   string
  info?:          string
  infoLight?:     string
  // 文字色
  textPrimary?:      string
  textRegular?:      string
  textSecondary?:    string
  textPlaceholder?:  string
  textDisabled?:     string
  // 背景色
  bgPage?:    string
  bgBase?:    string
  bgCard?:    string
  bgOverlay?: string
  // 边框色
  borderBase?:    string
  borderLight?:   string
  borderLighter?: string
}

/** 主题模式 */
export type ThemeMode = 'light' | 'dark' | 'system'

/** 存储键 */
const STORAGE_KEY_PATCH = 'pui_theme_patch'
const STORAGE_KEY_MODE  = 'pui_theme_mode'

// ─── ThemePatch → CSS 变量名映射 ──────────────────────────────

/**
 * 将 ThemePatch 的 camelCase key 映射到 CSS 变量名
 * 例如：primaryLight → --pui-primary-light
 */
const CSS_VAR_MAP: Record<keyof ThemePatch, string> = {
  primary:       '--pui-primary',
  primaryLight:  '--pui-primary-light',
  primaryDark:   '--pui-primary-dark',
  success:       '--pui-success',
  successLight:  '--pui-success-light',
  warning:       '--pui-warning',
  warningLight:  '--pui-warning-light',
  danger:        '--pui-danger',
  dangerLight:   '--pui-danger-light',
  info:          '--pui-info',
  infoLight:     '--pui-info-light',
  textPrimary:      '--pui-text-primary',
  textRegular:      '--pui-text-regular',
  textSecondary:    '--pui-text-secondary',
  textPlaceholder:  '--pui-text-placeholder',
  textDisabled:     '--pui-text-disabled',
  bgPage:    '--pui-bg-page',
  bgBase:    '--pui-bg-base',
  bgCard:    '--pui-bg-card',
  bgOverlay: '--pui-bg-overlay',
  borderBase:    '--pui-border-base',
  borderLight:   '--pui-border-light',
  borderLighter: '--pui-border-lighter',
}

// ─── 工具函数 ─────────────────────────────────────────────────

/** 安全读取存储（uni / 浏览器双兼容） */
function storageGet(key: string): string | null {
  try {
    // uni-app X 环境
    if (typeof uni !== 'undefined') {
      const val = uni.getStorageSync(key)
      return val ? String(val) : null
    }
    // Web 环境
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

/** 安全写入存储 */
function storageSet(key: string, value: string): void {
  try {
    if (typeof uni !== 'undefined') {
      uni.setStorageSync(key, value)
    } else {
      localStorage.setItem(key, value)
    }
  } catch { /* 忽略存储失败 */ }
}

/** 安全删除存储 */
function storageRemove(key: string): void {
  try {
    if (typeof uni !== 'undefined') {
      uni.removeStorageSync(key)
    } else {
      localStorage.removeItem(key)
    }
  } catch { /* 忽略 */ }
}

/** 将 ThemePatch 写入 CSS 变量（作用域：document.documentElement） */
function injectCssVars(patch: ThemePatch): void {
  // uni-app X 非 Web 端，CSS 变量通过 setProperty 注入
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const keys = Object.keys(patch) as (keyof ThemePatch)[]
  keys.forEach((key) => {
    const cssVar = CSS_VAR_MAP[key]
    const value  = patch[key]
    if (cssVar && value !== undefined) {
      root.style.setProperty(cssVar, value)
    }
  })
}

/** 清除已注入的所有自定义颜色变量 */
function removeCssVars(): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  Object.values(CSS_VAR_MAP).forEach((cssVar) => {
    root.style.removeProperty(cssVar)
  })
}

// ─── Composable ───────────────────────────────────────────────

/** 当前激活的主题 patch（响应式） */
const _activePatch = ref<ThemePatch>({})
/** 当前主题模式 */
const _mode = ref<ThemeMode>('light')

/**
 * useTheme
 * 全局共享同一个响应式状态（模块级单例）
 */
export function useTheme() {

  /**
   * 应用主题色补丁
   * @param patch    - 后台下发的颜色配置
   * @param persist  - 是否持久化（默认 true）
   */
  function applyTheme(patch: ThemePatch, persist = true): void {
    _activePatch.value = { ..._activePatch.value, ...patch }
    injectCssVars(patch)
    if (persist) {
      storageSet(STORAGE_KEY_PATCH, JSON.stringify(_activePatch.value))
    }
  }

  /**
   * 重置为默认主题（清除所有自定义覆写）
   */
  function resetTheme(): void {
    _activePatch.value = {}
    removeCssVars()
    storageRemove(STORAGE_KEY_PATCH)
  }

  /**
   * 切换亮/暗模式
   * 通过 data-theme 属性切换 CSS 选择器，无需重新注入变量
   */
  function setMode(mode: ThemeMode): void {
    _mode.value = mode
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      if (mode === 'dark') {
        root.setAttribute('data-theme', 'dark')
      } else if (mode === 'light') {
        root.removeAttribute('data-theme')
      } else {
        // system：跟随系统
        const isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
        if (isDark) {
          root.setAttribute('data-theme', 'dark')
        } else {
          root.removeAttribute('data-theme')
        }
      }
    }
    storageSet(STORAGE_KEY_MODE, mode)
  }

  /** 快捷切换亮/暗 */
  function toggleDark(): void {
    setMode(_mode.value === 'dark' ? 'light' : 'dark')
  }

  /**
   * App 启动时调用，还原持久化的主题配置
   * 建议放在 App.uvue 的 onLaunch 中
   */
  function restoreTheme(): void {
    // 还原模式
    const savedMode = storageGet(STORAGE_KEY_MODE) as ThemeMode | null
    if (savedMode) setMode(savedMode)

    // 还原颜色补丁
    const savedPatch = storageGet(STORAGE_KEY_PATCH)
    if (savedPatch) {
      try {
        const patch = JSON.parse(savedPatch) as ThemePatch
        applyTheme(patch, false) // 不重复写存储
      } catch { /* JSON 解析失败则忽略 */ }
    }
  }

  /**
   * 获取当前所有激活的颜色变量（用于后台回显）
   */
  function getActivePatch(): ThemePatch {
    return { ..._activePatch.value }
  }

  return {
    /** 当前激活的主题补丁（只读响应式） */
    activePatch: readonly(_activePatch),
    /** 当前主题模式（只读） */
    currentMode: readonly(_mode),
    applyTheme,
    resetTheme,
    setMode,
    toggleDark,
    restoreTheme,
    getActivePatch,
    /** 暴露映射表，供后台 UI 枚举可配置项 */
    CSS_VAR_MAP,
  }
}
