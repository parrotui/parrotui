/**
 * Parrot UI DOM 工具函数
 *
 * 提供跨平台的元素查询、尺寸获取、滚动控制等 DOM 操作
 * 兼容 uni-app X 多端（通过 uni.createSelectorQuery）
 *
 * 用法：
 *   import { getRect, getScrollTop, scrollTo } from '@parrotui/core/utils/dom'
 */

// ─── 类型定义 ─────────────────────────────────────────────────

export interface Rect {
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}

// ─── 元素查询 ─────────────────────────────────────────────────

/**
 * 获取元素的布局信息（位置和尺寸）
 * @param selector  - CSS 选择器（如 '#my-el'、'.my-class'）
 * @param instance  - 组件实例（用于组件内查询，传 getCurrentInstance()）
 * @returns Promise<Rect>
 */
export function getRect(selector: string, instance?: any): Promise<Rect> {
  return new Promise<Rect>((resolve, reject) => {
    try {
      const query = instance
        ? uni.createSelectorQuery().in(instance)
        : uni.createSelectorQuery()

      query
        .select(selector)
        .boundingClientRect((res) => {
          if (res != null) {
            resolve({
              left: (res as any).left ?? 0,
              top: (res as any).top ?? 0,
              right: (res as any).right ?? 0,
              bottom: (res as any).bottom ?? 0,
              width: (res as any).width ?? 0,
              height: (res as any).height ?? 0,
            })
          } else {
            reject('元素未找到: ' + selector)
          }
        })
        .exec()
    } catch (e) {
      reject(String(e))
    }
  })
}

/**
 * 获取多个元素的布局信息
 * @param selector - CSS 选择器
 * @param instance - 组件实例
 * @returns Promise<Rect[]>
 */
export function getRects(selector: string, instance?: any): Promise<Rect[]> {
  return new Promise<Rect[]>((resolve) => {
    try {
      const query = instance
        ? uni.createSelectorQuery().in(instance)
        : uni.createSelectorQuery()

      query
        .selectAll(selector)
        .boundingClientRect((res) => {
          if (res != null && Array.isArray(res)) {
            const rects: Rect[] = (res as any[]).map((item: any) => ({
              left: item.left ?? 0,
              top: item.top ?? 0,
              right: item.right ?? 0,
              bottom: item.bottom ?? 0,
              width: item.width ?? 0,
              height: item.height ?? 0,
            }))
            resolve(rects)
          } else {
            resolve([])
          }
        })
        .exec()
    } catch {
      resolve([])
    }
  })
}

// ─── 滚动控制 ─────────────────────────────────────────────────

/**
 * 页面滚动到指定位置
 * @param top      - 目标滚动位置（px）
 * @param duration - 动画时长（ms，默认 300）
 */
export function scrollTo(top: number, duration: number = 300): void {
  uni.pageScrollTo({
    scrollTop: top,
    duration: duration,
  })
}

/**
 * 滚动到页面顶部
 * @param duration - 动画时长（ms）
 */
export function scrollToTop(duration: number = 300): void {
  scrollTo(0, duration)
}

/**
 * 滚动到指定元素位置
 * @param selector - CSS 选择器
 * @param offset   - 额外偏移量（px，默认 0）
 * @param duration - 动画时长（ms）
 */
export function scrollToElement(
  selector: string,
  offset: number = 0,
  duration: number = 300
): void {
  uni.pageScrollTo({
    selector: selector,
    duration: duration,
  })
}
