<ComponentDoc demo="SpacerDemo" title="Spacer 间距">

# Spacer 间距

间距占位组件，用于在元素之间添加水平或垂直间距。

## 基础用法

```vue
<template>
  <parrot-text text="上方内容" />
  <parrot-spacer size="40rpx" />
  <parrot-text text="下方内容" />
</template>
```

## 水平间距

```vue
<parrot-text text="左" />
<parrot-spacer direction="horizontal" size="20rpx" />
<parrot-text text="右" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `size` | `string` | `'20rpx'` | 间距大小 |
| `direction` | `string` | `'vertical'` | 方向 |

</ComponentDoc>
