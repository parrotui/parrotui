// Parrot UI VitePress 自定义主题入口
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ComponentDoc from './components/ComponentDoc.vue'
import PhonePreview from './components/PhonePreview.vue'
import PlatformTable from './components/PlatformTable.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('ComponentDoc', ComponentDoc)
    app.component('PhonePreview', PhonePreview)
    app.component('PlatformTable', PlatformTable)

    // 每次路由切换后强制滚动到顶部，避免页面加载时内容显示不完整
    router.onAfterRouteChanged = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0)
      }
    }
  }
}
