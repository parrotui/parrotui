<ComponentDoc demo="RangeSliderDemo" title="RangeSlider 双滑块组件">

# RangeSlider 双滑块组件

双滑块组件，范围选择。

## 基础用法

```vue
<template>
  <parrot-range-slider />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `minValue` | `number` | `20` | 最小选中值 |
| `maxValue` | `number` | `80` | 最大选中值 |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `100` | 最大值 |
| `step` | `number` | `1` | 步长 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
