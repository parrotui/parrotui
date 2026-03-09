
<ComponentDoc demo="TextDemo" title="Text 文本">

# Text 文本

文本组件，支持多种模式、多种颜色类型、可复制、省略等。

## 基础用法

```vue
<template>
  <parrot-text text="默认文本" />
  <parrot-text text="主要文本" type="primary" />
  <parrot-text text="成功文本" type="success" />
  <parrot-text text="警告文本" type="warning" />
  <parrot-text text="危险文本" type="danger" />
</template>
```

## 粗体 / 尺寸

```vue
<parrot-text text="粗体" bold />
<parrot-text text="小号" size="sm" />
<parrot-text text="大号" size="lg" />
```

## 可复制

```vue
<parrot-text text="点击复制此文本" copy />
```

## 删除线 / 下划线

```vue
<parrot-text text="删除线" delete />
<parrot-text text="下划线" underline />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `string` | `''` | 文本内容 |
| `type` | `string` | `'default'` | 颜色类型 |
| `size` | `string` | `'md'` | 尺寸：xs/sm/md/lg/xl |
| `bold` | `boolean` | `false` | 是否粗体 |
| `copy` | `boolean` | `false` | 是否可复制 |
| `lines` | `number` | `0` | 最大行数 |
| `delete` | `boolean` | `false` | 删除线 |
| `underline` | `boolean` | `false` | 下划线 |

### Events

| 事件 | 说明 | 回调参数 |
|------|------|---------|
| `click` | 点击 | `(event)` |
| `copy` | 复制成功 | `(text)` |

</ComponentDoc>
