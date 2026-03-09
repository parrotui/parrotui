<ComponentDoc demo="HighlightDemo" title="Highlight 高亮组件">

# Highlight 高亮组件

高亮组件，关键词高亮、正则匹配。

## 基础用法

```vue
<template>
  <parrot-highlight />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `string` | `''` | 文本 |
| `keyword` | `string` | `''` | 高亮关键词 |
| `color` | `string` | `'#1a7eff'` | 高亮颜色 |
| `bold` | `boolean` | `true` | 高亮加粗 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
