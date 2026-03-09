# AvatarGroup 头像组组件

头像组组件，重叠展示多个头像，支持 +N 计数。

## 基础用法

```vue
<template>
  <parrot-avatar-group />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `max` | `number` | `5` | 最大显示数 |
| `size` | `string` | `'72rpx'` | 头像尺寸 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |
