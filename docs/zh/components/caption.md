# Caption 说明文字

说明文字组件，固定 22rpx，支持 4 种颜色类型。

## 基础用法

```vue
<template>
  <parrot-caption text="说明文字" />
  <parrot-caption type="primary">主要说明</parrot-caption>
  <parrot-caption type="warning">警告说明</parrot-caption>
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `string` | `''` | 文字内容 |
| `type` | `string` | `'default'` | 颜色类型 |
