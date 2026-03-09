/**
 * Parrot UI 加载状态工具
 *
 * 提供统一的 Loading 状态管理
 * 支持全局 loading、局部 loading、自定义文案
 * 跨平台兼容 Android / iOS / 鸿蒙 / H5 / 小程序
 *
 * 用法：
 *   import { showLoading, hideLoading, useLoading } from '@parrotui/core/directives/vloading'
 *
 *   // 简单用法
 *   showLoading('加载中...')
 *   hideLoading()
 *
 *   // 组合式用法
 *   const { loading, show, hide, withLoading } = useLoading()
 */

import { ref, readonly } from 'vue'

// ─── 类型定义 ─────────────────────────────────────────────────

export interface LoadingOptions {
  /** 提示文案 */
  title?: string
  /** 是否显示遮罩（阻止触摸穿透） */
  mask?: boolean
}

// ─── 全局方法 ─────────────────────────────────────────────────

/** 全局 loading 计数器，支持嵌套调用 */
let _loadingCount = 0

/**
 * 显示全局 loading
 * @param titleOrOptions - 提示文案或配置对象
 */
export function showLoading(titleOrOptions?: string | LoadingOptions): void {
  _loadingCount++

  let title = '加载中...'
  let mask = true

  if (typeof titleOrOptions === 'string') {
    title = titleOrOptions
  } else if (titleOrOptions != null) {
    title = titleOrOptions.title ?? '加载中...'
    mask = titleOrOptions.mask ?? true
  }

  if (typeof uni !== 'undefined') {
    uni.showLoading({
      title: title,
      mask: mask,
    })
  }
}

/**
 * 隐藏全局 loading
 * @param force - 是否强制关闭（忽略嵌套计数）
 */
export function hideLoading(force: boolean = false): void {
  if (force) {
    _loadingCount = 0
  } else {
    _loadingCount = Math.max(0, _loadingCount - 1)
  }

  // 只有计数归零才真正隐藏
  if (_loadingCount <= 0) {
    _loadingCount = 0
    if (typeof uni !== 'undefined') {
      uni.hideLoading()
    }
  }
}

// ─── 组合式 API ───────────────────────────────────────────────

/**
 * 局部 Loading 状态管理
 * 提供响应式的 loading 状态和包装异步函数的能力
 */
export function useLoading() {
  const loading = ref<boolean>(false)

  /**
   * 显示 loading
   * @param title - 提示文案
   */
  function show(title?: string): void {
    loading.value = true
    showLoading(title)
  }

  /**
   * 隐藏 loading
   */
  function hide(): void {
    loading.value = false
    hideLoading()
  }

  /**
   * 包装异步函数，自动管理 loading 状态
   * @param fn    - 异步函数
   * @param title - loading 文案
   * @returns 函数执行结果
   *
   * 用法：
   *   const data = await withLoading(() => fetchData(), '正在获取数据...')
   */
  async function withLoading<T>(
    fn: () => Promise<T>,
    title?: string
  ): Promise<T> {
    show(title)
    try {
      const result = await fn()
      return result
    } finally {
      hide()
    }
  }

  /**
   * 设置 loading 状态（不触发全局 loading UI）
   * 仅更新响应式状态，适用于自定义 loading UI 的场景
   */
  function setLoading(value: boolean): void {
    loading.value = value
  }

  return {
    /** 当前 loading 状态（只读响应式） */
    loading: readonly(loading),
    /** 显示 loading */
    show,
    /** 隐藏 loading */
    hide,
    /** 包装异步函数 */
    withLoading,
    /** 仅设置状态 */
    setLoading,
  }
}
