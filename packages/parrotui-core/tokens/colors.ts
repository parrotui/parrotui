/**
 * Parrot UI 颜色设计令牌
 * 参考 Element Plus / Vant / Ant Design / TDesign 色彩体系
 * 支持亮色 / 暗色双主题
 */

// ─── 品牌主色 ───────────────────────────────────────────────────
export const brandColors = {
  primary50:  '#ecf5ff',
  primary100: '#d9edff',
  primary200: '#b3d9ff',
  primary300: '#80bdff',
  primary400: '#4d9eff',
  primary500: '#1a7eff', // 主色
  primary600: '#0065e6',
  primary700: '#004eb3',
  primary800: '#003880',
  primary900: '#00224d',
} as const

// ─── 功能色 ─────────────────────────────────────────────────────
export const semanticColors = {
  success50:  '#f0f9eb',
  success100: '#d9f0c8',
  success500: '#41a906',
  success600: '#348a04',
  warning50:  '#fdf6ec',
  warning100: '#faecd8',
  warning500: '#e6a23c',
  warning600: '#d48a1e',
  danger50:   '#fef0f0',
  danger100:  '#fde2e2',
  danger500:  '#f56c6c',
  danger600:  '#e64444',
  info50:     '#f4f4f5',
  info100:    '#e9e9eb',
  info500:    '#6c6f78',
  info600:    '#565960',
} as const

// ─── 中性灰阶 ───────────────────────────────────────────────────
export const neutralColors = {
  gray50:  '#fafafa',
  gray100: '#f5f5f5',
  gray200: '#eeeeee',
  gray300: '#e0e0e0',
  gray400: '#bdbdbd',
  gray500: '#9e9e9e',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
} as const

// ─── 文字色 ─────────────────────────────────────────────────────
export const textColors = {
  textPrimary:         '#303133',
  textRegular:         '#606266',
  textSecondary:       '#909399',
  textPlaceholder:     '#a8abb2',
  textDisabled:        '#c0c4cc',
  textPrimaryDark:     '#e5eaf3',
  textRegularDark:     '#cfd3dc',
  textSecondaryDark:   '#a3a6ad',
  textPlaceholderDark: '#8d9095',
  textDisabledDark:    '#6c6e72',
} as const

// ─── 背景色 ─────────────────────────────────────────────────────
export const bgColors = {
  bgPage:        '#f2f3f5',
  bgBase:        '#ffffff',
  bgCard:        '#ffffff',
  bgPageDark:    '#0d0d0d',
  bgBaseDark:    '#141414',
  bgCardDark:    '#1d1d1d',
} as const

// ─── 边框色 ─────────────────────────────────────────────────────
export const borderColors = {
  borderBase:        '#dcdfe6',
  borderLight:       '#e4e7ed',
  borderLighter:     '#ebeef5',
  borderBaseDark:    '#3d3d3d',
  borderLightDark:   '#333333',
  borderLighterDark: '#2a2a2a',
} as const

// ─── 特殊色 ─────────────────────────────────────────────────────
export const specialColors = {
  white:       '#ffffff',
  black:       '#000000',
  transparent: 'transparent',
  mask:        'rgba(0,0,0,0.5)',
  maskLight:   'rgba(0,0,0,0.2)',
} as const

export const colors = {
  ...brandColors,
  ...semanticColors,
  ...neutralColors,
  ...textColors,
  ...bgColors,
  ...borderColors,
  ...specialColors,
} as const

export type ColorKey = keyof typeof colors
