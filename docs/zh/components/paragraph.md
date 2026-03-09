<ComponentDoc demo="ParagraphDemo" title="Paragraph 段落">

# Paragraph 段落

段落组件，支持 3 种尺寸、首行缩进、文本对齐。

## 基础用法

```vue
<template>
  <parrot-paragraph>这是一段正文内容，ParrotUI 基于 uni-app X 构建。</parrot-paragraph>
</template>
```

## 首行缩进

```vue
<parrot-paragraph indent>首行缩进的段落文本，适合中文排版。</parrot-paragraph>
```

## 尺寸

```vue
<parrot-paragraph size="sm">小号段落</parrot-paragraph>
<parrot-paragraph size="md">默认段落</parrot-paragraph>
<parrot-paragraph size="lg">大号段落</parrot-paragraph>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `size` | `string` | `'md'` | 尺寸 |
| `indent` | `boolean` | `false` | 首行缩进 |
| `align` | `string` | `'left'` | 对齐 |
| `lineHeight` | `string` | `'1.8'` | 行高 |
| `color` | `string` | `'#333333'` | 颜色 |

</ComponentDoc>
