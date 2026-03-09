# Color 颜色

色块展示组件，用于展示主题令牌颜色、调色板预览。

## 基础用法

```vue
<template>
  <parrot-color color="#1a7eff" />
  <parrot-color color="#10b981" />
  <parrot-color color="#f59e0b" />
  <parrot-color color="#ef4444" />
</template>
```

## 圆形色块

```vue
<parrot-color color="#7c3aed" round />
<parrot-color color="#ec4899" round />
```

## 显示色值

```vue
<parrot-color color="#1a7eff" show-value size="120rpx" />
```

## 自定义尺寸

```vue
<parrot-color color="#10b981" size="40rpx" />
<parrot-color color="#10b981" size="80rpx" />
<parrot-color color="#10b981" size="120rpx" />
```

## 透明度

```vue
<parrot-color color="#1a7eff" :opacity="1" />
<parrot-color color="#1a7eff" :opacity="0.6" />
<parrot-color color="#1a7eff" :opacity="0.3" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `color` | `string` | `'#1a7eff'` | 颜色值 |
| `size` | `string` | `'80rpx'` | 色块尺寸 |
| `round` | `boolean` | `false` | 是否圆形 |
| `showValue` | `boolean` | `false` | 是否显示色值 |
| `opacity` | `number` | `1` | 透明度 0-1 |
