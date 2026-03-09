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

    // 每次路由切换后：延迟 50ms 执行，确保内容加载完毕后再滚动到顶部
    // 同时强制触发浏览器布局重排，解决固定头部遮挡内容或页面空白问题
    router.onAfterRouteChanged = () => {
      if (typeof window === 'undefined') return
      setTimeout(() => {
        // 强制触发页面重排，确保布局正确计算
        document.body.style.display = 'none'
        // 读取 offsetHeight 触发同步重排（此行勿删）
        void document.body.offsetHeight
        document.body.style.display = ''
        // 回到顶部
        window.scrollTo(0, 0)
      }, 50)
    }
  }
}
