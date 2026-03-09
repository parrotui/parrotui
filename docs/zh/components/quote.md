# Quote 引用

引用组件，支持边框和背景两种类型。

## 基础用法

```vue
<template>
  <parrot-quote>这是一段引用文字。</parrot-quote>
</template>
```

## 背景类型

```vue
<parrot-quote type="background" color="#10b981">成功引用</parrot-quote>
```

## 自定义颜色

```vue
<parrot-quote color="#7c3aed">紫色引用</parrot-quote>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `string` | `'border'` | 类型：border/background |
| `color` | `string` | `'#1a7eff'` | 主题颜色 |
