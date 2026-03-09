<ComponentDoc demo="CircularProgressDemo" title="CircularProgress 环形进度组件">

# CircularProgress 环形进度组件

环形进度组件，环形进度条、仪表盘模式。

## 基础用法

```vue
<template>
  <parrot-circular-progress />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `percent` | `number` | `0` | 百分比 |
| `size` | `string` | `'200rpx'` | 尺寸 |
| `strokeWidth` | `number` | `8` | 线宽(rpx) |
| `color` | `string` | `'#1a7eff'` | 进度颜色 |
| `showText` | `boolean` | `true` | 显示百分比 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
