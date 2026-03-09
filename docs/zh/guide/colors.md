# 颜色系统

Parrot UI 的颜色系统基于设计令牌（Design Tokens），提供 7 大色系 × 10 级梯度，确保全局视觉一致性。

## 色系总览

| 色系 | 基准色 (500) | 用途 |
|------|-------------|------|
| **primary** | `#1a7eff` | 品牌主色、主要操作按钮、链接高亮 |
| **secondary** | `#7c3aed` | 辅助强调、次要操作、特殊标记 |
| **success** | `#41a906` | 成功状态、确认操作、正向反馈 |
| **warning** | `#e6a23c` | 警告提示、需要注意的操作 |
| **danger** | `#f56c6c` | 错误状态、危险操作、删除确认 |
| **info** | `#6c6f78` | 辅助信息、说明文字、次要内容 |
| **neutral** | `#999999` | 灰阶系统、边框、分割线、背景 |

## 10 级梯度

每个色系包含 10 个级别（50-900），通过科学的颜色混合算法生成：

| 级别 | 混合规则 | 适用场景 |
|------|---------|----------|
| **50** | 基准色 + 92% 白色 | 极浅背景 |
| **100** | 基准色 + 84% 白色 | 浅色背景、hover 状态 |
| **200** | 基准色 + 66% 白色 | 轻量标签、badge 背景 |
| **300** | 基准色 + 48% 白色 | 边框、分割线 |
| **400** | 基准色 + 26% 白色 | 次要按钮、图标 |
| **500** | 基准色（不混合） | 主要按钮、链接、强调 |
| **600** | 基准色 + 16% 黑色 | hover 深色、active 状态 |
| **700** | 基准色 + 32% 黑色 | 按下状态 |
| **800** | 基准色 + 50% 黑色 | 深色文本 |
| **900** | 基准色 + 68% 黑色 | 极深色、暗色模式主色 |

### Primary 色阶示例

```
primary-50:  #edf5ff   ████  极浅蓝背景
primary-100: #d5e8ff   ████  浅蓝背景
primary-200: #a4caff   ████  标签背景
primary-300: #6eaaff   ████  边框
primary-400: #3e8dff   ████  次要按钮
primary-500: #1a7eff   ████  主色（按钮、链接）
primary-600: #166ad6   ████  hover
primary-700: #1256b3   ████  active
primary-800: #0d3f80   ████  深色文本
primary-900: #082952   ████  极深
```

## 语义颜色

除色系梯度外，还定义了语义化的功能颜色：

### 文本颜色

```typescript
textColors = {
  primary:     '#303133',  // 主要文本
  regular:     '#606266',  // 常规文本
  secondary:   '#909399',  // 次要文本
  placeholder: '#c0c4cc',  // 占位文本
  disabled:    '#c0c4cc',  // 禁用文本
}
```

### 背景颜色

```typescript
bgColors = {
  page:   '#f5f5f5',  // 页面背景
  card:   '#ffffff',  // 卡片背景
  hover:  '#f5f7fa',  // 悬停背景
  active: '#ecf5ff',  // 激活背景
  mask:   'rgba(0,0,0,0.5)', // 遮罩层
}
```

### 边框颜色

```typescript
borderColors = {
  base:        '#dcdfe6',  // 基础边框
  light:       '#e4e7ed',  // 浅色边框
  lighter:     '#ebeef5',  // 更浅边框
  extraLight:  '#f2f6fc',  // 极浅边框
}
```

## 使用方式

### 在 TypeScript 中使用

```typescript
import { colors, primaryColors, palette } from '@parrotui/core'
import { useColor } from '@parrotui/core'

// 直接引用
const blue = primaryColors[500]  // '#1a7eff'

// 通过 Composable
const color = useColor()
const shade = color.getShade('primary', 300)
```

### 在 CSS 中使用

```css
/* 通过 CSS 变量（variables.css 中定义） */
.my-button {
  background-color: var(--parrot-primary);
  border-color: var(--parrot-primary-300);
}

.my-card {
  background-color: var(--parrot-bg-card);
  color: var(--parrot-text-primary);
  border: 1rpx solid var(--parrot-border-light);
}
```

### 在组件中使用

```vue
<template>
  <parrot-button type="primary" />     <!-- 使用 primary 色 -->
  <parrot-button type="success" />     <!-- 使用 success 色 -->
  <parrot-tag type="warning">注意</parrot-tag>
  <parrot-text type="danger" text="错误提示" />
</template>
```

## 暗色模式

暗色主题通过 `theme/dark.ts` 定义，自动替换语义颜色：

| 颜色 | 亮色 | 暗色 |
|------|------|------|
| 页面背景 | `#f5f5f5` | `#1a1a1a` |
| 卡片背景 | `#ffffff` | `#2c2c2c` |
| 主要文本 | `#303133` | `#e5eaf3` |
| 边框 | `#dcdfe6` | `#414243` |

通过 `useTheme().toggleDark()` 一键切换。
