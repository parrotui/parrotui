import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点标题与 SEO
  title: 'Parrot UI',
  description: '基于 uni-app X 的跨终端组件库，支持 Android / iOS / 鸿蒙 / 微信小程序 / Web',
  lang: 'zh-CN',

  // 基础路径（部署到 doc.parrotui.com 根目录）
  base: '/',

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Parrot UI',

    // ─── 右侧 TOC 目录（上下滚动跟踪） ────────────────────────
    outline: {
      level: [2, 3],       // 显示 h2 / h3 两级
      label: '本页目录',
    },

    // 左侧边栏折叠（默认展开）
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',

    // 暗色模式切换按钮文字
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换至亮色模式',
    darkModeSwitchTitle:  '切换至暗色模式',

    // 顶部横排导航
    nav: [
      { text: '指南',           link: '/guide/introduction',   activeMatch: '/guide/' },
      { text: '组件',           link: '/components/button',    activeMatch: '/components/' },
      { text: 'Design Tokens', link: '/guide/tokens' },
      { text: '更新日志',       link: '/guide/changelog' },
      {
        text: 'GitHub',
        link: 'https://github.com/parrotui/parrotui',
        target: '_blank',
      },
    ],

    // 左侧侧边栏（按路由分组）
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          collapsed: false,
          items: [
            { text: '介绍',         link: '/guide/introduction' },
            { text: '快速上手',     link: '/guide/getting-started' },
            { text: '安装',         link: '/guide/installation' },
            { text: '更新日志',     link: '/guide/changelog' },
          ],
        },
        {
          text: '设计基础',
          collapsed: false,
          items: [
            { text: 'Design Tokens', link: '/guide/tokens' },
            { text: '颜色系统',     link: '/guide/colors' },
            { text: '字体规范',     link: '/guide/typography' },
            { text: '间距规范',     link: '/guide/spacing' },
            { text: '主题系统',     link: '/guide/theming' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件 Basic',
          collapsed: false,
          items: [
            { text: 'Button 按钮',  link: '/components/button' },
            { text: 'Icon 图标',    link: '/components/icon' },
            { text: 'Text 文本',    link: '/components/text' },
            { text: 'Tag 标签',     link: '/components/tag' },
            { text: 'Badge 徽标',   link: '/components/badge' },
          ],
        },
        {
          text: '布局组件 Layout',
          collapsed: false,
          items: [
            { text: 'Layout 布局',  link: '/components/layout' },
            { text: 'Grid 栅格',    link: '/components/grid' },
            { text: 'Card 卡片',    link: '/components/card' },
          ],
        },
        {
          text: '导航组件 Navigation',
          collapsed: false,
          items: [
            { text: 'Tab 标签页',   link: '/components/tab' },
            { text: 'NoticeBar 通知栏',      link: '/components/notice-bar' },
            { text: 'ThemeToggle 主题切换',  link: '/components/theme-toggle' },
          ],
        },
        {
          text: '表单组件 Form',
          collapsed: false,
          items: [
            { text: 'Input 输入框',  link: '/components/input' },
            { text: 'Switch 开关',   link: '/components/switch' },
            { text: 'Radio 单选',    link: '/components/radio' },
            { text: 'Checkbox 多选', link: '/components/checkbox' },
            { text: 'Select 下拉',   link: '/components/select' },
          ],
        },
        {
          text: '数据展示 Data',
          collapsed: false,
          items: [
            { text: 'List 列表',       link: '/components/list' },
            { text: 'Table 表格',      link: '/components/table' },
            { text: 'Pagination 分页', link: '/components/pagination' },
          ],
        },
        {
          text: '操作反馈 Feedback',
          collapsed: false,
          items: [
            { text: 'Modal 弹窗',        link: '/components/modal' },
            { text: 'Loading 加载',      link: '/components/loading' },
            { text: 'Message 消息',      link: '/components/message' },
            { text: 'SearchBar 搜索栏',  link: '/components/search-bar' },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/parrotui/parrotui' },
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Parrot UI Contributors',
    },

    // 搜索
    search: { provider: 'local' },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/parrotui/parrotui/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: { text: '最后更新' },
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
  },

  // Head 注入
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1a7eff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Parrot UI' }],
    ['meta', { property: 'og:description', content: '基于 uni-app X 的跨终端组件库' }],
    ['meta', { property: 'og:url', content: 'https://doc.parrotui.com' }],
  ],
})
