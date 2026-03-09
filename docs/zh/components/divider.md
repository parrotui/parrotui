# Divider 分割线

分割线组件，支持水平/垂直方向、文字分割。

## 基础用法

```vue
<template>
  <parrot-divider />
</template>
```

## 文字分割

```vue
<parrot-divider text="OR" />
<parrot-divider text="以下为详情" text-position="left" />
```

## 垂直分割

```vue
<parrot-text text="首页" />
<parrot-divider direction="vertical" />
<parrot-text text="关于" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `string` | `'horizontal'` | 方向 |
| `text` | `string` | `''` | 文字内容 |
| `textPosition` | `string` | `'center'` | 文字位置 |
| `color` | `string` | `'#e5e7eb'` | 线条颜色 |
| `thickness` | `string` | `'2rpx'` | 线条粗细 |
