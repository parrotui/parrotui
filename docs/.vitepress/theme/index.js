// Parrot UI VitePress 自定义主题入口
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ParrotLayout from './components/ParrotLayout.vue'
import ComponentDoc from './components/ComponentDoc.vue'
import PhonePreview from './components/PhonePreview.vue'
import PlatformTable from './components/PlatformTable.vue'

export default {
  extends: DefaultTheme,
  // 用自定义 Layout 覆盖默认布局，强制三列并排
  Layout: ParrotLayout,
  enhanceApp({ app, router }) {
    app.component('ComponentDoc', ComponentDoc)
    app.component('PhonePreview', PhonePreview)
    app.component('PlatformTable', PlatformTable)

    // 路由切换：无 hash 时回到顶部
    router.onAfterRouteChanged = (href) => {
      if (typeof window === 'undefined') return
      const hasHash = href && href.includes('#')
      if (!hasHash) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'instant' })
          })
        })
      }
    }
  }
}
