# Parrot Trade Item 商标交易项组件

用于展示商标转让/交易信息的卡片组件。

## 功能特性

- ✅ 商标图样展示
- ✅ 名称与分类
- ✅ 价格显示（支持"议价"）
- ✅ 标签系统
- ✅ 图片加载失败处理
- ✅ 点击事件回调

## 基础用法

```vue
<template>
  <ParrotTradeItem 
    name="阿里云"
    class-id="09"
    class-name="科学仪器"
    :price="5000"
    image="https://example.com/logo.png"
    @click="onClick"
  />
</template>

<script setup lang="uts">
import ParrotTradeItem from '@/components/parrotui/parrot-trade-item/parrot-trade-item.uvue'

const onClick = (id: string, identity: string) => {
  uni.navigateTo({
    url: '/pages/trademark/trade/details?id=' + id
  })
}
</script>
```

## 进阶用法

### 1. 议价价格

```vue
<ParrotTradeItem 
  name="知名品牌"
  class-id="35"
  class-name="广告贸易"
  price="议价"
  image="/static/images/trade-logo.png"
/>
```

### 2. 带标签

```vue
<script setup lang="uts">
const tags = [
  { text: '热门', color: '#F85252' },
  { text: '急售', color: '#fa8c16' }
]
</script>

<ParrotTradeItem 
  name="优质商标"
  class-id="25"
  class-name="服装鞋帽"
  :price="8000"
  :tags="tags"
/>
```

### 3. 列表展示

```vue
<template>
  <view class="trade-list">
    <ParrotTradeItem 
      v-for="item in tradeList" 
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :class-id="item.cls"
      :class-name="item.cls_name"
      :price="item.price"
      :image="item.image"
      @click="onTradeClick"
    />
  </view>
</template>

<script setup lang="uts">
const tradeList = ref([
  { 
    id: '1', 
    name: '阿里云', 
    cls: '09', 
    cls_name: '科学仪器', 
    price: 50000,
    image: '/uploads/trade/1.png'
  },
  { 
    id: '2', 
    name: '腾讯通', 
    cls: '38', 
    cls_name: '通讯传媒', 
    price: '议价',
    image: '/uploads/trade/2.png'
  },
  // ... 更多
])

const onTradeClick = (id: string, identity: string) => {
  uni.navigateTo({
    url: '/pages/trademark/trade/details?id=' + id
  })
}
</script>

<style scoped lang="scss">
.trade-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  padding: 20rpx;
}
</style>
```

### 4. 自定义样式

```vue
<ParrotTradeItem 
  name="定制商标"
  class-id="14"
  class-name="珠宝钟表"
  :price="12000"
  custom-style="border: 2rpx solid #F85252;"
/>
```

### 5. 网格布局（响应式）

```vue
<template>
  <view class="trade-grid">
    <ParrotTradeItem 
      v-for="item in tradeList" 
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :class-id="item.cls"
      :class-name="item.cls_name"
      :price="item.price"
      :image="item.image"
    />
  </view>
</template>

<style scoped lang="scss">
.trade-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
  padding: 16rpx;
  
  /* 大屏幕显示 3 列 */
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| id | `string` | `''` | 交易 ID（用于回调） |
| identity | `string` | `''` | 数据标识 |
| name | `string` | `''` | 商标名称 |
| classId | `string` | `''` | 分类 ID（如 '09'） |
| className | `string` | `''` | 分类名称（如 '科学仪器'） |
| price | `number \| string` | `0` | 价格（支持"议价"） |
| image | `string` | `''` | 图样 URL |
| placeholder | `string` | 默认占位图 | 占位图 URL |
| tags | `Tag[]` | `[]` | 标签列表 |
| customStyle | `string` | `''` | 自定义样式 |

### Tag 数据结构

```typescript
interface Tag {
  text: string        // 标签文字
  color?: string      // 背景颜色
  textColor?: string  // 文字颜色
}
```

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | `(id: string, identity: string)` | 点击交易项 |

## 样式变量

```scss
.parrot-trade-item {
  --parrot-trade-bg: #FFFFFF;
  --parrot-trade-border-radius: 12rpx;
  --parrot-trade-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
  --parrot-trade-price-color: #F85252;
  --parrot-trade-class-bg: #F85252;
}
```

## 价格显示规则

- **数字价格** → 显示 `¥{price}` 格式，红色加粗
- **"议价"文本** → 直接显示文本，红色加粗
- **0 或空** → 显示"议价"

## 注意事项

1. 图片加载失败时自动显示占位图
2. 价格支持数字和"议价"等文本
3. 分类 ID 通常显示为红色标签
4. 所有尺寸单位为 `rpx`

## 分类 ID 预设颜色

```scss
// 可根据分类 ID 设置不同颜色
.class-01 { background-color: #1890ff; }  // 化学原料
.class-09 { background-color: #F85252; }  // 科学仪器
.class-25 { background-color: #fa8c16; }  // 服装鞋帽
// ... 更多分类
```

## 配合后端数据

```typescript
// 后端返回数据格式
interface TradeItem {
  id: string
  tm_id: string
  name: string
  cls: string          // 分类 ID
  cls_name: string     // 分类名称
  price: number | string
  tm_trade_image: string
  tm_trade_custom_image: string
}

// 组件使用
<ParrotTradeItem 
  :id="item.id"
  :name="item.name"
  :class-id="item.cls"
  :class-name="item.cls_name"
  :price="item.price"
  :image="item.tm_trade_custom_image || item.tm_trade_image"
/>
```
