<ComponentDoc demo="CopyButtonDemo" title="CopyButton 复制按钮组件">

# CopyButton 复制按钮组件

复制按钮组件，一键复制、成功提示。

## 基础用法

```vue
<template>
  <parrot-copy-button />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `string` | `''` | 要复制的文本 |
| `successText` | `string` | `'已复制'` | 成功提示文字 |
| `size` | `string` | `'md'` | 尺寸 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
