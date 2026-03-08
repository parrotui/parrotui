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
    details: 内置简体中文、繁体中文、英文多语言，可扩展任意语言包，全球化部署无障碍。
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

## 计划支持的后端框架

> Parrot UI 将逐步提供主流后端框架的主题预设和集成示例，帮助开发者快速接入各类项目。

<div class="framework-grid">

<div class="framework-card">
  <div class="framework-icon">🐘</div>
  <div class="framework-name">Laravel</div>
  <div class="framework-desc">PHP 最优雅的 Web 框架，全球最大 PHP 社区，生态完善</div>
  <span class="framework-badge planned">规划中</span>
</div>

<div class="framework-card">
  <div class="framework-icon">🔥</div>
  <div class="framework-name">ThinkPHP</div>
  <div class="framework-desc">国内最流行 PHP 框架，中小企业首选，文档完善社区活跃</div>
  <span class="framework-badge planned">规划中</span>
</div>

<div class="framework-card">
  <div class="framework-icon">🟦</div>
  <div class="framework-name">WordPress</div>
  <div class="framework-desc">全球 43% 网站使用，最大 CMS 开源平台，插件生态丰富</div>
  <span class="framework-badge planned">规划中</span>
</div>

<div class="framework-card">
  <div class="framework-icon">🐹</div>
  <div class="framework-name">Go / Gin</div>
  <div class="framework-desc">高性能微服务首选，云原生时代主流，编译型极致性能</div>
  <span class="framework-badge planned">规划中</span>
</div>

<div class="framework-card">
  <div class="framework-icon">🟩</div>
  <div class="framework-name">Node.js / NestJS</div>
  <div class="framework-desc">全栈 JS/TS 开发，前端团队全栈首选，微服务架构友好</div>
  <span class="framework-badge planned">规划中</span>
</div>

<div class="framework-card">
  <div class="framework-icon">🐍</div>
  <div class="framework-name">Django / FastAPI</div>
  <div class="framework-desc">Python AI 时代全栈开发，AI 应用集成首选，生态爆发增长</div>
  <span class="framework-badge future">未来</span>
</div>

<div class="framework-card">
  <div class="framework-icon">☕</div>
  <div class="framework-name">Spring Boot</div>
  <div class="framework-desc">企业级 Java 首选，大型互联网及传统金融领域广泛应用</div>
  <span class="framework-badge future">未来</span>
</div>

<div class="framework-card">
  <div class="framework-icon">⚙️</div>
  <div class="framework-name">Rust / Axum</div>
  <div class="framework-desc">最快的系统级语言，WebAssembly 首选，安全与性能双保障</div>
  <span class="framework-badge future">未来</span>
</div>

</div>

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
