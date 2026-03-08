import { defineConfig } from 'vitepress'

// 微博官方 SVG 图标
const weiboSvg = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M851.4 590.193c-22.196-66.233-90.385-90.422-105.912-91.863-15.523-1.442-29.593-9.94-19.295-27.505 10.302-17.566 29.304-68.684-7.248-104.681-36.564-36.14-116.512-22.462-173.094 0.866-56.434 23.327-53.39 7.055-51.65-8.925 1.89-16.848 32.355-111.02-60.791-122.395C311.395 220.86 154.85 370.754 99.572 457.15 16 587.607 29.208 675.873 29.208 675.873h0.58c10.009 121.819 190.787 218.869 412.328 218.869 190.5 0 350.961-71.853 398.402-169.478 0 0 0.143-0.433 0.575-1.156 4.938-10.506 8.71-21.168 11.035-32.254 6.668-26.205 11.755-64.215-0.728-101.66z m-436.7 251.27c-157.71 0-285.674-84.095-285.674-187.768 0-103.671 127.82-187.76 285.674-187.76 157.705 0 285.673 84.089 285.673 187.76 0 103.815-127.968 187.768-285.673 187.768z" fill="currentColor"/><path d="M803.096 425.327c2.896 1.298 5.945 1.869 8.994 1.869 8.993 0 17.7-5.328 21.323-14.112 5.95-13.964 8.993-28.793 8.993-44.205 0-62.488-51.208-113.321-114.181-113.321-15.379 0-30.32 3.022-44.396 8.926-11.755 4.896-17.263 18.432-12.335 30.24 4.933 11.662 18.572 17.134 30.465 12.238 8.419-3.46 17.268-5.33 26.41-5.33 37.431 0 67.752 30.241 67.752 67.247 0 9.068-1.735 17.857-5.369 26.202a22.832 22.832 0 0 0 12.335 30.236z" fill="currentColor"/><path d="M726.922 114.157c-25.969 0-51.65 3.744-76.315 10.942-18.423 5.472-28.868 24.622-23.5 42.91 5.509 18.29 24.804 28.657 43.237 23.329a201.888 201.888 0 0 1 56.578-8.064c109.253 0 198.189 88.271 198.189 196.696 0 19.436-2.905 38.729-8.419 57.16-5.508 18.289 4.79 37.588 23.212 43.053 3.342 1.014 6.817 1.442 10.159 1.442 14.943 0 28.725-9.648 33.37-24.48 7.547-24.906 11.462-50.826 11.462-77.175-0.143-146.588-120.278-265.813-267.973-265.813z" fill="currentColor"/><path d="M388.294 534.47c-84.151 0-152.34 59.178-152.34 132.334 0 73.141 68.189 132.328 152.34 132.328 84.148 0 152.337-59.182 152.337-132.328 0-73.15-68.19-132.334-152.337-132.334zM338.53 752.763c-29.454 0-53.39-23.755-53.39-52.987 0-29.228 23.941-52.989 53.39-52.989 29.453 0 53.39 23.76 53.39 52.989 0 29.227-23.937 52.987-53.39 52.987z m99.82-95.465c-6.382 11.086-19.296 15.696-28.726 10.219-9.43-5.323-11.75-18.717-5.37-29.803 6.386-11.09 19.297-15.7 28.725-10.224 9.43 5.472 11.755 18.864 5.37 29.808z" fill="currentColor"/></svg>`

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
  '/zh-HK/guide/': [
    {
      text: '開始使用',
      collapsed: false,
      items: [
        { text: '介紹',     link: '/zh-HK/guide/introduction' },
        { text: '快速上手', link: '/zh-HK/guide/getting-started' },
        { text: '安裝',     link: '/zh-HK/guide/installation' },
        { text: '更新日誌', link: '/zh-HK/guide/changelog' },
      ],
    },
    {
      text: '設計基礎',
      collapsed: false,
      items: [
        { text: 'Design Tokens', link: '/zh-HK/guide/tokens' },
        { text: '顏色系統',     link: '/zh-HK/guide/colors' },
        { text: '字體規範',     link: '/zh-HK/guide/typography' },
        { text: '間距規範',     link: '/zh-HK/guide/spacing' },
        { text: '主題系統',     link: '/zh-HK/guide/theming' },
      ],
    },
  ],
  '/zh-HK/components/': [
    {
      text: '基礎元件 Basic',
      collapsed: false,
      items: [
        { text: 'Button 按鈕',  link: '/zh-HK/components/button' },
        { text: 'Icon 圖示',    link: '/zh-HK/components/icon' },
        { text: 'Text 文字',    link: '/zh-HK/components/text' },
        { text: 'Tag 標籤',     link: '/zh-HK/components/tag' },
        { text: 'Badge 徽標',   link: '/zh-HK/components/badge' },
      ],
    },
    {
      text: '佈局元件 Layout',
      collapsed: false,
      items: [
        { text: 'Layout 佈局',  link: '/zh-HK/components/layout' },
        { text: 'Grid 柵格',    link: '/zh-HK/components/grid' },
        { text: 'Card 卡片',    link: '/zh-HK/components/card' },
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

    'zh-HK': {
      label: '繁體中文',
      lang: 'zh-HK',
      title: 'Parrot UI',
      description: '基於 uni-app X 的跨終端元件庫',
      themeConfig: {
        nav: [
          { text: '指南',           link: '/zh-HK/guide/introduction',   activeMatch: '/zh-HK/guide/' },
          { text: '元件',           link: '/zh-HK/components/button',    activeMatch: '/zh-HK/components/' },
          { text: 'Design Tokens', link: '/zh-HK/guide/tokens' },
          { text: '更新日誌',       link: '/zh-HK/guide/changelog' },
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
      { icon: { svg: weiboSvg }, link: 'https://weibo.com/parrotui', target: '_blank' },
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
