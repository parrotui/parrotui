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

    // 每次路由切换后回到顶部
    // 使用 requestAnimationFrame 确保 DOM 渲染完成后再滚动，避免固定导航遮挡顶部内容
    router.onAfterRouteChanged = () => {
      if (typeof window === 'undefined') return
      // 等待两帧，确保 VitePress 内部锚点定位逻辑执行完毕后再覆盖
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'instant' })
        })
      })
    }
  }
}
