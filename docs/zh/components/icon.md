# Icon 图标

图标组件，支持旋转、脉冲动画、翻转。

## 基础用法

```vue
<template>
  <parrot-icon name="★" />
  <parrot-icon name="✓" color="#10b981" />
  <parrot-icon name="✕" color="#ef4444" />
</template>
```

## 尺寸 / 颜色

```vue
<parrot-icon name="★" size="32rpx" color="#1a7eff" />
<parrot-icon name="★" size="48rpx" color="#f59e0b" />
<parrot-icon name="★" size="64rpx" color="#7c3aed" />
```

## 旋转动画

```vue
<parrot-icon name="⟳" spin size="48rpx" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `name` | `string` | `''` | 图标名/字符 |
| `size` | `string` | `'40rpx'` | 尺寸 |
| `color` | `string` | `'#333'` | 颜色 |
| `spin` | `boolean` | `false` | 旋转动画 |
| `rotate` | `number` | `0` | 旋转角度 |
