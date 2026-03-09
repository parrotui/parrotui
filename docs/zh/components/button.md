# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框、取消操作或执行删除操作等。

## 基础用法

```vue
<template>
  <parrot-button>默认按钮</parrot-button>
  <parrot-button type="primary">主要按钮</parrot-button>
  <parrot-button type="success">成功按钮</parrot-button>
  <parrot-button type="warning">警告按钮</parrot-button>
  <parrot-button type="danger">危险按钮</parrot-button>
  <parrot-button type="info">信息按钮</parrot-button>
</template>
```

## 线框按钮

```vue
<parrot-button plain>默认线框</parrot-button>
<parrot-button type="primary" plain>主要线框</parrot-button>
<parrot-button type="danger" plain>危险线框</parrot-button>
```

## 尺寸

```vue
<parrot-button size="xs">超小</parrot-button>
<parrot-button size="sm">小号</parrot-button>
<parrot-button>默认</parrot-button>
<parrot-button size="lg">大号</parrot-button>
```

## 圆角按钮

```vue
<parrot-button round>圆角</parrot-button>
<parrot-button type="primary" round>主要圆角</parrot-button>
```

## 图标按钮

```vue
<parrot-button icon="search">搜索</parrot-button>
<parrot-button type="primary" icon="plus">添加</parrot-button>
```

## 加载状态

```vue
<parrot-button :loading="true">加载中</parrot-button>
<parrot-button type="primary" :loading="true">提交中</parrot-button>
```

## 禁用状态

```vue
<parrot-button disabled>禁用</parrot-button>
<parrot-button type="primary" disabled>主要禁用</parrot-button>
```

## 块级按钮

```vue
<parrot-button block>块级按钮</parrot-button>
<parrot-button type="primary" block>块级主要按钮</parrot-button>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | 按钮类型 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| `plain` | `boolean` | `false` | 是否线框样式 |
| `round` | `boolean` | `false` | 是否圆角 |
| `circle` | `boolean` | `false` | 是否圆形（正方形图标按钮） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `block` | `boolean` | `false` | 是否块级（宽度100%） |
| `icon` | `string` | — | 图标名称 |
| `iconRight` | `boolean` | `false` | 图标是否在右侧 |

### Events

| 事件 | 说明 | 回调参数 |
|------|------|---------|
| `click` | 点击事件（非禁用/加载时触发） | `(event: Event)` |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 按钮文字内容 |
| `icon` | 自定义图标 |

## 主题变量

可通过 CSS 变量覆盖按钮样式：

```css
:root {
  --pui-primary: #7c3aed;
  --pui-primary-dark: #6d28d9;
}
```
