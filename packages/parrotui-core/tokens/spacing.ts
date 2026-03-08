/**
 * Parrot UI 间距设计令牌
 * 基于 4px 基准网格，参考 TDesign / Element Plus
 */
export const spacing = {
  px:   '1px',
  0:    '0',
  1:    '4rpx',
  2:    '8rpx',
  3:    '12rpx',
  4:    '16rpx',
  5:    '20rpx',
  6:    '24rpx',
  7:    '28rpx',
  8:    '32rpx',
  10:   '40rpx',
  12:   '48rpx',
  16:   '64rpx',
  20:   '80rpx',
  24:   '96rpx',
  32:   '128rpx',
} as const

// 圆角
export const radius = {
  none:   '0',
  sm:     '4rpx',
  base:   '8rpx',
  md:     '12rpx',
  lg:     '16rpx',
  xl:     '24rpx',
  full:   '9999rpx',
} as const

// 尺寸（组件常用高度）
export const sizes = {
  componentXs: '48rpx',
  componentSm: '56rpx',
  componentMd: '72rpx',  // 默认
  componentLg: '88rpx',
  componentXl: '104rpx',
} as const

export type SpacingKey = keyof typeof spacing
export type RadiusKey  = keyof typeof radius
export type SizeKey    = keyof typeof sizes
