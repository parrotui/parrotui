# AspectRatio 宽高比容器

宽高比容器，按比例锁定容器尺寸。

## 基础用法

```vue
<template>
  <parrot-aspect-ratio />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `ratio` | `number` | `1` | 宽高比（如 16/9 = 1.78） |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |
