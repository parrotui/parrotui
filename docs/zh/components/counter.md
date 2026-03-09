<ComponentDoc demo="CounterDemo" title="Counter 动画计数器">

# Counter 动画计数器

数字递增动画组件，从起始值到结束值的动画过渡。

## 基础用法

```vue
<template>
  <parrot-counter :end-value="9999" />
</template>
```

## 自定义起始值和精度

```vue
<parrot-counter :start-value="0" :end-value="100" :precision="1" suffix="%" />
```

## 尺寸

```vue
<parrot-counter :end-value="888" size="sm" />
<parrot-counter :end-value="888" size="md" />
<parrot-counter :end-value="888" size="lg" />
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `endValue` | `number` | `0` | 结束值 |
| `startValue` | `number` | `0` | 起始值 |
| `duration` | `number` | `2000` | 动画时长(ms) |
| `precision` | `number` | `0` | 小数位 |
| `prefix` | `string` | `''` | 前缀 |
| `suffix` | `string` | `''` | 后缀 |
| `autoPlay` | `boolean` | `true` | 自动播放 |

### Events

| 事件 | 说明 |
|------|------|
| `finished` | 动画结束 |

</ComponentDoc>
