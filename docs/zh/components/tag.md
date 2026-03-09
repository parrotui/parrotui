<ComponentDoc demo="TagDemo" title="Tag 标签">

# Tag 标签

标签组件，多色、可关闭、支持线框样式。

## 基础用法

```vue
<template>
  <parrot-tag>默认</parrot-tag>
  <parrot-tag type="primary">主要</parrot-tag>
  <parrot-tag type="success">成功</parrot-tag>
  <parrot-tag type="warning">警告</parrot-tag>
  <parrot-tag type="danger">危险</parrot-tag>
</template>
```

## 可关闭

```vue
<parrot-tag type="primary" closeable @close="handleClose">可关闭</parrot-tag>
```

## 线框

```vue
<parrot-tag type="primary" plain>线框标签</parrot-tag>
```

## 圆角

```vue
<parrot-tag type="primary" round>圆角标签</parrot-tag>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `string` | `'default'` | 类型 |
| `closeable` | `boolean` | `false` | 可关闭 |
| `size` | `string` | `'md'` | 尺寸 |
| `round` | `boolean` | `false` | 圆角 |
| `plain` | `boolean` | `false` | 线框 |

### Events

| 事件 | 说明 |
|------|------|
| `click` | 点击 |
| `close` | 关闭 |

</ComponentDoc>
