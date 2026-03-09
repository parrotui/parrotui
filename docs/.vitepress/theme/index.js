// Parrot UI VitePress 自定义主题入口
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { onMounted } from 'vue'
import ParrotLayout from './components/ParrotLayout.vue'
import ComponentDoc from './components/ComponentDoc.vue'
import PhonePreview from './components/PhonePreview.vue'
import PlatformTable from './components/PlatformTable.vue'

const scrollToTop = () => {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export default {
  extends: DefaultTheme,
  Layout: ParrotLayout,
  setup() {
    // 初次加载也要回到顶部（onAfterRouteChanged 不覆盖首次访问）
    onMounted(() => {
      const href = window.location.href
      const hasHash = href.includes('#')
      if (!hasHash) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToTop()
          })
        })
      }
    })
  },
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
            scrollToTop()
          })
        })
      }
    }
  }
}
