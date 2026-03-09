<ComponentDoc demo="ButtonGroupDemo" title="ButtonGroup 按钮组">

# ButtonGroup 按钮组

将多个按钮组合在一起，支持水平/垂直排列。

## 基础用法

```vue
<template>
  <parrot-button-group>
    <parrot-button type="primary">上一步</parrot-button>
    <parrot-button type="primary">下一步</parrot-button>
  </parrot-button-group>
</template>
```

## 垂直排列

```vue
<parrot-button-group direction="vertical" gap="16rpx">
  <parrot-button type="primary" block>选项一</parrot-button>
  <parrot-button type="primary" block>选项二</parrot-button>
</parrot-button-group>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `string` | `'horizontal'` | 排列方向 |
| `gap` | `string` | `'0'` | 间距 |

</ComponentDoc>
