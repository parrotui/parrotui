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

    // 路由切换后处理滚动：
    // - 带 hash 锚点（如 /guide#install）：不强制回顶，让浏览器自然定位到锚点
    // - 普通页面切换：回到顶部，避免上一页的滚动位置残留
    router.onAfterRouteChanged = (href) => {
      if (typeof window === 'undefined') return
      const hasHash = href && href.includes('#')
      if (hasHash) return // 有锚点时不干预，交给 scroll-margin-top 处理偏移
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'instant' })
        })
      })
    }
  }
}
