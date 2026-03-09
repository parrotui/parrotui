/**
 * Parrot UI 颜色组合式 API
 *
 * 提供运行时颜色访问、混合、透明度、对比色等功能
 * 底层依赖 tokens/colors.ts 色值定义 和 helpers.uts 算法
 *
 * 用法：
 *   import { useColor } from '@parrotui/core/composables/useColor'
 *   const { getColor, getPalette, mix, opacity, contrast, shades } = useColor()
 */

import { computed } from 'vue'
import {
  colors,
  palette,
  type ColorKey,
  type PaletteKey,
} from '../tokens/colors'

// ─── 颜色算法（内联实现，与 helpers.uts 保持一致） ──────────────

/** hex 转 RGB 数组 */
function hexToRgb(hex: string): number[] {
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
function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number): number => Math.max(0, Math.min(255, Math.round(v)))
  const toHex = (v: number): string => {
    const hex = clamp(v).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + toHex(r) + toHex(g) + toHex(b)
}

// ─── 类型定义 ─────────────────────────────────────────────────

/** 色阶层级 */
export type ShadeLevel = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

/** 色板结果 */
export type ShadeMap = Record<ShadeLevel, string>

// ─── Composable ───────────────────────────────────────────────

export function useColor() {

  /**
   * 根据 token key 获取颜色值
   * @param key - 颜色键名，如 'primary500'、'textPrimary'
   * @returns 对应的 hex 颜色值
   */
  function getColor(key: ColorKey): string {
    return colors[key]
  }

  /**
   * 获取整个色系的 10 阶色板
   * @param system - 色系名称：primary / secondary / success / warning / danger / info / neutral
   * @returns 该色系的色阶对象
   */
  function getPalette(system: PaletteKey) {
    return palette[system]
  }

  /**
   * 获取指定色系的某一阶颜色
   * @param system - 色系名称
   * @param tier   - 色阶 50-900
   * @returns hex 颜色值；若无对应阶返回空字符串
   */
  function getShade(system: PaletteKey, tier: ShadeLevel): string {
    const p = palette[system]
    // 动态构造 key，如 'primary' + '500' → 'primary500'
    const key = system + tier
    return (p as Record<string, string>)[key] ?? ''
  }

  /**
   * 混合两个颜色
   * @param color1 - 颜色 1（hex）
   * @param color2 - 颜色 2（hex）
   * @param ratio  - 混合比例 0~1（0 = 纯 color1，1 = 纯 color2）
   * @returns 混合后的 hex
   */
  function mix(color1: string, color2: string, ratio: number): string {
    const r = Math.max(0, Math.min(1, ratio))
    const rgb1 = hexToRgb(color1)
    const rgb2 = hexToRgb(color2)
    return rgbToHex(
      rgb1[0] + (rgb2[0] - rgb1[0]) * r,
      rgb1[1] + (rgb2[1] - rgb1[1]) * r,
      rgb1[2] + (rgb2[2] - rgb1[2]) * r
    )
  }

  /**
   * 为颜色添加透明度
   * @param hex     - hex 颜色
   * @param alpha   - 透明度 0~1
   * @returns rgba() 字符串
   */
  function opacity(hex: string, alpha: number): string {
    const rgb = hexToRgb(hex)
    const a = Math.max(0, Math.min(1, alpha))
    return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + a + ')'
  }

  /**
   * 根据背景色获取最佳文字颜色（黑/白）
   * 基于 WCAG 相对亮度公式
   * @param bgHex - 背景色 hex
   * @returns '#000000' 或 '#ffffff'
   */
  function contrast(bgHex: string): string {
    const rgb = hexToRgb(bgHex)
    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
    return luminance > 0.5 ? '#000000' : '#ffffff'
  }

  /**
   * 从基准色生成 50-900 十阶色板
   * @param baseHex - 基准色（作为 500 阶）
   * @returns 十阶色板对象
   */
  function shades(baseHex: string): ShadeMap {
    const white = '#ffffff'
    const black = '#000000'
    return {
      '50':  mix(baseHex, white, 0.92),
      '100': mix(baseHex, white, 0.84),
      '200': mix(baseHex, white, 0.66),
      '300': mix(baseHex, white, 0.48),
      '400': mix(baseHex, white, 0.26),
      '500': baseHex,
      '600': mix(baseHex, black, 0.16),
      '700': mix(baseHex, black, 0.32),
      '800': mix(baseHex, black, 0.50),
      '900': mix(baseHex, black, 0.68),
    }
  }

  /**
   * 判断颜色是否为深色
   * @param hex - hex 颜色
   * @returns 是否为深色
   */
  function isDark(hex: string): boolean {
    const rgb = hexToRgb(hex)
    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
    return luminance <= 0.5
  }

  /**
   * 使颜色变亮
   * @param hex    - 原始颜色
   * @param amount - 变亮程度 0~1
   * @returns 变亮后的 hex
   */
  function lighten(hex: string, amount: number): string {
    return mix(hex, '#ffffff', amount)
  }

  /**
   * 使颜色变暗
   * @param hex    - 原始颜色
   * @param amount - 变暗程度 0~1
   * @returns 变暗后的 hex
   */
  function darken(hex: string, amount: number): string {
    return mix(hex, '#000000', amount)
  }

  /** 预计算的主色（便于模板绑定） */
  const primary = computed(() => colors.primary500)
  const secondary = computed(() => colors.secondary500)
  const success = computed(() => colors.success500)
  const warning = computed(() => colors.warning500)
  const danger = computed(() => colors.danger500)
  const info = computed(() => colors.info500)

  return {
    // 色值查询
    getColor,
    getPalette,
    getShade,
    // 颜色操作
    mix,
    opacity,
    contrast,
    shades,
    isDark,
    lighten,
    darken,
    // 预计算主色
    primary,
    secondary,
    success,
    warning,
    danger,
    info,
  }
}
