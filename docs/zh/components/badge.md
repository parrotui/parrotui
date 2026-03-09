<ComponentDoc demo="BadgeDemo" title="Badge 徽标">

# Badge 徽标

徽标组件，支持数字、圆点、自定义最大值。

## 基础用法

```vue
<template>
  <parrot-badge :value="5">
    <parrot-icon-button icon="✉" />
  </parrot-badge>
  <parrot-badge :value="100" :max="99">
    <parrot-icon-button icon="✉" />
  </parrot-badge>
</template>
```

## 圆点徽标

```vue
<parrot-badge dot>
  <parrot-icon-button icon="🔔" />
</parrot-badge>
```

## 类型

```vue
<parrot-badge :value="1" type="primary"><parrot-button>主要</parrot-button></parrot-badge>
<parrot-badge :value="2" type="success"><parrot-button>成功</parrot-button></parrot-badge>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string\|number` | `''` | 徽标值 |
| `max` | `number` | `99` | 最大值 |
| `dot` | `boolean` | `false` | 圆点模式 |
| `type` | `string` | `'danger'` | 类型 |
| `hidden` | `boolean` | `false` | 隐藏 |

</ComponentDoc>
