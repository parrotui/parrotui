# Currency 货币

货币展示组件，支持符号、千分位、5 种尺寸。

## 基础用法

```vue
<template>
  <parrot-currency :value="99.9" />
  <parrot-currency :value="12345.67" symbol="$" />
</template>
```

## 尺寸

```vue
<parrot-currency :value="199" size="xs" />
<parrot-currency :value="199" size="md" />
<parrot-currency :value="199" size="xl" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `number` | `0` | 金额 |
| `symbol` | `string` | `'¥'` | 货币符号 |
| `precision` | `number` | `2` | 小数位 |
| `size` | `string` | `'md'` | 尺寸 |
| `color` | `string` | `'#ef4444'` | 颜色 |
