# Parrot Tab 标签切换组件

简洁灵活的标签切换组件，支持自定义样式和颜色。

## 功能特性

- ✅ 支持 v-model 双向绑定
- ✅ 自定义激活颜色
- ✅ 自定义字体大小
- ✅ 灵活的样式定制
- ✅ 点击事件回调

## 基础用法

```vue
<template>
  <ParrotTab 
    v-model="activeTab" 
    :items="tabItems" 
    @change="onChange" 
  />
</template>

<script setup lang="uts">
import ParrotTab from '@/components/parrotui/parrot-tab/parrot-tab.uvue'

const activeTab = ref('trademark')

const tabItems = [
  { label: '查商标', value: 'trademark' },
  { label: '买商标', value: 'trademarkTrade' },
  { label: '查公告', value: 'notice' }
]

const onChange = (item: any, index: number) => {
  console.log('切换到:', item.label)
}
</script>
```

## 进阶用法

### 1. 自定义颜色

```vue
<ParrotTab 
  v-model="activeTab" 
  :items="tabItems"
  active-color="#1890ff"
  default-color="#999999"
  :font-size="30"
/>
```

### 2. 自定义样式

```vue
<ParrotTab 
  v-model="activeTab" 
  :items="tabItems"
  custom-style="background-color: #e8f3ff; border-radius: 40rpx;"
/>
```

### 3. 数字值

```vue
<script setup lang="uts">
const activeTab = ref(1)

const tabItems = [
  { label: '全部', value: 0 },
  { label: '进行中', value: 1 },
  { label: '已完成', value: 2 }
]
</script>

<ParrotTab 
  v-model="activeTab" 
  :items="tabItems"
/>
```

### 4. 配合内容区域使用

```vue
<template>
  <view>
    <ParrotTab 
      v-model="activeTab" 
      :items="tabItems" 
    />
    
    <scroll-view scroll-y class="content">
      <view v-if="activeTab === 'trademark'">
        <!-- 查商标内容 -->
      </view>
      <view v-if="activeTab === 'trademarkTrade'">
        <!-- 买商标内容 -->
      </view>
      <view v-if="activeTab === 'notice'">
        <!-- 公告内容 -->
      </view>
    </scroll-view>
  </view>
</template>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | `string \| number` | `''` | 当前选中的值（支持 v-model） |
| items | `TabItem[]` | `[]` | Tab 项列表 |
| customStyle | `string` | `''` | 自定义样式 |
| activeColor | `string` | `'#F85252'` | 激活颜色 |
| defaultColor | `string` | `'#666666'` | 默认颜色 |
| fontSize | `number` | `28` | 字体大小（rpx） |

### TabItem 数据结构

```typescript
interface TabItem {
  label: string       // 显示文本
  value: string | number  // 值
}
```

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:modelValue | `(value: string | number)` | 选中值改变 |
| change | `(item: TabItem, index: number)` | 点击 Tab 项 |

## 样式定制

### 使用 CSS 变量

```scss
.parrot-tab {
  --parrot-tab-bg: #f5f5f5;
  --parrot-tab-active-color: #F85252;
  --parrot-tab-default-color: #666666;
}
```

### 直接内联样式

```vue
<ParrotTab 
  v-model="activeTab" 
  :items="tabItems"
  custom-style="
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 10rpx 20rpx;
  "
/>
```

## 注意事项

1. `items` 数组中的 `value` 值必须唯一
2. `modelValue` 需要与 `items` 中某项的 `value` 匹配
3. 所有尺寸单位为 `rpx`
4. 颜色支持 hex、rgb、rgba 格式
