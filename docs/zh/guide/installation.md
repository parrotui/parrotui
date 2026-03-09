# 安装

## 包管理器安装

```bash
# npm
npm install @parrotui/core

# pnpm（推荐）
pnpm add @parrotui/core

# yarn
yarn add @parrotui/core
```

## 直接引用（uni-app X 项目）

将 `parrotui` 目录放置到项目的 `components/` 目录下：

```
your-project/
├── components/
│   └── parrotui/           # Parrot UI 组件库
│       └── packages/
│           └── parrotui-core/
│               └── index.ts
├── pages/
└── pages.json
```

## 导入样式

在 `App.uvue` 或全局入口引入样式文件：

```typescript
// 引入全局样式
import '@/components/parrotui/packages/parrotui-core/styles/reset.css'
import '@/components/parrotui/packages/parrotui-core/styles/variables.css'
import '@/components/parrotui/packages/parrotui-core/styles/base.css'
import '@/components/parrotui/packages/parrotui-core/styles/animations.css'
```

## 按需导入组件

```typescript
import {
  ParrotButton,
  ParrotInput,
  ParrotCard
} from '@/components/parrotui/packages/parrotui-core/index'
```

## 环境要求

| 依赖 | 最低版本 |
|------|---------|
| uni-app X | HBuilderX 4.0+ |
| Vue | 3.4+ |
| Node.js | 18+ |
| TypeScript | 5.0+ |

## 平台支持

| 平台 | 支持状态 |
|------|---------|
| Android | 5.0+ |
| iOS | 10+ |
| HarmonyOS | 支持 |
| 微信小程序 | 支持 |
| H5 / Web | 支持 |
