<ComponentDoc demo="LinkDemo" title="Link 链接">

# Link 链接

链接组件，支持内部/外部链接、下划线、图标。

## 基础用法

```vue
<template>
  <parrot-link href="/pages/index/index">首页链接</parrot-link>
  <parrot-link type="danger">危险链接</parrot-link>
  <parrot-link :underline="false">无下划线</parrot-link>
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `href` | `string` | `''` | 链接地址 |
| `type` | `string` | `'primary'` | 颜色类型 |
| `underline` | `boolean` | `true` | 下划线 |
| `disabled` | `boolean` | `false` | 禁用 |

</ComponentDoc>
