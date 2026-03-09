<ComponentDoc demo="CodeDemo" title="Code 代码块">

# Code 代码块

代码展示组件，支持语言标识、复制按钮、暗色主题、内联代码。

## 基础用法

```vue
<template>
  <parrot-code code="const msg = 'Hello'" lang="ts" />
</template>
```

## 内联代码

```vue
<parrot-text>使用 <parrot-code inline code="npm install parrotui" /> 安装</parrot-text>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `code` | `string` | `''` | 代码内容 |
| `lang` | `string` | `''` | 语言 |
| `copyable` | `boolean` | `true` | 复制按钮 |
| `inline` | `boolean` | `false` | 内联模式 |

### Events

| 事件 | 说明 | 回调参数 |
|------|------|---------|
| `copy` | 复制成功 | `(code)` |

</ComponentDoc>
