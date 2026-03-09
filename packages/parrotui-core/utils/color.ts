/**
 * Parrot UI Core 颜色工具
 *
 * 转接层：从 parrotui-utils/color/helpers.uts 重新导出颜色算法
 * 同时提供 Core 包专用的颜色便捷方法
 *
 * 用法：
 *   import { hexToRgb, mixColors, withOpacity } from '@parrotui/core/utils/color'
 */

// ─── 颜色转换 ─────────────────────────────────────────────────

/** hex 转 RGB 数组 */
export function hexToRgb(hex: string): number[] {
  let h = hex.replace('#', '')
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
  }
  if (h.length !== 6) return [0, 0, 0]
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  if (isNaN(r) || isNaN(g) || isNaN(b)) return [0, 0, 0]
  return [r, g, b]
}

/** RGB 转 hex */
export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number): number => Math.max(0, Math.min(255, Math.round(v)))
  const toHex = (v: number): string => {
    const hex = clamp(v).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + toHex(r) + toHex(g) + toHex(b)
}

/** 混合两个颜色 */
export function mixColors(color1: string, color2: string, ratio: number): string {
  const r = Math.max(0, Math.min(1, ratio))
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  return rgbToHex(
    rgb1[0] + (rgb2[0] - rgb1[0]) * r,
    rgb1[1] + (rgb2[1] - rgb1[1]) * r,
    rgb1[2] + (rgb2[2] - rgb1[2]) * r
  )
}

/** 添加透明度 */
export function withOpacity(hex: string, opacity: number): string {
  const rgb = hexToRgb(hex)
  const a = Math.max(0, Math.min(1, opacity))
  return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + a + ')'
}

/** 对比色（黑或白） */
export function contrastColor(bgHex: string): string {
  const rgb = hexToRgb(bgHex)
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
  return luminance > 0.5 ? '#000000' : '#ffffff'
}

/** 颜色变亮 */
export function lighten(hex: string, amount: number): string {
  return mixColors(hex, '#ffffff', amount)
}

/** 颜色变暗 */
export function darken(hex: string, amount: number): string {
  return mixColors(hex, '#000000', amount)
}
