import { defineConfig } from 'vitepress'

// 简体中文侧边栏
const zhSidebar = {
  '/zh/guide/': [
    {
      text: '开始使用',
      collapsed: false,
      items: [
        { text: '介绍',         link: '/zh/guide/introduction' },
        { text: '快速上手',     link: '/zh/guide/getting-started' },
        { text: '安装',         link: '/zh/guide/installation' },
        { text: '更新日志',     link: '/zh/guide/changelog' },
      ],
    },
    {
      text: '设计基础',
      collapsed: false,
      items: [
        { text: 'Design Tokens', link: '/zh/guide/tokens' },
        { text: '颜色系统',     link: '/zh/guide/colors' },
        { text: '字体规范',     link: '/zh/guide/typography' },
        { text: '间距规范',     link: '/zh/guide/spacing' },
        { text: '主题系统',     link: '/zh/guide/theming' },
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '基础组件 Basic',
      collapsed: false,
      items: [
        { text: 'Button 按钮',  link: '/zh/components/button' },
        { text: 'Icon 图标',    link: '/zh/components/icon' },
        { text: 'Text 文本',    link: '/zh/components/text' },
        { text: 'Tag 标签',     link: '/zh/components/tag' },
        { text: 'Badge 徽标',   link: '/zh/components/badge' },
      ],
    },
    {
      text: '布局组件 Layout',
      collapsed: false,
      items: [
        { text: 'Layout 布局',  link: '/zh/components/layout' },
        { text: 'Grid 栅格',    link: '/zh/components/grid' },
        { text: 'Card 卡片',    link: '/zh/components/card' },
      ],
    },
    {
      text: '导航组件 Navigation',
      collapsed: false,
      items: [
        { text: 'Tab 标签页',              link: '/zh/components/tab' },
        { text: 'NoticeBar 通知栏',        link: '/zh/components/notice-bar' },
        { text: 'ThemeToggle 主题切换',    link: '/zh/components/theme-toggle' },
      ],
    },
    {
      text: '表单组件 Form',
      collapsed: false,
      items: [
        { text: 'Input 输入框',  link: '/zh/components/input' },
        { text: 'Switch 开关',   link: '/zh/components/switch' },
        { text: 'Radio 单选',    link: '/zh/components/radio' },
        { text: 'Checkbox 多选', link: '/zh/components/checkbox' },
        { text: 'Select 下拉',   link: '/zh/components/select' },
      ],
    },
    {
      text: '数据展示 Data',
      collapsed: false,
      items: [
        { text: 'List 列表',       link: '/zh/components/list' },
        { text: 'Table 表格',      link: '/zh/components/table' },
        { text: 'Pagination 分页', link: '/zh/components/pagination' },
      ],
    },
    {
      text: '操作反馈 Feedback',
      collapsed: false,
      items: [
        { text: 'Modal 弹窗',       link: '/zh/components/modal' },
        { text: 'Loading 加载',     link: '/zh/components/loading' },
        { text: 'Message 消息',     link: '/zh/components/message' },
        { text: 'SearchBar 搜索栏', link: '/zh/components/search-bar' },
      ],
    },
  ],
}

// 繁体中文侧边栏
const zhTWSidebar = {
  '/zh-TW/guide/': [
    {
      text: '開始使用',
      collapsed: false,
      items: [
        { text: '介紹',     link: '/zh-TW/guide/introduction' },
        { text: '快速上手', link: '/zh-TW/guide/getting-started' },
        { text: '安裝',     link: '/zh-TW/guide/installation' },
        { text: '更新日誌', link: '/zh-TW/guide/changelog' },
      ],
    },
    {
      text: '設計基礎',
      collapsed: false,
      items: [
        { text: 'Design Tokens', link: '/zh-TW/guide/tokens' },
        { text: '顏色系統',     link: '/zh-TW/guide/colors' },
        { text: '字體規範',     link: '/zh-TW/guide/typography' },
        { text: '間距規範',     link: '/zh-TW/guide/spacing' },
        { text: '主題系統',     link: '/zh-TW/guide/theming' },
      ],
    },
  ],
  '/zh-TW/components/': [
    {
      text: '基礎元件 Basic',
      collapsed: false,
      items: [
        { text: 'Button 按鈕',  link: '/zh-TW/components/button' },
        { text: 'Icon 圖示',    link: '/zh-TW/components/icon' },
        { text: 'Text 文字',    link: '/zh-TW/components/text' },
        { text: 'Tag 標籤',     link: '/zh-TW/components/tag' },
        { text: 'Badge 徽標',   link: '/zh-TW/components/badge' },
      ],
    },
    {
      text: '佈局元件 Layout',
      collapsed: false,
      items: [
        { text: 'Layout 佈局',  link: '/zh-TW/components/layout' },
        { text: 'Grid 柵格',    link: '/zh-TW/components/grid' },
        { text: 'Card 卡片',    link: '/zh-TW/components/card' },
      ],
    },
  ],
}

// 英文侧边栏
const enSidebar = {
  '/en/guide/': [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction',  link: '/en/guide/introduction' },
        { text: 'Quick Start',   link: '/en/guide/getting-started' },
        { text: 'Installation',  link: '/en/guide/installation' },
        { text: 'Changelog',     link: '/en/guide/changelog' },
      ],
    },
    {
      text: 'Design',
      collapsed: false,
      items: [
        { text: 'Design Tokens', link: '/en/guide/tokens' },
        { text: 'Colors',        link: '/en/guide/colors' },
        { text: 'Typography',    link: '/en/guide/typography' },
        { text: 'Spacing',       link: '/en/guide/spacing' },
        { text: 'Theming',       link: '/en/guide/theming' },
      ],
    },
  ],
  '/en/components/': [
    {
      text: 'Basic',
      collapsed: false,
      items: [
        { text: 'Button',  link: '/en/components/button' },
        { text: 'Icon',    link: '/en/components/icon' },
        { text: 'Text',    link: '/en/components/text' },
        { text: 'Tag',     link: '/en/components/tag' },
        { text: 'Badge',   link: '/en/components/badge' },
      ],
    },
    {
      text: 'Layout',
      collapsed: false,
      items: [
        { text: 'Layout',  link: '/en/components/layout' },
        { text: 'Grid',    link: '/en/components/grid' },
        { text: 'Card',    link: '/en/components/card' },
      ],
    },
    {
      text: 'Navigation',
      collapsed: false,
      items: [
        { text: 'Tab',          link: '/en/components/tab' },
        { text: 'NoticeBar',    link: '/en/components/notice-bar' },
        { text: 'ThemeToggle',  link: '/en/components/theme-toggle' },
      ],
    },
    {
      text: 'Form',
      collapsed: false,
      items: [
        { text: 'Input',    link: '/en/components/input' },
        { text: 'Switch',   link: '/en/components/switch' },
        { text: 'Radio',    link: '/en/components/radio' },
        { text: 'Checkbox', link: '/en/components/checkbox' },
        { text: 'Select',   link: '/en/components/select' },
      ],
    },
    {
      text: 'Feedback',
      collapsed: false,
      items: [
        { text: 'Modal',     link: '/en/components/modal' },
        { text: 'Loading',   link: '/en/components/loading' },
        { text: 'Message',   link: '/en/components/message' },
        { text: 'SearchBar', link: '/en/components/search-bar' },
      ],
    },
  ],
}

export default defineConfig({
  title: 'Parrot UI',
  description: '基于 uni-app X 的跨终端组件库',

  // 根路径重定向到简体中文
  rewrites: {
    'zh/:rest*': ':rest*',
  },

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Parrot UI',
      description: '基于 uni-app X 的跨终端组件库，支持 Android / iOS / 鸿蒙 / 微信小程序 / Web',
      themeConfig: {
        nav: [
          { text: '指南',           link: '/guide/introduction',   activeMatch: '/guide/' },
          { text: '组件',           link: '/components/button',    activeMatch: '/components/' },
          { text: 'Design Tokens', link: '/guide/tokens' },
          { text: '更新日志',       link: '/guide/changelog' },
        ],
        sidebar: {
          '/guide/': zhSidebar['/zh/guide/'].map(g => ({
            ...g,
            items: g.items.map(i => ({ ...i, link: i.link.replace('/zh/', '/') })),
          })),
          '/components/': zhSidebar['/zh/components/'].map(g => ({
            ...g,
            items: g.items.map(i => ({ ...i, link: i.link.replace('/zh/', '/') })),
          })),
        },
        outline:             { level: [2, 3], label: '本页目录' },
        sidebarMenuLabel:    '目录',
        returnToTopLabel:    '返回顶部',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换至亮色模式',
        darkModeSwitchTitle:  '切换至暗色模式',
        editLink: {
          pattern: 'https://github.com/parrotui/parrotui/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        lastUpdated: { text: '最后更新' },
        docFooter: { prev: '上一页', next: '下一页' },
      },
    },

    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'Parrot UI',
      description: '基於 uni-app X 的跨終端元件庫',
      themeConfig: {
        nav: [
          { text: '指南',           link: '/zh-TW/guide/introduction',   activeMatch: '/zh-TW/guide/' },
          { text: '元件',           link: '/zh-TW/components/button',    activeMatch: '/zh-TW/components/' },
          { text: 'Design Tokens', link: '/zh-TW/guide/tokens' },
          { text: '更新日誌',       link: '/zh-TW/guide/changelog' },
        ],
        sidebar: zhTWSidebar,
        outline:             { level: [2, 3], label: '本頁目錄' },
        sidebarMenuLabel:    '目錄',
        returnToTopLabel:    '返回頂部',
        darkModeSwitchLabel: '外觀',
        lightModeSwitchTitle: '切換至亮色模式',
        darkModeSwitchTitle:  '切換至暗色模式',
        editLink: {
          pattern: 'https://github.com/parrotui/parrotui/edit/main/docs/:path',
          text: '在 GitHub 上編輯此頁',
        },
        lastUpdated: { text: '最後更新' },
        docFooter: { prev: '上一頁', next: '下一頁' },
      },
    },

    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Parrot UI',
      description: 'Cross-platform component library based on uni-app X',
      themeConfig: {
        nav: [
          { text: 'Guide',          link: '/en/guide/introduction',  activeMatch: '/en/guide/' },
          { text: 'Components',     link: '/en/components/button',   activeMatch: '/en/components/' },
          { text: 'Design Tokens',  link: '/en/guide/tokens' },
          { text: 'Changelog',      link: '/en/guide/changelog' },
        ],
        sidebar: enSidebar,
        outline:             { level: [2, 3], label: 'On this page' },
        sidebarMenuLabel:    'Menu',
        returnToTopLabel:    'Return to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle:  'Switch to dark mode',
        editLink: {
          pattern: 'https://github.com/parrotui/parrotui/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
      },
    },
  },

  // 基础路径
  base: '/',

  // 共享主题配置
  themeConfig: {
    logo: '/icon.svg',
    siteTitle: 'Parrot UI',

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
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
  },

  // Head 注入
  head: [
    ['link', { rel: 'icon',             href: '/favicon.ico' }],
    ['link', { rel: 'icon',             href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }],
    ['link', { rel: 'icon',             href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest',         href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color',     content: '#1a7eff' }],
    ['meta', { property: 'og:type',        content: 'website' }],
    ['meta', { property: 'og:title',       content: 'Parrot UI' }],
    ['meta', { property: 'og:description', content: '基于 uni-app X 的跨终端组件库' }],
    ['meta', { property: 'og:url',         content: 'https://doc.parrotui.com' }],
    ['meta', { property: 'og:image',       content: 'https://doc.parrotui.com/android-chrome-512x512.png' }],
  ],
})
