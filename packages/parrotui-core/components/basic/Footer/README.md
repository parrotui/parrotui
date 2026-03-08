# Parrot Footer 组件

高度可定制的页脚组件，支持字体、字重、颜色、背景、对齐方式、超链接、间距等灵活设置。

## 功能特性

- ✅ 支持 Logo 展示（图片或文字）
- ✅ 支持站点描述
- ✅ 支持多导航链接，可独立设置样式
- ✅ 支持版权信息和 ICP 备案号
- ✅ 支持外部链接和新窗口打开
- ✅ 全面的样式控制（字体/字重/颜色/背景/对齐/间距）
- ✅ 支持固定在底部
- ✅ 支持自定义插槽

## 基础用法

```vue
<template>
  <parrot-footer
    :navigate="navList"
    copyright="© 2026 鹦鹉知识产权"
    icp="京 ICP 备 12345678 号"
  />
</template>

<script setup lang="uts">
import ParrotFooter from '@/components/parrotui/parrot-footer/parrot-footer.uvue'

const navList = [
  { text: '关于我们', url: '/pages/about/index' },
  { text: '隐私政策', path: 'yinsi' },
  { text: '服务条款', path: 'fuwutiaokuan' }
]
</script>
```

## 进阶用法

### 1. 深色背景 + 白色文字

```vue
<parrot-footer
  :navigate="navList"
  copyright="© 2026 鹦鹉知识产权"
  icp="京 ICP 备 12345678 号"
  backgroundColor="#1a1a1a"
  color="#ffffff"
  navColor="#cccccc"
  copyrightColor="#999999"
  icpColor="#999999"
  padding="40rpx 30rpx"
/>
```

### 2. 带 Logo 和描述

```vue
<parrot-footer
  :navigate="navList"
  showLogo="true"
  logoUrl="/static/logo.png"
  siteName="鹦鹉知识产权"
  description="专业的知识产权服务平台"
  copyright="© 2026 鹦鹉知识产权"
  icp="京 ICP 备 12345678 号"
  logoWidth="200"
  logoHeight="60"
/>
```

### 3. 固定在底部

```vue
<parrot-footer
  :navigate="navList"
  copyright="© 2026 鹦鹉知识产权"
  isFixed="true"
  :bottom="0"
  :zIndex="999"
  backgroundColor="rgba(255, 255, 255, 0.95)"
  boxShadow="0 -2rpx 10rpx rgba(0, 0, 0, 0.1)"
/>
```

### 4. 导航项独立样式

```vue
<script setup lang="uts">
const navList = [
  { 
    text: '首页', 
    url: '/pages/index/index',
    color: '#333333',
    fontSize: 26,
    fontWeight: 'bold'
  },
  { 
    text: '服务', 
    url: '/pages/service/index',
    color: '#1890ff',
    fontSize: 26
  },
  { 
    text: '微博', 
    href: 'https://weibo.com/parrotip',
    isExternal: true,
    color: '#e6162d'
  }
]
</script>
```

### 5. 横向布局

```vue
<parrot-footer
  :navigate="navList"
  copyright="© 2026 鹦鹉知识产权"
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  padding="20rpx 30rpx"
/>
```

### 6. 圆角卡片风格

```vue
<parrot-footer
  :navigate="navList"
  copyright="© 2026 鹦鹉知识产权"
  margin="20rpx"
  padding="30rpx"
  backgroundColor="#ffffff"
  borderRadius="16rpx"
  boxShadow="0 4rpx 20rpx rgba(0, 0, 0, 0.08)"
/>
```

## API 参数

### 数据属性

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| navigate | `NavItem[]` | `[]` | 导航链接数组 |
| text | `string` | `''` | 底部文本 |
| copyright | `string` | `''` | 版权信息（优先级高于 text） |
| icp | `string` | `''` | ICP 备案号 |
| siteName | `string` | `''` | 站点名称 |
| logoUrl | `string` | `''` | Logo 图片 URL |
| description | `string` | `''` | 站点描述 |

### 显示控制

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| showLogo | `boolean` | `false` | 是否显示 Logo |
| showSeparator | `boolean` | `true` | 是否显示分隔符 |

### 容器样式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| margin | `string` | `''` | 外边距 |
| padding | `string` | `'24rpx 30rpx'` | 内边距 |
| backgroundColor | `string` | `'transparent'` | 背景颜色 |
| borderRadius | `string` | `''` | 圆角 |
| boxShadow | `string` | `''` | 盒阴影 |

### 布局属性

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| direction | `string` | `'column'` | 布局方向：row/column |
| justifyContent | `string` | `'center'` | 水平对齐方式 |
| alignItems | `string` | `'center'` | 垂直对齐方式 |
| gap | `string` | `'16rpx'` | 子元素间距 |

### 全局字体

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| color | `string` | `'#999999'` | 全局文本颜色 |
| fontSize | `number` | `24` | 全局字体大小 (rpx) |
| fontWeight | `string|number` | `'normal'` | 全局字重 |
| fontFamily | `string` | `''` | 全局字体家族 |
| lineHeight | `number` | `1.6` | 全局行高 |
| textAlign | `string` | `'center'` | 文本对齐方式 |

### Logo 样式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| logoWidth | `number` | `180` | Logo 宽度 (rpx) |
| logoHeight | `number` | `50` | Logo 高度 (rpx) |
| logoColor | `string` | `'#333333'` | Logo 文字颜色 |
| logoFontSize | `number` | `28` | Logo 文字大小 (rpx) |
| logoMargin | `string` | `'0 0 16rpx 0'` | Logo 边距 |

### 描述样式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| descriptionColor | `string` | `'#666666'` | 描述文字颜色 |
| descriptionFontSize | `number` | `24` | 描述文字大小 (rpx) |
| descriptionMargin | `string` | `'0 0 20rpx 0'` | 描述边距 |

### 导航样式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| navColor | `string` | `'#999999'` | 导航默认颜色 |
| navFontSize | `number` | `24` | 导航默认大小 (rpx) |
| navGap | `string` | `'24rpx'` | 导航项间距 |
| separatorColor | `string` | `'#CCCCCC'` | 分隔符颜色 |

### 版权样式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| copyrightColor | `string` | `'#999999'` | 版权文字颜色 |
| copyrightFontSize | `number` | `22` | 版权文字大小 (rpx) |
| copyrightMargin | `string` | `'8rpx 0'` | 版权边距 |

### ICP 样式

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| icpColor | `string` | `'#999999'` | ICP 文字颜色 |
| icpFontSize | `number` | `22` | ICP 文字大小 (rpx) |
| icpMargin | `string` | `'8rpx 0'` | ICP 边距 |

### 定位属性

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| isFixed | `boolean` | `false` | 是否固定底部 |
| bottom | `number` | `0` | 底部距离 (rpx) |
| zIndex | `number` | `100` | 层级 |

## NavItem 数据结构

```typescript
interface NavItem {
  text: string              // 必填：显示文本
  url?: string              // 内部链接
  href?: string             // 外部链接（完整 URL）
  openType?: string         // 跳转方式：navigate/switchTab
  color?: string            // 独立颜色
  fontSize?: number         // 独立字体大小
  fontWeight?: string       // 独立字重
  isExternal?: boolean      // 是否外部链接
}
```

## 注意事项

1. 外部链接使用 `href` 属性或设置 `isExternal: true`
2. 内部导航使用 `url` 属性
3. 文章路径使用 `path` 属性（自动跳转到文章页）
4. 所有尺寸单位均为 `rpx`
5. 颜色支持 hex、rgb、rgba 格式
