/**
 * Parrot UI VitePress 自定义主题入口
 * 扩展默认主题，注入品牌样式
 */
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
}
