# Avatar 头像组件

头像组件，支持圆形/方形、图片/文字模式。

## 基础用法

```vue
<template>
  <parrot-avatar />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | `''` | 图片地址 |
| `size` | `string` | `'80rpx'` | 尺寸 |
| `shape` | `string` | `'circle'` | 形状：circle/square |
| `alt` | `string` | `''` | 替代文字 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |
