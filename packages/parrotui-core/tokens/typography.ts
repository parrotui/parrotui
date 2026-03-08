/**
 * Parrot UI 字体设计令牌
 * 参考 Element Plus / Ant Design
 */

// 字体族
export const fontFamily = {
  sans:  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono:  '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
} as const

// 字号（rpx）
export const fontSize = {
  xs:   '20rpx',  // 10px
  sm:   '22rpx',  // 11px
  base: '28rpx',  // 14px 默认
  md:   '30rpx',  // 15px
  lg:   '32rpx',  // 16px
  xl:   '36rpx',  // 18px
  '2xl':'40rpx',  // 20px
  '3xl':'48rpx',  // 24px
  '4xl':'56rpx',  // 28px
} as const

// 字重
export const fontWeight = {
  light:   '300',
  normal:  '400',
  medium:  '500',
  semibold:'600',
  bold:    '700',
} as const

// 行高
export const lineHeight = {
  none:    '1',
  tight:   '1.25',
  snug:    '1.375',
  normal:  '1.5',
  relaxed: '1.625',
  loose:   '2',
} as const

export type FontSizeKey   = keyof typeof fontSize
export type FontWeightKey = keyof typeof fontWeight
