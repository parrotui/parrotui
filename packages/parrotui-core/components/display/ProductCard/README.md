# Parrot Product Card 产品卡片组件

用于展示产品/服务信息的卡片组件，支持图标、价格、标签等元素。

## 功能特性

- ✅ 图标展示（文字/图片）
- ✅ 价格显示
- ✅ 标签系统
- ✅ 预设背景色
- ✅ 点击事件
- ✅ 自定义样式

## 基础用法

```vue
<template>
  <ParrotProductCard 
    name="商标注册"
    :price="300"
    unit="件"
    icon-text="商"
    @click="onClick"
  />
</template>

<script setup lang="uts">
import ParrotProductCard from '@/components/parrotui/parrot-product-card/parrot-product-card.uvue'

const onClick = (identity: string) => {
  console.log('点击了:', identity)
}
</script>
```

## 进阶用法

### 1. 带背景色 class

```vue
<ParrotProductCard 
  name="特惠注册"
  :price="200"
  icon-text="惠"
  bg-class="bg-f3e5ec"
/>
```

### 2. 带标签

```vue
<script setup lang="uts">
const tags = [
  { text: '热门', color: '#F85252' },
  { text: '特惠', color: '#1890ff' }
]
</script>

<ParrotProductCard 
  name="商标注册"
  :price="300"
  :tags="tags"
  icon-text="商"
/>
```

### 3. 带描述

```vue
<ParrotProductCard 
  name="担保注册"
  :price="800"
  icon-text="担"
  description="注册失败全额退款"
/>
```

### 4. 自定义图标

```vue
<ParrotProductCard 
  name="专利服务"
  :price="5000"
  icon-url="/static/images/patent-icon.png"
  :icon-style="'width: 50rpx; height: 50rpx;'"
/>
```

### 5. 不显示价格

```vue
<ParrotProductCard 
  name="咨询服务"
  icon-text="咨"
  :show-price="false"
  description="免费在线咨询"
/>
```

### 6. 完整示例（商标服务列表）

```vue
<template>
  <view class="products-grid">
    <ParrotProductCard 
      v-for="item in products" 
      :key="item.identity"
      :name="item.name"
      :price="item.price"
      :icon-text="item.iconText"
      :bg-class="item.bgClass"
      :identity="item.identity"
      @click="onProductClick"
    />
  </view>
</template>

<script setup lang="uts">
const products = [
  { 
    identity: 'zhuceth', 
    name: '特惠注册', 
    price: 200, 
    iconText: '惠', 
    bgClass: 'bg-f3e5ec' 
  },
  { 
    identity: 'zhuceep', 
    name: '三方注册', 
    price: 500, 
    iconText: '三', 
    bgClass: 'bg-EFECFD' 
  },
  { 
    identity: 'zhuce', 
    name: '自助注册', 
    price: 300, 
    iconText: '自', 
    bgClass: 'bg-FFF4EF' 
  },
  { 
    identity: 'zhucebm', 
    name: '保姆注册', 
    price: 600, 
    iconText: '保', 
    bgClass: 'bg-F2F8FD' 
  },
  { 
    identity: 'zhucedb', 
    name: '担保注册', 
    price: 800, 
    iconText: '担', 
    bgClass: 'bg-FDF8EC' 
  }
]

const onProductClick = (identity: string) => {
  uni.navigateTo({
    url: '/pages/trademark/form?type=' + identity
  })
}
</script>

<style scoped lang="scss">
.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20rpx;
  padding: 20rpx;
}
</style>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| name | `string` | `''` | 产品名称 |
| price | `number \| string` | `0` | 价格 |
| unit | `string` | `'件'` | 单位 |
| iconText | `string` | `''` | 图标文字 |
| iconUrl | `string` | `''` | 图标图片 URL |
| iconStyle | `string` | `''` | 图标样式 |
| iconClass | `string` | `''` | 图标 class |
| bgType | `string` | `'default'` | 背景类型 |
| bgClass | `string` | `''` | 自定义背景 class |
| showPrice | `boolean` | `true` | 是否显示价格 |
| tags | `Tag[]` | `[]` | 标签列表 |
| description | `string` | `''` | 描述文字 |
| customStyle | `string` | `''` | 自定义样式 |
| identity | `string` | `''` | 数据标识（用于回调） |

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
| click | `(identity: string)` | 点击卡片 |

## 预设背景 class

```scss
.bg-f3e5ec  // 淡紫色
.bg-EFECFD  // 淡蓝色
.bg-FFF4EF  // 淡橙色
.bg-F2F8FD  // 淡青色
.bg-FDF8EC  // 淡黄色
```

## 样式变量

```scss
.parrot-product-card {
  --parrot-product-bg: #f5f5f5;
  --parrot-product-name-color: #333333;
  --parrot-product-price-color: #F85252;
  --parrot-product-border-radius: 12rpx;
  --parrot-product-padding: 24rpx 20rpx;
}
```

## 注意事项

1. `iconText` 和 `iconUrl` 二选一使用
2. 价格支持数字和字符串（支持"议价"等文本）
3. 标签过多时会自动换行
4. 所有尺寸单位为 `rpx`

## 图标文字建议

根据服务类型使用单字：
- 商标注册：**商** / **惠** / **保** / **担**
- 专利服务：**专**
- 版权服务：**版**
- 法律服务：**法**
- 国际商标：**国**
