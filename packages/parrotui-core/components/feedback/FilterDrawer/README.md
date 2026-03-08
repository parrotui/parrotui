# Parrot Filter Drawer 筛选抽屉组件

从右侧滑出的筛选抽屉组件，适用于分类筛选、条件选择等场景。

## 功能特性

- ✅ 右侧滑出动画
- ✅ 遮罩层点击关闭
- ✅ 支持 v-model 双向绑定
- ✅ 确认/取消按钮
- ✅ 当前选中值显示
- ✅ 滚动列表

## 基础用法

```vue
<template>
  <view>
    <!-- 触发按钮 -->
    <button @click="showFilter = true">筛选</button>
    
    <!-- 筛选抽屉 -->
    <ParrotFilterDrawer 
      v-model:visible="showFilter"
      v-model="selectedCls"
      :options="classOptions"
      title="筛选类别"
      @confirm="onConfirm"
    />
  </view>
</template>

<script setup lang="uts">
import ParrotFilterDrawer from '@/components/parrotui/parrot-filter-drawer/parrot-filter-drawer.uvue'

const showFilter = ref(false)
const selectedCls = ref('')

const classOptions = [
  { label: '第 01 类 化学原料', value: '01' },
  { label: '第 02 类 颜料油漆', value: '02' },
  { label: '第 03 类 化妆品', value: '03' },
  { label: '第 09 类 科学仪器', value: '09' }
]

const onConfirm = (value: string) => {
  console.log('选中的类别:', value)
}
</script>
```

## 进阶用法

### 1. 带当前值显示

```vue
<ParrotFilterDrawer 
  v-model:visible="showFilter"
  v-model="selectedCls"
  :options="classOptions"
  title="商标类别"
  current-text="已选择：第{{ selectedCls }}类"
/>
```

### 2. 自定义全部选项文字

```vue
<ParrotFilterDrawer 
  v-model:visible="showFilter"
  v-model="selectedCls"
  :options="classOptions"
  all-text="不限类别"
/>
```

### 3. 配合搜索栏使用

```vue
<template>
  <view>
    <ParrotSearchBar 
      v-model:keyword="keyword"
      :show-class-selector="false"
      @search="onSearch"
    />
    
    <view class="filter-bar">
      <view class="filter-btn" @click="showFilter = true">
        <text>类别筛选</text>
        <text class="filter-value">{{ selectedClsName }}</text>
      </view>
    </view>
    
    <ParrotFilterDrawer 
      v-model:visible="showFilter"
      v-model="selectedCls"
      :options="classOptions"
      title="商标类别"
      @confirm="onFilterConfirm"
    />
  </view>
</template>

<script setup lang="uts">
const selectedCls = ref('')
const showFilter = ref(false)

const selectedClsName = computed(() => {
  if (!selectedCls.value) return '全部'
  const cls = classOptions.find(o => o.value === selectedCls.value)
  return cls ? cls.label : '全部'
})

const onFilterConfirm = (value: string) => {
  // 执行筛选
  console.log('筛选:', value)
}
</script>
```

### 4. 监听取消事件

```vue
<ParrotFilterDrawer 
  v-model:visible="showFilter"
  v-model="selectedCls"
  :options="classOptions"
  @cancel="onCancel"
  @close="onClose"
/>
```

### 5. 完整示例（商标交易筛选）

```vue
<template>
  <view class="trade-page">
    <!-- 搜索栏 -->
    <ParrotSearchBar 
      v-model:keyword="keyword"
      :show-search-type="false"
      :show-class-selector="false"
      :show-camera="false"
      placeholder="请输入关键词"
      @search="onSearch"
    />
    
    <!-- 筛选按钮 -->
    <view class="trade-filter-bar">
      <view class="trade-filter-btn" @click="showFilter = true">
        <text class="iconfont icon-shaixuan"></text>
        <text>类别</text>
        <text class="trade-filter-value">{{ filterClsName }}</text>
      </view>
    </view>
    
    <!-- 商标列表 -->
    <view class="trade-list">
      <ParrotTradeItem 
        v-for="item in filteredList" 
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :class-id="item.cls"
        :class-name="item.cls_name"
        :price="item.price"
        :image="item.image"
      />
    </view>
    
    <!-- 筛选抽屉 -->
    <ParrotFilterDrawer 
      v-model:visible="showFilter"
      v-model="selectedCls"
      :options="classOptions"
      title="筛选商标类别"
      :current-text="selectedCls ? '已选择：第' + selectedCls + '类' : '全部类别'"
      @confirm="onFilterConfirm"
    />
  </view>
</template>

<script setup lang="uts">
const keyword = ref('')
const selectedCls = ref('')
const showFilter = ref(false)
const tradeList = ref([])

const classOptions = [
  { label: '第 01 类 化学原料', value: '01' },
  { label: '第 02 类 颜料油漆', value: '02' },
  // ... 更多类别
]

const filterClsName = computed(() => {
  if (!selectedCls.value) return '全部'
  const cls = classOptions.find(o => o.value === selectedCls.value)
  return cls ? cls.label : '全部'
})

const filteredList = computed(() => {
  if (!selectedCls.value) return tradeList.value
  return tradeList.value.filter(item => item.cls === selectedCls.value)
})

const onSearch = () => {
  // 执行搜索
}

const onFilterConfirm = (value: string) => {
  // 执行筛选
  console.log('筛选类别:', value)
}
</script>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| visible | `boolean` | `false` | 是否显示（支持 v-model:visible） |
| modelValue | `string \| number` | `''` | 当前选中的值（支持 v-model） |
| title | `string` | `'筛选'` | 标题 |
| options | `FilterOption[]` | `[]` | 选项列表 |
| allText | `string` | `'全部'` | 全部选项文字 |
| currentText | `string` | `''` | 当前值显示文字 |
| customStyle | `string` | `''` | 自定义样式 |

### FilterOption 数据结构

```typescript
interface FilterOption {
  label: string           // 显示文本
  value: string | number  // 值
}
```

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:visible | `(value: boolean)` | 显示状态改变 |
| update:modelValue | `(value: string \| number)` | 选中值改变 |
| confirm | `(value: string \| number)` | 确认事件 |
| cancel | `-` | 取消事件 |
| close | `-` | 关闭事件（点击遮罩或关闭按钮） |

## 样式变量

```scss
.parrot-filter-drawer {
  --parrot-filter-width: 600rpx;
  --parrot-filter-bg: #FFFFFF;
  --parrot-filter-mask-bg: rgba(0, 0, 0, 0.5);
  --parrot-filter-active-bg: #FFF5F5;
  --parrot-filter-primary: #F85252;
}
```

## 注意事项

1. 使用 `v-model:visible` 控制显示/隐藏
2. 使用 `v-model` 绑定选中值
3. 点击遮罩层会触发关闭事件
4. 确认时才会更新 `v-model` 的值
5. 所有尺寸单位为 `rpx`

## 动画说明

- **滑入**：从右侧滑入（`translateX(100%)` → `translateX(0)`）
- **动画时长**：0.3s
- **缓动函数**：ease

## 自定义抽屉宽度

```vue
<ParrotFilterDrawer 
  v-model:visible="showFilter"
  custom-style="width: 700rpx;"
/>
```
