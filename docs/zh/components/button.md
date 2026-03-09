# Button 按钮

按钮用于触发操作，支持 solid/outline/ghost 变体，多种尺寸和形状。

## 基础用法

```vue
<template>
  <parrot-button>默认按钮</parrot-button>
  <parrot-button type="primary">主要按钮</parrot-button>
  <parrot-button type="success">成功按钮</parrot-button>
  <parrot-button type="warning">警告按钮</parrot-button>
  <parrot-button type="danger">危险按钮</parrot-button>
</template>
```

## 线框按钮

```vue
<parrot-button plain>默认线框</parrot-button>
<parrot-button type="primary" plain>主要线框</parrot-button>
```

## 尺寸

```vue
<parrot-button size="xs">超小</parrot-button>
<parrot-button size="sm">小号</parrot-button>
<parrot-button>默认</parrot-button>
<parrot-button size="lg">大号</parrot-button>
```

## 圆角 / 圆形

```vue
<parrot-button round type="primary">圆角按钮</parrot-button>
<parrot-button circle type="primary" icon="★" />
```

## 加载 / 禁用 / 块级

```vue
<parrot-button :loading="true" type="primary">加载中</parrot-button>
<parrot-button disabled type="primary">禁用</parrot-button>
<parrot-button block type="primary">块级按钮</parrot-button>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `string` | `'default'` | 类型：default/primary/success/warning/danger/info |
| `size` | `string` | `'md'` | 尺寸：xs/sm/md/lg |
| `plain` | `boolean` | `false` | 线框样式 |
| `round` | `boolean` | `false` | 圆角 |
| `circle` | `boolean` | `false` | 圆形 |
| `disabled` | `boolean` | `false` | 禁用 |
| `loading` | `boolean` | `false` | 加载中 |
| `block` | `boolean` | `false` | 块级 |
| `icon` | `string` | `''` | 图标 |

### Events

| 事件 | 说明 |
|------|------|
| `click` | 点击（非禁用/加载时） |
