# Percentage 百分比

百分比展示组件，带趋势箭头和涨跌配色。

## 基础用法

```vue
<template>
  <parrot-percentage :value="12.5" />
  <parrot-percentage :value="-3.2" />
  <parrot-percentage :value="0" />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `number` | `0` | 百分比值 |
| `precision` | `number` | `1` | 小数位 |
| `showSign` | `boolean` | `true` | 显示箭头 |
| `size` | `string` | `'md'` | 尺寸 |
