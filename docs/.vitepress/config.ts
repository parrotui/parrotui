import { defineConfig } from 'vitepress'

// 微博自定义 SVG 图标
const weiboSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.614-2.759 5.049-6.739 5.443zm5.434-9.955c-.546-.151-1.138-.23-1.742-.23-3.872 0-7.01 2.598-7.01 5.805 0 .376.046.744.134 1.097-1.362-.624-2.22-1.795-2.22-3.137 0-2.107 1.936-3.793 4.323-3.793.549 0 1.076.082 1.566.235a4.87 4.87 0 0 1 1.566-.256c2.073 0 3.847 1.117 4.484 2.697-.274-.133-.566-.24-.868-.318zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 13.375c-.379 1.938-2.403 3.218-4.527 3.218-2.127 0-3.709-1.162-3.709-2.82 0-1.656 1.693-3.023 3.709-3.023 2.012 0 3.709 1.367 3.709 3.023 0 .209-.026.414-.076.613.348-.23.641-.516.867-.84.076-.109.145-.224.203-.344.223-.453.348-.963.348-1.502 0-2.068-1.766-3.75-3.943-3.75-.443 0-.869.072-1.266.203A5.57 5.57 0 0 0 10 9.988c0-3.037 2.686-5.5 6-5.5s6 2.463 6 5.5c0 1.521-.637 2.896-1.666 3.883l.012.012c-.352.332-.748.613-1.178.828.09-.437.139-.891.139-1.357 0-1.98-1.102-3.715-2.715-4.719.471.752.746 1.637.746 2.594 0 .596-.109 1.166-.305 1.688.621.279 1.145.736 1.488 1.313.09.148.164.303.225.463.06.16.111.326.148.498l.012.068-.002-.081z"/></svg>`

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
