# Number 数字

数字展示组件，支持前后缀、千分位、趋势指示。

## 基础用法

```vue
<template>
  <parrot-number :value="1234" />
  <parrot-number :value="99.5" :precision="1" suffix="%" />
</template>
```

## 千分位

```vue
<parrot-number :value="1234567" thousand-separator />
<parrot-number :value="9876.54" :precision="2" thousand-separator prefix="¥" />
```

## 趋势

```vue
<parrot-number :value="12.5" suffix="%" trend="up" />
<parrot-number :value="3.2" suffix="%" trend="down" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `number` | `0` | 数值 |
| `prefix` | `string` | `''` | 前缀 |
| `suffix` | `string` | `''` | 后缀 |
| `precision` | `number` | `0` | 小数位 |
| `thousandSeparator` | `boolean` | `false` | 千分位 |
| `size` | `string` | `'md'` | 尺寸 |
| `trend` | `string` | `''` | 趋势：up/down |
