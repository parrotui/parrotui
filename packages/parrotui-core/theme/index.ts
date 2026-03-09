/**
 * Parrot UI 主题系统入口
 * 支持亮色 / 暗色 / 自定义主题
 */
export { lightTheme } from './light'
export { darkTheme }  from './dark'

// 主题颜色结构类型
export interface ThemeColors {
  primary:         string
  primaryLight:    string
  primaryDark:     string
  secondary:       string
  secondaryLight:  string
  secondaryDark:   string
  success:         string
  successLight:    string
  warning:         string
  warningLight:    string
  danger:          string
  dangerLight:     string
  info:            string
  infoLight:       string
  textPrimary:     string
  textRegular:     string
  textSecondary:   string
  textDisabled:    string
  bgPage:          string
  bgBase:          string
  bgCard:          string
  borderBase:      string
  borderLight:     string
}

export interface ThemeConfig {
  name:   string
  colors: ThemeColors
}

export type ThemeName = 'light' | 'dark' | string
