/**
 * Parrot UI 颜色设计令牌
 * 7 色系 × 10 阶（50-900）完整色阶体系
 * 参考 Element Plus / Vant / Ant Design / TDesign / Tailwind 色彩体系
 * 支持亮色 / 暗色双主题
 */

// ─── 品牌主色 (Primary) ─────────────────────────────────────────
export const primaryColors = {
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

// ─── 品牌副色 (Secondary) ───────────────────────────────────────
export const secondaryColors = {
  secondary50:  '#f5f3ff',
  secondary100: '#ede9fe',
  secondary200: '#ddd6fe',
  secondary300: '#c4b5fd',
  secondary400: '#a78bfa',
  secondary500: '#7c3aed', // 副色
  secondary600: '#6d28d9',
  secondary700: '#5b21b6',
  secondary800: '#4c1d95',
  secondary900: '#3b0764',
} as const

// ─── 成功色 (Success) ───────────────────────────────────────────
export const successColors = {
  success50:  '#f0f9eb',
  success100: '#d9f0c8',
  success200: '#b5e19e',
  success300: '#8ecf6e',
  success400: '#67bb3a',
  success500: '#41a906', // 主色
  success600: '#348a04',
  success700: '#2a7003',
  success800: '#205702',
  success900: '#153e01',
} as const

// ─── 警告色 (Warning) ───────────────────────────────────────────
export const warningColors = {
  warning50:  '#fdf6ec',
  warning100: '#faecd8',
  warning200: '#f5d5a8',
  warning300: '#f0be78',
  warning400: '#eba94a',
  warning500: '#e6a23c', // 主色
  warning600: '#d48a1e',
  warning700: '#b07118',
  warning800: '#8c5a13',
  warning900: '#68430e',
} as const

// ─── 危险色 (Danger) ────────────────────────────────────────────
export const dangerColors = {
  danger50:  '#fef0f0',
  danger100: '#fde2e2',
  danger200: '#fbb4b4',
  danger300: '#f98f8f',
  danger400: '#f77e7e',
  danger500: '#f56c6c', // 主色
  danger600: '#e64444',
  danger700: '#c73636',
  danger800: '#a52a2a',
  danger900: '#831e1e',
} as const

// ─── 信息色 (Info) ──────────────────────────────────────────────
export const infoColors = {
  info50:  '#f4f4f5',
  info100: '#e9e9eb',
  info200: '#ceced2',
  info300: '#b3b4ba',
  info400: '#9899a1',
  info500: '#6c6f78', // 主色
  info600: '#565960',
  info700: '#45474d',
  info800: '#34353a',
  info900: '#232427',
} as const

// ─── 中性灰阶 (Neutral) ────────────────────────────────────────
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

// ─── 聚合导出 ───────────────────────────────────────────────────
export const colors = {
  ...primaryColors,
  ...secondaryColors,
  ...successColors,
  ...warningColors,
  ...dangerColors,
  ...infoColors,
  ...neutralColors,
  ...textColors,
  ...bgColors,
  ...borderColors,
  ...specialColors,
} as const

export type ColorKey = keyof typeof colors

// ─── 按色系分组的便捷访问 ───────────────────────────────────────
export const palette = {
  primary:   primaryColors,
  secondary: secondaryColors,
  success:   successColors,
  warning:   warningColors,
  danger:    dangerColors,
  info:      infoColors,
  neutral:   neutralColors,
} as const

export type PaletteKey = keyof typeof palette
