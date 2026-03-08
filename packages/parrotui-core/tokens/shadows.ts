/**
 * Parrot UI 阴影设计令牌
 * 参考 Element Plus / Vant / TDesign
 */
export const shadows = {
  none:  'none',
  xs:    '0 1px 2px rgba(0,0,0,0.05)',
  sm:    '0 1px 6px rgba(0,0,0,0.08)',
  base:  '0 2px 12px rgba(0,0,0,0.10)',
  md:    '0 4px 16px rgba(0,0,0,0.12)',
  lg:    '0 8px 24px rgba(0,0,0,0.14)',
  xl:    '0 16px 40px rgba(0,0,0,0.16)',
  // 暗色主题阴影
  smDark:   '0 1px 6px rgba(0,0,0,0.30)',
  baseDark: '0 2px 12px rgba(0,0,0,0.40)',
  mdDark:   '0 4px 16px rgba(0,0,0,0.50)',
} as const

export type ShadowKey = keyof typeof shadows
