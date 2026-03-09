<ComponentDoc demo="SliderDemo" title="Slider 滑块组件">

# Slider 滑块组件

滑块组件，单滑块、步长、刻度。

## 基础用法

```vue
<template>
  <parrot-slider />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `number` | `0` | 当前值（v-model） |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `100` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `disabled` | `boolean` | `false` | 禁用 |
| `showValue` | `boolean` | `false` | 显示值 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
