# 快速上手

## 安装

::: code-group

```bash [npm]
npm install @parrotui/core
```

```bash [pnpm]
pnpm add @parrotui/core
```

```bash [yarn]
yarn add @parrotui/core
```

:::

## 全量引入

```typescript
// main.uts
import { createSSRApp } from 'vue'
import App from './App.uvue'

// 引入全局样式
import '@parrotui/core/styles/variables.css'
import '@parrotui/core/styles/reset.css'
import '@parrotui/core/styles/base.css'

// 引入所有组件
import ParrotUI from '@parrotui/core'

export function createApp() {
  const app = createSSRApp(App)
  app.use(ParrotUI)
  return { app }
}
```

## 按需引入（推荐）

```typescript
// 在 .uvue 页面中直接导入
import { ParrotButton, ParrotCard } from '@parrotui/core'
```

## 在组件中使用

```vue
<template>
  <view class="page">
    <parrot-button type="primary" @click="handleClick">
      点击我
    </parrot-button>

    <parrot-card shadow="sm" :radius="'md'">
      <text>卡片内容</text>
    </parrot-card>
  </view>
</template>

<script setup lang="uts">
import { ParrotButton, ParrotCard } from '@parrotui/core'

function handleClick() {
  uni.showToast({ title: 'Hello Parrot UI!' })
}
</script>
```

## uni-app X 项目配置

在 HBuilderX 项目中，将 `parrotui-core` 目录放到 `components/` 下，按 uni-app X 规范自动注册：

```
your-project/
└── components/
    └── parrotui/          ← 整个仓库目录
        └── packages/
            └── parrotui-core/
                └── components/
```

::: tip 提示
uni-app X 使用 UTS 语言，导入路径不需要后缀 `.uvue`，编译器会自动解析。
:::

## TypeScript 类型支持

```json
// tsconfig.json 添加路径别名
{
  "compilerOptions": {
    "paths": {
      "@parrotui/core": ["./packages/parrotui-core/index.ts"]
    }
  }
}
```
