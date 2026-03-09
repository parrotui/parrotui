# Parrot Notice Bar 公告栏组件

支持轮播和单条模式的公告栏组件，适用于通知、公告、提示等场景。

## 功能特性

- ✅ 支持轮播模式（垂直/水平）
- ✅ 支持单条模式
- ✅ 自定义左侧图标
- ✅ 可关闭设计
- ✅ 点击事件回调
- ✅ 灵活的样式定制

## 基础用法

### 单条公告

```vue
<template>
  <ParrotNoticeBar 
    data="系统将于今晚 22:00 进行维护，请提前保存数据。" 
  />
</template>

<script setup lang="uts">
import ParrotNoticeBar from '@/components/parrotui/parrot-notice-bar/parrot-notice-bar.uvue'
</script>
```

### 轮播公告

```vue
<template>
  <ParrotNoticeBar 
    :data="noticeList"
    mode="swiper"
    :autoplay="true"
    :interval="3000"
  />
</template>

<script setup lang="uts">
const noticeList = [
  '第 1925 期商标公告已发布',
  '商标法修订草案征求意见中',
  '2026 年商标注册时间安排通知'
]
</script>
```

## 进阶用法

### 1. 对象数组数据

```vue
<script setup lang="uts">
const notices = [
  { id: 1, title: '第 1925 期商标公告', url: '/notice/1' },
  { id: 2, title: '商标法修订草案', url: '/notice/2' },
  { id: 3, title: '2026 年时间安排', url: '/notice/3' }
]

const onItemClick = (item: any, index: number) => {
  uni.navigateTo({
    url: '/pages/notice/detail?id=' + item.id
  })
}
</script>

<ParrotNoticeBar 
  :data="notices"
  mode="swiper"
  @click="onItemClick"
/>
```

### 2. 自定义图标

```vue
<ParrotNoticeBar 
  data="重要通知：系统升级维护"
  :show-icon="true"
  icon-url="/static/images/notice-icon.png"
  :icon-style="'width: 40rpx; height: 40rpx;'"
/>
```

### 3. 可关闭模式

```vue
<ParrotNoticeBar 
  :data="noticeList"
  mode="swiper"
  :closable="true"
  @close="onClose"
/>
```

### 4. 水平滚动

```vue
<ParrotNoticeBar 
  :data="noticeList"
  mode="swiper"
  :vertical="false"
  :autoplay="true"
/>
```

### 5. 自定义样式

```vue
<ParrotNoticeBar 
  data="自定义样式公告"
  custom-style="background-color: #e6f7ff; border-radius: 16rpx;"
  color="#1890ff"
  :font-size="26"
/>
```

### 6. 不带图标

```vue
<ParrotNoticeBar 
  data="简洁模式公告"
  :show-icon="false"
/>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| data | `string \| string[] \| object[]` | `[]` | 公告数据 |
| mode | `'swiper' \| 'single'` | `'single'` | 显示模式 |
| vertical | `boolean` | `true` | 是否垂直滚动 |
| autoplay | `boolean` | `true` | 是否自动播放 |
| interval | `number` | `3000` | 自动播放间隔（ms） |
| circular | `boolean` | `true` | 是否循环播放 |
| showIndicators | `boolean` | `false` | 是否显示指示器 |
| showIcon | `boolean` | `true` | 是否显示左侧图标 |
| iconUrl | `string` | `''` | 图标 URL |
| iconStyle | `string` | `''` | 图标样式 |
| closable | `boolean` | `false` | 是否可关闭 |
| customStyle | `string` | `''` | 自定义样式 |
| color | `string` | `'#333333'` | 文本颜色 |
| fontSize | `number` | `24` | 字体大小（rpx） |
| backgroundColor | `string` | `'#FFF9F9'` | 背景颜色 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | `(item: NoticeItem, index: number)` | 点击公告项 |
| close | `-` | 关闭公告 |

## 样式变量

```scss
.parrot-notice-bar {
  --parrot-notice-bg: #FFF9F9;
  --parrot-notice-color: #333333;
  --parrot-notice-font-size: 24rpx;
  --parrot-notice-padding: 20rpx 24rpx;
  --parrot-notice-border-radius: 12rpx;
}
```

## 注意事项

1. `data` 支持字符串、字符串数组、对象数组
2. 对象数组时，优先显示 `title` 字段，其次 `content` 字段
3. 轮播模式时，`data` 应为数组
4. 所有尺寸单位为 `rpx`

## 主题预设

```vue
<!-- 警告风格 -->
<ParrotNoticeBar 
  data="警告：您的账户即将过期"
  background-color="#fff7e6"
  color="#fa8c16"
/>

<!-- 成功风格 -->
<ParrotNoticeBar 
  data="认证成功，感谢您的提交"
  background-color="#f6ffed"
  color="#52c41a"
/>

<!-- 信息风格 -->
<ParrotNoticeBar 
  data="系统已更新，欢迎体验新功能"
  background-color="#e6f7ff"
  color="#1890ff"
/>
```
