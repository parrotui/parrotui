<ComponentDoc demo="ImageDemo" title="Image 图片组件">

# Image 图片组件

图片组件，支持加载/错误占位、圆形、懒加载、预览。

## 基础用法

```vue
<template>
  <parrot-image />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | `''` | 图片地址 |
| `mode` | `string` | `'aspectFill'` | 裁剪模式 |
| `width` | `string` | `'100%'` | 宽度 |
| `height` | `string` | `'300rpx'` | 高度 |
| `round` | `boolean` | `false` | 圆形 |
| `lazyLoad` | `boolean` | `true` | 懒加载 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
