<ComponentDoc demo="IconButtonDemo" title="IconButton 图标按钮">

# IconButton 图标按钮

图标按钮组件，支持 circle/square/round 形状，徽标计数。

## 基础用法

```vue
<template>
  <parrot-icon-button icon="★" />
  <parrot-icon-button icon="✓" type="primary" />
  <parrot-icon-button icon="✕" type="danger" />
</template>
```

## 形状

```vue
<parrot-icon-button icon="★" shape="circle" />
<parrot-icon-button icon="★" shape="round" />
<parrot-icon-button icon="★" shape="square" />
```

## 带徽标

```vue
<parrot-icon-button icon="✉" :badge="3" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `icon` | `string` | `''` | 图标 |
| `shape` | `string` | `'circle'` | 形状 |
| `size` | `string` | `'md'` | 尺寸 |
| `type` | `string` | `'default'` | 类型 |
| `disabled` | `boolean` | `false` | 禁用 |
| `badge` | `string\|number` | `''` | 徽标 |

</ComponentDoc>
