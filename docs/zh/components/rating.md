# Rating 评分组件

评分组件，星级/心形、半星、只读。

## 基础用法

```vue
<template>
  <parrot-rating />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `number` | `0` | 当前分值（v-model） |
| `count` | `number` | `5` | 星星数 |
| `size` | `string` | `'40rpx'` | 尺寸 |
| `allowHalf` | `boolean` | `false` | 允许半星 |
| `readonly` | `boolean` | `false` | 只读 |
| `icon` | `string` | `'★'` | 图标 |
| `activeColor` | `string` | `'#f59e0b'` | 激活颜色 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |
