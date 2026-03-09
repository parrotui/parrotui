# Label 标签文本

表单标签组件，支持必填标记、冒号、自定义宽度。

## 基础用法

```vue
<template>
  <parrot-label text="用户名" />
  <parrot-label text="密码" required />
  <parrot-label text="姓名" required colon />
</template>
```

## 固定宽度

```vue
<parrot-label text="用户名" width="160rpx" colon />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `string` | `''` | 标签文字 |
| `required` | `boolean` | `false` | 必填标记 |
| `colon` | `boolean` | `false` | 冒号 |
| `width` | `string` | `''` | 宽度 |
