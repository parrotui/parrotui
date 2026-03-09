<ComponentDoc demo="PictureDemo" title="Picture 图文组件">

# Picture 图文组件

图文组件，图片+说明文字组合。

## 基础用法

```vue
<template>
  <parrot-picture />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | `''` | 图片地址 |
| `title` | `string` | `''` | 标题 |
| `desc` | `string` | `''` | 描述 |
| `width` | `string` | `'100%'` | 宽度 |
| `height` | `string` | `'300rpx'` | 高度 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |

</ComponentDoc>
