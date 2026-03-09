/**
 * Parrot UI 复制指令
 *
 * 将文本内容复制到系统剪贴板
 * 跨平台兼容 Android / iOS / 鸿蒙 / H5 / 小程序
 *
 * 用法（组件内调用）：
 *   import { copyText } from '@parrotui/core/directives/vcopy'
 *   copyText('要复制的文本', {
 *     success: () => { console.log('复制成功') },
 *     fail: (err) => { console.log('复制失败', err) }
 *   })
 *
 * 或在组件 @click 中直接使用：
 *   <text @click="handleCopy">复制</text>
 */

// ─── 类型定义 ─────────────────────────────────────────────────

export interface CopyOptions {
  /** 复制成功回调 */
  success?: () => void
  /** 复制失败回调 */
  fail?: (err: string) => void
  /** 是否显示系统提示（默认 false） */
  showToast?: boolean
  /** 自定义提示文案 */
  toastText?: string
}

// ─── 核心函数 ─────────────────────────────────────────────────

/**
 * 复制文本到剪贴板
 * @param text    - 要复制的文本内容
 * @param options - 配置项
 */
export function copyText(text: string, options?: CopyOptions): void {
  const opts = options ?? {}
  const showToast = opts.showToast ?? false
  const toastText = opts.toastText ?? '已复制到剪贴板'

  if (typeof uni !== 'undefined') {
    // uni-app 环境
    uni.setClipboardData({
      data: text,
      // uni-app X 中 setClipboardData 默认会弹出提示
      // 通过 showToast 控制是否额外显示
      success: () => {
        if (showToast) {
          uni.showToast({
            title: toastText,
            icon: 'none',
            duration: 1500,
          })
        }
        if (opts.success != null) {
          opts.success!()
        }
      },
      fail: (err) => {
        if (opts.fail != null) {
          opts.fail!(String(err.errMsg ?? '复制失败'))
        }
      },
    })
  } else if (typeof navigator !== 'undefined' && navigator.clipboard != null) {
    // Web 环境 (Clipboard API)
    navigator.clipboard.writeText(text).then(() => {
      if (showToast && typeof alert === 'function') {
        // Web 环境简单提示
      }
      if (opts.success != null) {
        opts.success!()
      }
    }).catch((err) => {
      if (opts.fail != null) {
        opts.fail!(String(err))
      }
    })
  } else {
    // 降级方案
    if (opts.fail != null) {
      opts.fail!('当前环境不支持剪贴板操作')
    }
  }
}

/**
 * 从剪贴板读取文本
 * @param callback - 回调，返回剪贴板内容
 */
export function readClipboard(callback: (text: string) => void): void {
  if (typeof uni !== 'undefined') {
    uni.getClipboardData({
      success: (res) => {
        callback(res.data ?? '')
      },
      fail: () => {
        callback('')
      },
    })
  } else if (typeof navigator !== 'undefined' && navigator.clipboard != null) {
    navigator.clipboard.readText().then((text) => {
      callback(text)
    }).catch(() => {
      callback('')
    })
  } else {
    callback('')
  }
}
