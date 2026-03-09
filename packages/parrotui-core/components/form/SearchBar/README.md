# Parrot Search Bar 搜索栏组件

功能丰富的搜索栏组件，支持搜索类型选择、分类选择、相机按钮等。

## 功能特性

- ✅ 搜索类型选择器（综合/近似/申请号/申请人等）
- ✅ 分类选择功能
- ✅ 相机按钮（图像搜索）
- ✅ 自定义占位符
- ✅ 双向绑定关键词
- ✅ 搜索事件回调

## 基础用法

```vue
<template>
  <ParrotSearchBar 
    v-model:keyword="keyword" 
    @search="onSearch" 
  />
</template>

<script setup lang="uts">
import ParrotSearchBar from '@/components/parrotui/parrot-search-bar/parrot-search-bar.uvue'

const keyword = ref('')
const onSearch = (kw: string, type: number, classIds: string[]) => {
  console.log('搜索:', kw, type, classIds)
}
</script>
```

## 进阶用法

### 1. 完整功能

```vue
<ParrotSearchBar 
  v-model:keyword="keyword"
  :search-types="customSearchTypes"
  :classes="tmClasses"
  :show-camera="true"
  placeholder="请输入商标名称"
  @search="onSearch"
  @searchTypeChange="onTypeChange"
  @cameraClick="onCameraClick"
/>
```

### 2. 简化模式（仅搜索框）

```vue
<ParrotSearchBar 
  v-model:keyword="keyword"
  :show-search-type="false"
  :show-class-selector="false"
  :show-camera="false"
  placeholder="请输入关键词"
  @search="onSearch"
/>
```

### 3. 自定义搜索类型

```vue
<script setup lang="uts">
const customSearchTypes = [
  { text: '名称', value: 1 },
  { text: '申请人', value: 2 },
  { text: '注册号', value: 3 }
]
</script>

<ParrotSearchBar 
  :search-types="customSearchTypes"
  @search="onSearch"
/>
```

### 4. 配合分类选择器使用

```vue
<template>
  <view>
    <ParrotSearchBar 
      v-model:keyword="keyword"
      :classes="classes"
      :show-selector="showSelector"
      @search="onSearch"
      @update:showSelector="showSelector = $event"
    />
    
    <!-- 分类选择器面板 -->
    <view v-if="showSelector" class="class-selector">
      <view 
        v-for="cls in classes" 
        :key="cls.identity" 
        :class="{ selected: cls.selected }"
        @click="toggleClass(cls)"
      >
        {{ cls.identity }} {{ cls.name }}
      </view>
    </view>
  </view>
</template>

<script setup lang="uts">
const classes = ref([
  { identity: '01', name: '化学原料', selected: false },
  { identity: '02', name: '颜料油漆', selected: false },
  // ... 更多分类
])

const showSelector = ref(false)

const toggleClass = (cls: any) => {
  cls.selected = !cls.selected
}
</script>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| keyword | `string` | `''` | 搜索关键词（支持 v-model） |
| placeholder | `string` | `'请输入商标名称'` | 占位符文本 |
| showSearchType | `boolean` | `true` | 是否显示搜索类型选择 |
| showClassSelector | `boolean` | `true` | 是否显示分类选择 |
| showCamera | `boolean` | `true` | 是否显示相机按钮 |
| searchTypes | `SearchType[]` | 默认 6 种类型 | 搜索类型列表 |
| searchType | `number` | `1` | 当前搜索类型值 |
| classes | `ClassItem[]` | `[]` | 分类列表 |
| showSelector | `boolean` | `false` | 是否显示分类选择器 |

### SearchType 数据结构

```typescript
interface SearchType {
  text: string   // 显示文本
  value: number  // 类型值
}
```

### ClassItem 数据结构

```typescript
interface ClassItem {
  identity: string  // 分类标识（如 '01'）
  name: string      // 分类名称（如 '化学原料'）
  selected: boolean // 是否选中
}
```

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| search | `(keyword: string, searchType: number, classIds: string[])` | 搜索按钮点击 |
| searchTypeChange | `(searchType: number)` | 搜索类型改变 |
| classSelectorClick | `-` | 分类选择器点击 |
| cameraClick | `-` | 相机按钮点击 |
| update:showSelector | `(value: boolean)` | 分类选择器显示状态改变 |

## 样式定制

### 修改颜色

```vue
<ParrotSearchBar 
  v-model:keyword="keyword"
  style="background-color: #e8f3ff;"
/>
```

### 修改尺寸

```vue
<ParrotSearchBar 
  v-model:keyword="keyword"
  style="padding: 20rpx 24rpx; border-radius: 40rpx;"
/>
```

## 注意事项

1. 分类选择器需要配合外部面板使用（参考示例 4）
2. 相机按钮点击后需自行实现 `uni.chooseImage` 逻辑
3. 搜索类型值可根据业务自定义
4. 所有尺寸单位为 `rpx`

## 主题变量

可通过 CSS 变量定制主题：

```scss
.parrot-search-bar {
  --parrot-search-bg: #f5f5f5;
  --parrot-search-input-bg: #ffffff;
  --parrot-search-text: #333333;
  --parrot-search-placeholder: #999999;
}
```
