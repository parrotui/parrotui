<ComponentDoc demo="CountdownDemo" title="Countdown 倒计时">

# Countdown 倒计时

倒计时组件，支持天/时/分/秒和自定义格式。

## 基础用法

```vue
<template>
  <!-- 30 分钟倒计时 -->
  <parrot-countdown :time="1800000" />
</template>
```

## 自定义格式

```vue
<parrot-countdown :time="86400000" format="DD天 HH时mm分ss秒" />
```

## 手动控制

```vue
<parrot-countdown ref="cd" :time="60000" :auto-start="false" />
<parrot-button @click="$refs.cd.start()">开始</parrot-button>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `time` | `number` | `0` | 倒计时时长(ms) |
| `format` | `string` | `'HH:mm:ss'` | 格式：DD/HH/mm/ss |
| `autoStart` | `boolean` | `true` | 自动开始 |

### Events

| 事件 | 说明 |
|------|------|
| `finish` | 倒计时结束 |
| `change` | 每秒触发 |

### Methods

| 方法 | 说明 |
|------|------|
| `start()` | 开始倒计时 |
| `stop()` | 暂停倒计时 |

</ComponentDoc>
