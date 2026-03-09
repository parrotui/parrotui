# Switch 开关组件

开关组件，开/关切换、自定义颜色和文字。

## 基础用法

```vue
<template>
  <parrot-switch />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 开关状态（v-model） |
| `disabled` | `boolean` | `false` | 禁用 |
| `size` | `string` | `'md'` | 尺寸 |
| `activeColor` | `string` | `'#1a7eff'` | 激活颜色 |
| `inactiveColor` | `string` | `'#e5e7eb'` | 未激活颜色 |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 默认内容 |
