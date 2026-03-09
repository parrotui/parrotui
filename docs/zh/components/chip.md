<ComponentDoc demo="ChipDemo" title="Chip 标签片">

# Chip 标签片

标签片组件，可选中、可关闭、支持图标+文本。

## 基础用法

```vue
<template>
  <parrot-chip text="Vue" />
  <parrot-chip text="React" selected />
  <parrot-chip text="Angular" icon="🅰" />
</template>
```

## 可关闭

```vue
<parrot-chip text="可关闭" closeable @close="handleClose" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `string` | `''` | 文本 |
| `icon` | `string` | `''` | 图标 |
| `closeable` | `boolean` | `false` | 可关闭 |
| `selected` | `boolean` | `false` | 选中 |
| `disabled` | `boolean` | `false` | 禁用 |

</ComponentDoc>
