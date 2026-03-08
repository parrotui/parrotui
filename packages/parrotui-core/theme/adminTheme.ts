/**
 * Parrot UI 后台主题配置管理
 *
 * 职责：
 *   1. 定义后台可配置的主题结构（ThemeConfig）
 *   2. 提供从后台 API 拉取主题并应用的方法
 *   3. 提供生成/预览主题色阶的工具函数
 *
 * 使用场景：
 *   - SaaS 多租户：每个租户独立品牌色
 *   - 运营活动：按节假日切换主题色
 *   - 用户自定义：个人偏好颜色设置
 */

import { useTheme, type ThemePatch } from '../composables/useTheme'

// ─── 后台下发的标准配置结构 ───────────────────────────────────

/**
 * 后台存储/下发的主题配置（可序列化为 JSON）
 * 字段均为可选，只覆写有变更的颜色
 */
export interface AdminThemeConfig {
  /** 配置ID，用于版本管理 */
  id?:          string
  /** 配置名称（如：品牌主题、节日主题） */
  name?:        string
  /** 创建时间 */
  createdAt?:   string
  /** 颜色补丁 */
  colors:       ThemePatch
}

// ─── 工具函数：根据主色自动推算色阶 ─────────────────────────

/**
 * 将 hex 颜色解析为 RGB 分量
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return null
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

/**
 * RGB 转 Hex
 */
function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)))
  return '#' + [clamp(r), clamp(g), clamp(b)]
    .map(v => v.toString(16).padStart(2, '0'))
    .join('')
}

/**
 * 根据主色自动生成亮色（混白）和暗色（混深）
 * @param primaryHex  主色十六进制
 * @param lightRatio  亮色混白比例 0~1（默认 0.9 = 90% 白）
 * @param darkRatio   暗色加深比例 0~1（默认 0.15 = 降低15%亮度）
 */
export function generateColorVariants(
  primaryHex: string,
  lightRatio = 0.9,
  darkRatio  = 0.15
): { light: string; dark: string } {
  const rgb = hexToRgb(primaryHex)
  if (!rgb) return { light: primaryHex, dark: primaryHex }

  // 亮色：与白色插值
  const light = rgbToHex(
    rgb.r + (255 - rgb.r) * lightRatio,
    rgb.g + (255 - rgb.g) * lightRatio,
    rgb.b + (255 - rgb.b) * lightRatio,
  )

  // 暗色：降低亮度
  const dark = rgbToHex(
    rgb.r * (1 - darkRatio),
    rgb.g * (1 - darkRatio),
    rgb.b * (1 - darkRatio),
  )

  return { light, dark }
}

// ─── 快捷方法：只修改主色，自动推算所有变体 ─────────────────

/**
 * 仅需提供一个主色，自动生成 primaryLight / primaryDark 并应用
 * 后台最简单的调用方式
 *
 * @example
 * applyPrimaryColor('#7c3aed')  // 一行切换全局品牌色
 */
export function applyPrimaryColor(primaryHex: string): void {
  const { light, dark } = generateColorVariants(primaryHex)
  const { applyTheme } = useTheme()
  applyTheme({
    primary:      primaryHex,
    primaryLight: light,
    primaryDark:  dark,
  })
}

/**
 * 从后台 API 响应应用主题配置
 * 后台接口返回 AdminThemeConfig，直接传入即可
 *
 * @example
 * // 后台接口返回
 * const config = await api.get('/admin/theme')
 * applyAdminTheme(config)
 */
export function applyAdminTheme(config: AdminThemeConfig, persist = true): void {
  const { applyTheme } = useTheme()
  if (config.colors) {
    applyTheme(config.colors, persist)
  }
}

/**
 * 获取当前主题配置（用于后台回显当前已设置的颜色）
 */
export function getCurrentThemeConfig(): AdminThemeConfig {
  const { getActivePatch } = useTheme()
  return {
    id:        'current',
    name:      '当前主题',
    createdAt: new Date().toISOString(),
    colors:    getActivePatch(),
  }
}

// ─── 预设主题包 ───────────────────────────────────────────────

/**
 * 内置预设主题，后台可直接引用
 */
export const PRESET_THEMES: Record<string, AdminThemeConfig> = {
  // 默认蓝
  default: {
    id: 'default', name: '默认蓝',
    colors: { primary: '#1a7eff', primaryLight: '#ecf5ff', primaryDark: '#0065e6' },
  },
  // 紫色
  purple: {
    id: 'purple', name: '高贵紫',
    colors: { primary: '#7c3aed', primaryLight: '#f5f3ff', primaryDark: '#6d28d9' },
  },
  // 绿色
  green: {
    id: 'green', name: '清新绿',
    colors: { primary: '#059669', primaryLight: '#ecfdf5', primaryDark: '#047857' },
  },
  // 橙色
  orange: {
    id: 'orange', name: '活力橙',
    colors: { primary: '#f97316', primaryLight: '#fff7ed', primaryDark: '#ea580c' },
  },
  // 玫瑰
  rose: {
    id: 'rose', name: '玫瑰红',
    colors: { primary: '#e11d48', primaryLight: '#fff1f2', primaryDark: '#be123c' },
  },
}
