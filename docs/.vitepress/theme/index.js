// Parrot UI VitePress 自定义主题入口 (测试：基础组件，无demos)
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { onMounted } from 'vue'
import ParrotLayout from './components/ParrotLayout.vue'
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
    onMounted(() => {
      const href = window.location.href
      const hasHash = href.includes('#')
      if (!hasHash) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => scrollToTop())
        })
      }
    })
  },
  enhanceApp({ app, router }) {
    app.component('PhonePreview', PhonePreview)
    app.component('PlatformTable', PlatformTable)

    router.onAfterRouteChanged = (href) => {
      if (typeof window === 'undefined') return
      const hasHash = href && href.includes('#')
      if (!hasHash) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => scrollToTop())
        })
      }
    }
  }
}
