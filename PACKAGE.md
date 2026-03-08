# ParrotUI

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![UniApp X](https://img.shields.io/badge/UniApp-X-green.svg)](https://uniapp.dcloud.net.cn/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)

> 🦜 ParrotUI 是一套基于 UniApp X 构建的轻量级、高性能移动端 UI 组件库，专为知识产权与企业服务场景设计。

## ✨ 特性

- 🚀 **轻量级** - 按需引入，无多余依赖
- ⚡ **高性能** - 基于 UniApp X 原生能力，编译为多端应用
- 🎨 **易扩展** - 模块化设计，支持按需定制
- 📱 **多端兼容** - Android / iOS / 鸿蒙 / 小程序 / H5
- 💼 **业务导向** - 内置知产行业专用组件

## 📦 安装

```bash
# 克隆或复制 parrotui 目录到项目 components/ 目录
# 在 HBuilderX 中打开项目
```

## 🚀 快速开始

```vue
<template>
  <view>
    <ParrotSearchBar v-model:keyword="keyword" @search="onSearch" />
    <ParrotProductCard name="商标注册" price="300" icon-text="商" />
  </view>
</template>

<script setup lang="uts">
import ParrotSearchBar from '@/components/parrotui/parrot-search-bar/parrot-search-bar.uvue'
import ParrotProductCard from '@/components/parrotui/parrot-product-card/parrot-product-card.uvue'

const keyword = ref('')
const onSearch = () => {
  console.log('搜索：', keyword.value)
}
</script>
```

## 📚 组件列表

### 基础组件

| 组件 | 说明 | 路径 |
|------|------|------|
| ParrotIcon | 图标组件 | `parrot-icon/` |
| ParrotButton | 按钮组件 | `parrot-button/` |
| ParrotPrice | 价格展示 | `parrot-price/` |

### 导航组件

| 组件 | 说明 | 路径 |
|------|------|------|
| ParrotNavBar | 导航栏 | `parrot-nav-bar/` |
| ParrotTab | 标签切换 | `parrot-tab/` |
| ParrotFooter | 页脚 | `parrot-footer/` |
| ParrotFooterLinks | 页脚链接组 | `parrot-footer-links/` |

### 表单组件

| 组件 | 说明 | 路径 |
|------|------|------|
| ParrotSearchBar | 搜索栏 | `parrot-search-bar/` |
| ParrotSelector | 选择器 | `parrot-selector/` |
| ParrotFilterDrawer | 筛选抽屉 | `parrot-filter-drawer/` |

### 展示组件

| 组件 | 说明 | 路径 |
|------|------|------|
| ParrotNoticeBar | 公告栏 | `parrot-notice-bar/` |
| ParrotIndexCard | 指数卡片 | `parrot-index-card/` |
| ParrotProductCard | 产品卡片 | `parrot-product-card/` |
| ParrotTradeItem | 交易项 | `parrot-trade-item/` |
| ParrotTimeline | 时间轴 | `parrot-timeline/` |

### 业务组件

| 组件 | 说明 | 路径 |
|------|------|------|
| ParrotTmClassSelector | 商标分类选择器 | `parrot-tm-class-selector/` |
| ParrotTmStatusTag | 商标状态标签 | `parrot-tm-status-tag/` |
| ParrotApplicantCard | 申请人卡片 | `parrot-applicant-card/` |

## 📐 设计规范

### 颜色

```typescript
// 主色
const PRIMARY_COLOR = '#F85252'      // 品牌红
const SUCCESS_COLOR = '#18C385'      // 成功绿
const WARNING_COLOR = '#FF976A'      // 警告橙
const INFO_COLOR = '#1989FA'         // 信息蓝

// 文本色
const TEXT_PRIMARY = '#333333'
const TEXT_REGULAR = '#666666'
const TEXT_SECONDARY = '#999999'

// 背景色
const BG_WHITE = '#FFFFFF'
const BG_GRAY = '#F7F8FA'
```

### 字体

```typescript
const FONT_SIZE_XS = 20
const FONT_SIZE_SM = 22
const FONT_SIZE_MD = 24
const FONT_SIZE_LG = 28
const FONT_SIZE_XL = 32
```

### 间距

```typescript
const SPACING_XS = 8
const SPACING_SM = 12
const SPACING_MD = 16
const SPACING_LG = 24
const SPACING_XL = 32
```

## 🔧 开发指南

### 创建新组件

```bash
parrotui/
  └── parrot-my-component/
      ├── parrot-my-component.uvue
      ├── parrot-my-component.scss
      ├── README.md
      └── index.uts
```

### 组件模板

```vue
<template>
  <view class="parrot-my-component">
    <!-- 组件内容 -->
  </view>
</template>

<script setup lang="uts">
  defineProps<{
    prop1?: string
    prop2?: number
  }>()

  const emit = defineEmits<{
    (event: 'change', value: string): void
  }>()
</script>

<style scoped lang="scss">
  .parrot-my-component {
    // 样式
  }
</style>
```

## 📱 多端适配

### 平台判断

```typescript
import { getSystemInfoSync } from '@dcloudio/uni-app'

const systemInfo = getSystemInfoSync()
const platform = systemInfo.platform
```

### 条件编译

```vue
<!-- #ifdef APP-PLUS -->
<view>仅在 App 端显示</view>
<!-- #endif -->

<!-- #ifdef H5 -->
<view>仅在 H5 端显示</view>
<!-- #endif -->
```

## 🤝 贡献指南

### 提交流程

1. Fork 项目
2. 创建分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'feat: add your feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 创建 Pull Request

### 提交信息规范

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档更新
- `style:` 样式调整
- `refactor:` 重构
- `test:` 测试相关
- `chore:` 构建/工具相关

## 📄 开源协议

MIT License

## 🔗 相关链接

- [UniApp X 官方文档](https://uniapp.dcloud.net.cn/)
- [Vue 3 官方文档](https://vuejs.org/)
- [鹦鹉知产网](https://www.yingwu.net)

## 📞 联系方式

- 项目地址：https://github.com/parrotip/parrotui
- 问题反馈：https://github.com/parrotip/parrotui/issues
