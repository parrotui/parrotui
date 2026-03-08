# 介绍

## 什么是 Parrot UI？

Parrot UI 是一套基于 [uni-app X](https://uniapp.dcloud.net.cn/) 的**跨终端组件库**，使用 Vue3 + Composition API + UTS 构建，支持 Android、iOS、鸿蒙（HarmonyOS）、微信小程序、Web 等多端统一运行。

> 开源、开放、共建 —— 欢迎任何人使用、贡献和扩展 Parrot UI 生态。

## 设计理念

| 原则 | 描述 |
|------|------|
| **一次编写，多端运行** | 基于 uni-app X 原生渲染，真正跨端而非转译 |
| **设计系统优先** | Design Tokens 驱动，颜色/间距/字体全局统一 |
| **TypeScript 优先** | UTS 严格类型，IDE 补全完整，开发体验一流 |
| **性能优先** | 无虚拟 DOM 开销，原生渲染性能 |
| **可扩展** | 主题/国际化/图标可按需替换，不锁定 |

## 支持平台

| 平台 | 支持状态 |
|------|---------|
| Android | ✅ 完整支持 |
| iOS | ✅ 完整支持 |
| 鸿蒙 HarmonyOS | ✅ 完整支持 |
| 微信小程序 | ✅ 完整支持 |
| Web / H5 | ✅ 完整支持 |
| 其他小程序 | 🔄 陆续适配 |

## Monorepo 结构

```
parrotui/
├── packages/
│   ├── parrotui-core/       核心组件库
│   │   ├── components/      组件代码（.uvue）
│   │   ├── tokens/          设计令牌
│   │   ├── styles/          全局样式
│   │   ├── theme/           主题系统
│   │   ├── composables/     组合式函数
│   │   ├── directives/      自定义指令
│   │   └── locale/          国际化
│   ├── parrotui-icons/      图标包
│   ├── parrotui-utils/      工具函数
│   └── parrotui-cli/        脚手架工具
├── docs/                    VitePress 文档站
├── playground/              在线演练场
└── examples/                示例项目
```

## 版本与许可

- 开源协议：[MIT](https://github.com/parrotui/parrotui/blob/main/LICENSE)
- 创始日期：2026 年 3 月 8 日

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/parrotui/parrotui/blob/main/LICENSE)
[![GitHub](https://img.shields.io/github/stars/parrotui/parrotui?style=social)](https://github.com/parrotui/parrotui)
