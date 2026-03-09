# Parrot Index Card 指数卡片组件

用于展示数据指数、统计信息的卡片组件，支持涨跌颜色区分。

## 功能特性

- ✅ 主数据展示
- ✅ 多个子数据项
- ✅ 自动涨跌颜色（红涨绿跌）
- ✅ 比率变化显示
- ✅ 自定义样式
- ✅ 灵活配置

## 基础用法

### 简单指数卡片

```vue
<template>
  <ParrotIndexCard 
    title="商标提交量指数"
    main-label="昨日全国"
    :main-value="1234"
    main-unit="件"
  />
</template>

<script setup lang="uts">
import ParrotIndexCard from '@/components/parrotui/parrot-index-card/parrot-index-card.uvue'
</script>
```

### 带比率变化

```vue
<template>
  <ParrotIndexCard 
    title="商标提交量指数"
    main-label="昨日全国"
    :main-value="1234"
    main-unit="件"
    :sub-items="subItems"
  />
</template>

<script setup lang="uts">
const subItems = [
  { label: '最新受理', value: 856, ratio: 5.2 },
  { label: '最新驳回', value: 234, ratio: -3.1 },
  { label: '最新初审', value: 567, ratio: 2.8 },
  { label: '最新证书', value: 123, ratio: -1.5 }
]
</script>
```

## 进阶用法

### 1. 带副标题

```vue
<ParrotIndexCard 
  title="商标提交量指数"
  subtitle="数据来源：商标局"
  main-label="昨日全国"
  :main-value="1234"
  main-unit="件"
/>
```

### 2. 自定义颜色

```vue
<ParrotIndexCard 
  title="交易指数"
  main-label="成交额"
  :main-value="99999"
  background-color="#f0f9ff"
  title-color="#1890ff"
  up-color="#fa8c16"
  down-color="#52c41a"
/>
```

### 3. 自定义样式

```vue
<ParrotIndexCard 
  title="商标提交量指数"
  main-label="昨日全国"
  :main-value="1234"
  custom-style="border-radius: 16rpx; padding: 30rpx;"
/>
```

### 4. 字符串值

```vue
<ParrotIndexCard 
  title="排名"
  main-label="当前排名"
  main-value="No.1"
/>
```

### 5. 完整示例（商标提交量）

```vue
<template>
  <ParrotIndexCard 
    title="商标提交量指数"
    main-label="昨日全国"
    :main-value="schedule.qgNum"
    main-unit="件"
    :sub-items="subItems"
  />
</template>

<script setup lang="uts">
const schedule = ref({
  qgNum: 1234,
  qgRatio: 5.2,
  shouli: '856',
  bohui: '234',
  chushen: '567',
  zhengshu: '123'
})

const subItems = ref([
  { label: '最新受理', value: schedule.value.shouli, ratio: 5.2 },
  { label: '最新驳回', value: schedule.value.bohui, ratio: -3.1 },
  { label: '最新初审', value: schedule.value.chushen, ratio: 2.8 },
  { label: '最新证书', value: schedule.value.zhengshu, ratio: -1.5 }
])
</script>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | `''` | 标题 |
| subtitle | `string` | `''` | 副标题 |
| mainLabel | `string` | `''` | 主数据标签 |
| mainValue | `number \| string` | `0` | 主数据值 |
| mainUnit | `string` | `''` | 主数据单位 |
| subItems | `SubItem[]` | `[]` | 子数据项数组 |
| customStyle | `string` | `''` | 自定义样式 |
| backgroundColor | `string` | `'#FFFFFF'` | 背景颜色 |
| titleColor | `string` | `'#333333'` | 标题颜色 |
| upColor | `string` | `'#F85252'` | 上涨颜色 |
| downColor | `string` | `'#18C385'` | 下跌颜色 |

### SubItem 数据结构

```typescript
interface SubItem {
  label: string       // 标签
  value: number | string  // 值
  unit?: string       // 单位
  ratio?: number      // 变化率（百分比）
}
```

## 样式变量

```scss
.parrot-index-card {
  --parrot-index-bg: #FFFFFF;
  --parrot-index-title-color: #333333;
  --parrot-index-value-up: #F85252;    // 红涨
  --parrot-index-value-down: #18C385;  // 绿跌
  --parrot-index-padding: 24rpx;
  --parrot-index-border-radius: 12rpx;
}
```

## 涨跌颜色规则

- **正值** → 红色 (`#F85252`) 📈
- **负值** → 绿色 (`#18C385`) 📉
- **零或无** → 默认色 (`#333333`)

## 注意事项

1. `mainValue` 和 `subItems` 的值支持数字和字符串
2. 比率 `ratio` 为百分比数值（如 `5.2` 表示 5.2%）
3. 自动根据正负值显示涨跌颜色
4. 所有尺寸单位为 `rpx`

## 主题预设

```vue
<!-- 默认红涨绿跌 -->
<ParrotIndexCard 
  title="股票指数"
  main-label="上证指数"
  :main-value="3200.56"
  :sub-items="[{ label: '涨跌幅', value: '+1.2%', ratio: 1.2 }]"
/>

<!-- 自定义颜色 -->
<ParrotIndexCard 
  title="销售数据"
  main-label="今日成交"
  :main-value="88888"
  up-color="#fa8c16"
  down-color="#52c41a"
/>
```
