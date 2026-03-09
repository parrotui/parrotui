<ComponentDoc demo="ProgressDemo" title="Progress 进度条组件">

# Progress 进度条组件

进度条组件，线性进度、百分比、颜色。

## 基础用法

```vue
<template>
  <parrot-progress />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `percent` | `number` | `0` | 百分比 0-100 |
| `color` | `string` | `'#1a7eff'` | 进度条颜色 |
| `trackColor` | `string` | `'#e5e7eb'` | 轨道颜色 |
| `height` | `string` | `'12rpx'` | 高度 |
| `showText` | `boolean` | `true` | 显示百分比 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
