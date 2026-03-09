# 主题系统

Parrot UI 提供完整的主题管理方案，支持亮色/暗色/跟随系统三种模式，以及自定义品牌色覆盖。

## 主题文件结构

```
theme/
├── index.ts       # ThemeConfig 接口定义
├── light.ts       # 亮色主题色值
├── dark.ts        # 暗色主题色值
└── adminTheme.ts  # 后台管理主题预设
```

## 使用方式

### 切换主题模式

```typescript
import { useTheme } from '@parrotui/core'

const theme = useTheme()

// 三种模式
theme.setMode('light')   // 亮色
theme.setMode('dark')    // 暗色
theme.setMode('system')  // 跟随系统

// 快捷切换
theme.toggleDark()
```

### 自定义品牌色

```typescript
// 覆盖部分色值
theme.applyTheme({
  primary: '#ff6b6b',
  success: '#51cf66',
})

// 重置为默认
theme.resetTheme()

// 从本地存储恢复（页面初始化时调用）
theme.restoreTheme()
```

### 使用 ThemeToggle 组件

```vue
<template>
  <parrot-theme-toggle @change="onModeChange" />
</template>
```

## 主题色对照表

| 语义 | 亮色 | 暗色 |
|------|------|------|
| 主色 primary | `#1a7eff` | `#409eff` |
| 成功 success | `#41a906` | `#67c23a` |
| 警告 warning | `#e6a23c` | `#e6a23c` |
| 危险 danger | `#f56c6c` | `#f56c6c` |
| 信息 info | `#6c6f78` | `#909399` |
| 页面背景 | `#f5f5f5` | `#1a1a1a` |
| 卡片背景 | `#ffffff` | `#2c2c2c` |
| 主要文本 | `#303133` | `#e5eaf3` |
| 边框 | `#dcdfe6` | `#414243` |

## 实现原理

- 使用 CSS 变量注入到 `[data-theme]` 属性
- `useTheme()` 内部通过 `uni.setStorageSync` 持久化模式选择
- 暗色模式通过替换 `variables.css` 中的语义颜色变量实现
