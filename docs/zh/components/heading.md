# Heading 标题

标题组件，支持 h1-h6 六级标题，可设置颜色类型和下边框。

## 基础用法

```vue
<template>
  <parrot-heading :level="1">一级标题</parrot-heading>
  <parrot-heading :level="2">二级标题</parrot-heading>
  <parrot-heading :level="3">三级标题</parrot-heading>
</template>
```

## 颜色类型

```vue
<parrot-heading :level="3" type="primary">主要标题</parrot-heading>
<parrot-heading :level="3" type="danger">危险标题</parrot-heading>
```

## 带下边框

```vue
<parrot-heading :level="2" border>带边框的标题</parrot-heading>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `level` | `number` | `1` | 标题级别 1-6 |
| `type` | `string` | `'default'` | 颜色类型 |
| `align` | `string` | `'left'` | 对齐方式 |
| `border` | `boolean` | `false` | 是否下边框 |
