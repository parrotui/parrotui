<ComponentDoc demo="StatisticDemo" title="Statistic 统计数值">

# Statistic 统计数值

统计数值组件，带标题、趋势、千分位。

## 基础用法

```vue
<template>
  <parrot-statistic title="活跃用户" :value="112893" />
  <parrot-statistic title="成交额" :value="23456.78" :precision="2" prefix="¥" />
</template>
```

## 趋势

```vue
<parrot-statistic title="增长率" :value="12.5" suffix="%" trend="up" />
<parrot-statistic title="退款率" :value="3.2" suffix="%" trend="down" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `title` | `string` | `''` | 标题 |
| `value` | `number` | `0` | 数值 |
| `precision` | `number` | `0` | 精度 |
| `prefix` | `string` | `''` | 前缀 |
| `suffix` | `string` | `''` | 后缀 |
| `trend` | `string` | `''` | 趋势 |
| `groupSeparator` | `boolean` | `true` | 千分位 |

</ComponentDoc>
