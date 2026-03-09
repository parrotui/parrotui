/**
 * Parrot UI 事件工具
 *
 * 提供简单的事件总线（EventBus）用于跨组件通信
 * 以及事件相关的辅助函数
 *
 * 用法：
 *   import { eventBus, once } from '@parrotui/core/utils/event'
 *
 *   // 监听
 *   eventBus.on('theme-change', (data) => { ... })
 *   // 触发
 *   eventBus.emit('theme-change', { mode: 'dark' })
 *   // 取消监听
 *   eventBus.off('theme-change')
 */

// ─── 类型定义 ─────────────────────────────────────────────────

type EventHandler = (...args: any[]) => void

// ─── 事件总线 ─────────────────────────────────────────────────

class PuiEventBus {
  private _events: Map<string, EventHandler[]> = new Map()

  /**
   * 注册事件监听
   * @param event   - 事件名
   * @param handler - 处理函数
   */
  on(event: string, handler: EventHandler): void {
    const handlers = this._events.get(event)
    if (handlers != null) {
      handlers.push(handler)
    } else {
      this._events.set(event, [handler])
    }
  }

  /**
   * 注册一次性事件监听（触发后自动移除）
   * @param event   - 事件名
   * @param handler - 处理函数
   */
  once(event: string, handler: EventHandler): void {
    const wrapper: EventHandler = (...args: any[]) => {
      handler(...args)
      this.off(event, wrapper)
    }
    this.on(event, wrapper)
  }

  /**
   * 移除事件监听
   * @param event   - 事件名
   * @param handler - 处理函数（不传则移除该事件所有监听）
   */
  off(event: string, handler?: EventHandler): void {
    if (handler == null) {
      this._events.delete(event)
      return
    }
    const handlers = this._events.get(event)
    if (handlers != null) {
      const idx = handlers.indexOf(handler)
      if (idx > -1) {
        handlers.splice(idx, 1)
      }
      if (handlers.length === 0) {
        this._events.delete(event)
      }
    }
  }

  /**
   * 触发事件
   * @param event - 事件名
   * @param args  - 传递给处理函数的参数
   */
  emit(event: string, ...args: any[]): void {
    const handlers = this._events.get(event)
    if (handlers != null) {
      // 使用副本遍历，防止 once 中 off 导致索引错乱
      const copy = [...handlers]
      for (let i = 0; i < copy.length; i++) {
        copy[i](...args)
      }
    }
  }

  /**
   * 检查事件是否有监听器
   * @param event - 事件名
   */
  has(event: string): boolean {
    const handlers = this._events.get(event)
    return handlers != null && handlers.length > 0
  }

  /**
   * 清除所有事件监听
   */
  clear(): void {
    this._events.clear()
  }
}

/** 全局事件总线单例 */
export const eventBus = new PuiEventBus()

// ─── 防抖节流增强版 ──────────────────────────────────────────

/**
 * 带参数的防抖函数
 * @param fn    - 需要防抖的函数
 * @param delay - 延迟毫秒数
 * @returns 防抖后的函数
 */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: number = -1
  return (...args: Parameters<T>): void => {
    if (timer !== -1) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = -1
    }, delay)
  }
}

/**
 * 带参数的节流函数
 * @param fn    - 需要节流的函数
 * @param delay - 间隔毫秒数
 * @returns 节流后的函数
 */
export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastTime = 0
  return (...args: Parameters<T>): void => {
    const now = Date.now()
    if (now - lastTime >= delay) {
      lastTime = now
      fn(...args)
    }
  }
}
