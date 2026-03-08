---
layout: home

hero:
  name: "Parrot UI"
  text: "跨终端组件库"
  tagline: "基于 uni-app X · Vue3 + UTS · 支持 Android / iOS / 鸿蒙 / 小程序 / Web"
  image:
    src: /logo.svg
    alt: Parrot UI Logo
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/getting-started
    - theme: alt
      text: 查看组件
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/parrotui/parrotui

features:
  - icon: 🦜
    title: 跨端统一
    details: 一套代码，运行在 Android、iOS、鸿蒙、微信小程序、Web 多端，无缝切换。
  - icon: 🎨
    title: Design Tokens
    details: 完整的颜色、字体、间距、阴影设计令牌系统，支持亮色 / 暗色双主题一键切换。
  - icon: ⚡
    title: Vue3 + UTS
    details: 基于 uni-app X 原生能力，使用 Composition API + UTS 强类型开发，性能卓越。
  - icon: 🌍
    title: 国际化支持
    details: 内置中英文多语言，可扩展任意语言包，全球化部署无障碍。
  - icon: 🔌
    title: 可扩展主题
    details: 基于 CSS 变量 + ThemeConfig 的主题系统，自定义品牌色一行搞定。
  - icon: 📦
    title: Monorepo 架构
    details: pnpm workspace 管理，packages 按能力独立拆分，按需引入零负担。
  - icon: 📖
    title: 完整文档
    details: 每个组件均有 API 说明、使用示例、Demo 演示，开箱即用。
  - icon: 🤝
    title: MIT 开源共建
    details: 完全开源免费，欢迎 PR、Issue、功能提议，共同打造生态。
---

## 快速开始

```bash
# 安装依赖
npm install @parrotui/core
# 或
pnpm add @parrotui/core
```

```typescript
// 引入组件和样式
import '@parrotui/core/styles'
import { ParrotButton, ParrotCard } from '@parrotui/core'
```

---

> 🕐 创始于 2026 年 3 月 8 日 15:00 · MIT License
