<ComponentDoc demo="SkeletonDemo" title="Skeleton 骨架屏组件">

# Skeleton 骨架屏组件

骨架屏组件，加载占位动画。

## 基础用法

```vue
<template>
  <parrot-skeleton />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `rows` | `number` | `3` | 行数 |
| `avatar` | `boolean` | `false` | 头像占位 |
| `title` | `boolean` | `true` | 标题占位 |
| `animate` | `boolean` | `true` | 动画 |
| `loading` | `boolean` | `true` | 加载状态 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
