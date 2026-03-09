# Parrot UI

**基于 uni-app X 的跨终端组件库 · MIT 开源 · 欢迎共建**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![uni-app X](https://img.shields.io/badge/uni--app%20X-supported-green.svg)](https://uniapp.dcloud.net.cn/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/parrotui/parrotui/pulls)

Parrot UI 是一套面向企业级应用的跨终端组件库，基于 **uni-app X + Vue3 Composition API + UTS** 构建。
支持 Android / iOS / HarmonyOS / 微信小程序 / Web 等多端统一运行，提供完整的设计令牌系统、主题切换、国际化及 165+ 组件。

> 创始于 2026 年 3 月 8 日 · 文档站点: [doc.parrotui.com](https://doc.parrotui.com)

---

## 目录

- [架构概览](#架构概览)
- [Monorepo 目录结构](#monorepo-目录结构)
- [快速开始](#快速开始)
- [设计令牌系统](#设计令牌系统)
- [组件总览 (165)](#组件总览-165)
- [Composables 组合式 API](#composables-组合式-api)
- [Directives 指令工具](#directives-指令工具)
- [Utils 工具函数](#utils-工具函数)
- [CSS 工具类](#css-工具类)
- [主题系统](#主题系统)
- [国际化 i18n](#国际化-i18n)
- [开发规范](#开发规范)
- [贡献指南](#贡献指南)

---

## 架构概览

```
┌─────────────────────────────────────────────────────────────┐
│                      Application Layer                      │
│                  页面直接导入组件 / Composables                │
├─────────────────────────────────────────────────────────────┤
│                    @parrotui/core (index.ts)                 │
│   统一导出所有组件、Composables、Directives、Utils、Tokens     │
├──────────┬──────────┬──────────┬──────────┬─────────────────┤
│Components│Composable│Directives│  Utils   │     Tokens      │
│ 14 分类  │ 4 个 Hook│ 3 个指令 │ 4 个模块 │ 颜色/间距/阴影   │
│ 165 组件 │          │          │          │                 │
├──────────┴──────────┴──────────┴──────────┴─────────────────┤
│                       Styles Layer                          │
│    variables.css  ·  base.css  ·  animations.css  ·  reset  │
├─────────────────────────────────────────────────────────────┤
│                  uni-app X Runtime (UTS)                     │
│        Android  ·  iOS  ·  HarmonyOS  ·  小程序  ·  Web      │
└─────────────────────────────────────────────────────────────┘
```

**核心设计原则**

| 原则 | 说明 |
|------|------|
| **Token 驱动** | 所有颜色、间距、字体、阴影均由设计令牌统一管理，确保视觉一致性 |
| **BEM 命名** | CSS 类名统一使用 `parrot-` 前缀 + BEM 规范 |
| **rpx 响应式** | 使用 rpx 单位实现跨平台屏幕适配 |
| **Composition API** | 所有组件使用 `<script setup lang="uts">` |
| **按需导出** | 通过 index.ts 统一导出，支持 Tree-shaking |
| **14 分类体系** | 组件按职责划分为 14 个物理分类，结构清晰 |

---

## Monorepo 目录结构

```
parrotui/
├── packages/
│   ├── parrotui-core/              # 核心包（主入口）
│   │   ├── index.ts                # 统一导出入口
│   │   ├── components/             # 组件目录（14 分类）
│   │   │   ├── basic/              # 基础组件 (25)
│   │   │   ├── display/            # 展示组件 (16)
│   │   │   ├── form/               # 表单组件 (24)
│   │   │   ├── data/               # 数据组件 (7)
│   │   │   ├── feedback/           # 操作反馈 (6)
│   │   │   ├── navigation/         # 导航组件 (18)
│   │   │   ├── overlay/            # 弹层组件 (13)
│   │   │   ├── layout/             # 布局组件 (16)
│   │   │   ├── motion/             # 动效组件 (4)
│   │   │   ├── canvas/             # 画布组件 (4)
│   │   │   ├── utility/            # 工具组件 (13)
│   │   │   ├── extended/           # 扩展组件 (8)
│   │   │   ├── experimental/       # 实验组件 (5)
│   │   │   └── system/             # 系统组件 (6)
│   │   ├── composables/            # 组合式 API (4)
│   │   │   ├── useColor.ts
│   │   │   ├── useResponsive.ts
│   │   │   ├── useLocale.ts
│   │   │   └── useTheme.ts
│   │   ├── directives/             # 指令工具 (3)
│   │   │   ├── vcopy.ts
│   │   │   ├── vloading.ts
│   │   │   └── vpermission.ts
│   │   ├── utils/                  # 工具函数 (4)
│   │   │   ├── color.ts
│   │   │   ├── dom.ts
│   │   │   ├── event.ts
│   │   │   └── validator.ts
│   │   ├── tokens/                 # 设计令牌
│   │   │   ├── colors.ts
│   │   │   ├── spacing.ts
│   │   │   ├── typography.ts
│   │   │   └── shadows.ts
│   │   ├── theme/                  # 主题配置
│   │   │   ├── index.ts
│   │   │   ├── light.ts
│   │   │   ├── dark.ts
│   │   │   └── adminTheme.ts
│   │   └── styles/                 # 全局样式
│   │       ├── variables.css
│   │       ├── base.css
│   │       ├── animations.css
│   │       └── reset.css
│   ├── parrotui-icons/             # 图标包
│   ├── parrotui-utils/             # 底层工具
│   └── parrotui-cli/               # CLI 工具
├── docs/                           # VitePress 文档站
├── .github/workflows/              # CI/CD
│   ├── ci.yml
│   ├── docs.yml                    # GitHub Pages 自动部署
│   └── release.yml
└── package.json
```

---

## 快速开始

### 安装

```bash
npm install @parrotui/core
# 或
pnpm add @parrotui/core
```

### 导入方式

```typescript
// 全量导入
import * as ParrotUI from '@parrotui/core'

// 按需导入组件
import { ParrotButton, ParrotCard, ParrotInput } from '@parrotui/core'

// 导入 Composables
import { useColor, useResponsive, useLocale, useTheme } from '@parrotui/core'

// 导入工具函数
import { validate, isPhone, debounce, eventBus } from '@parrotui/core'

// 导入指令
import { copyText, showLoading, usePermission } from '@parrotui/core'

// 导入样式
import '@parrotui/core/styles/variables.css'
import '@parrotui/core/styles/base.css'
import '@parrotui/core/styles/animations.css'
```

### 基础示例

```vue
<template>
  <view class="page">
    <parrot-button type="primary" text="主按钮" @click="onClick" />
    <parrot-input v-model="name" placeholder="请输入姓名" />
    <parrot-card title="信息卡片">
      <parrot-text :text="greeting" />
    </parrot-card>
  </view>
</template>

<script setup lang="uts">
import { ref, computed } from 'vue'
import { ParrotButton, ParrotInput, ParrotCard, ParrotText } from '@parrotui/core'

const name = ref('')
const greeting = computed(() => name.value ? `你好，${name.value}！` : '请输入姓名')
const onClick = () => { uni.showToast({ title: '点击了' }) }
</script>
```

---

## 设计令牌系统

### 颜色体系

7 大色系，每色系 10 级梯度（50-900），共 70 个颜色值：

| 色系 | 基准色 (500) | 用途 |
|------|-------------|------|
| **primary** | `#1a7eff` | 品牌主色、主要操作按钮、链接 |
| **secondary** | `#7c3aed` | 辅助强调、次要操作 |
| **success** | `#41a906` | 成功状态、确认操作 |
| **warning** | `#e6a23c` | 警告提示、需要注意 |
| **danger** | `#f56c6c` | 错误状态、危险操作、删除 |
| **info** | `#6c6f78` | 辅助信息、说明文字 |
| **neutral** | `#999999` | 灰阶、边框、分割线、背景 |

**梯度生成规则：**
- 50~400：基准色与白色混合（92%→26% 白色比例）
- 500：基准色
- 600~900：基准色与黑色混合（16%→68% 黑色比例）

### 语义颜色

```typescript
textColors   // 文本色：primary / regular / secondary / placeholder / disabled
bgColors     // 背景色：page / card / hover / active / mask
borderColors // 边框色：base / light / lighter / extra-light
specialColors // 特殊色：link / warning-bg / danger-bg / success-bg
```

### 间距令牌

```typescript
spacing: { xs: '8rpx', sm: '16rpx', md: '24rpx', lg: '32rpx', xl: '48rpx', xxl: '64rpx' }
```

### 阴影令牌

```typescript
shadows: { sm, base, md, lg, xl } // 5 级阴影由浅到深
```

---

## 组件总览 (165)

### 基础组件 basic (25)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Button | `ParrotButton` | 按钮（solid/outline/ghost/link/text 5 种变体，支持图标、长按） |
| Icon | `ParrotIcon` | 图标（旋转、脉冲/弹跳动画、翻转、徽标） |
| Text | `ParrotText` | 文本（链接/价格/电话/姓名脱敏模式，h1-h6 标题级别，可复制） |
| Color | `ParrotColor` | 颜色色块（swatch 模式显示色值，主题令牌，透明度） |
| Number | `ParrotNumber` | 数字展示（统计卡片模式、趋势指示器、前后缀） |
| Footer | `ParrotFooter` | 页脚（default/branded/minimal 变体，安全区适配） |
| Heading | `ParrotHeading` | 标题（h1-h6 六级，4 种颜色类型） |
| Paragraph | `ParrotParagraph` | 段落（3 种尺寸、缩进、对齐） |
| Caption | `ParrotCaption` | 说明文字（固定 22rpx，4 种颜色类型） |
| Code | `ParrotCode` | 代码块（行号、复制按钮、暗色主题） |
| Quote | `ParrotQuote` | 引用（边框/背景/图标 3 种类型，作者署名） |
| Statistic | `ParrotStatistic` | 统计数值（趋势指示、精度控制、千分位） |
| Counter | `ParrotCounter` | 动画计数器（数字递增动画、可配持续时间） |
| Currency | `ParrotCurrency` | 货币展示（符号、千分位、5 种尺寸、删除线） |
| Percentage | `ParrotPercentage` | 百分比（趋势箭头、涨跌配色） |
| IconButton | `ParrotIconButton` | 图标按钮（circle/square/round，徽标/圆点） |
| ButtonGroup | `ParrotButtonGroup` | 按钮组（水平/垂直布局，相邻边框合并） |
| Chip | `ParrotChip` | 标签片（可选中、可关闭、图标+文本） |
| Spacer | `ParrotSpacer` | 间距占位（水平/垂直方向，可配尺寸） |
| Image | `ParrotImage` | 图片（加载/错误占位、圆形/圆角、预览、懒加载） |
| Picture | `ParrotPicture` | 图文（图片+说明文字，对齐控制） |
| AspectRatio | `ParrotAspectRatio` | 宽高比容器（CSS padding-bottom 实现比例锁定） |
| RangeSlider | `ParrotRangeSlider` | 双滑块滑块（触摸事件、数值显示、范围高亮） |
| Highlight | `ParrotHighlight` | 关键词高亮（正则匹配、大小写敏感、自定义样式） |
| SvgIcon | `ParrotSvgIcon` | SVG 图标（旋转、旋转动画） |

### 展示组件 display (16)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Badge | `ParrotBadge` | 徽标数 |
| Tag | `ParrotTag` | 标签 |
| Avatar | `ParrotAvatar` | 头像 |
| AvatarGroup | `ParrotAvatarGroup` | 头像组 |
| Divider | `ParrotDivider` | 分割线 |
| Section | `ParrotSection` | 章节容器 |
| Skeleton | `ParrotSkeleton` | 骨架屏 |
| NoticeBar | `ParrotNoticeBar` | 通知栏 |
| FooterLinks | `ParrotFooterLinks` | 页脚链接 |
| TimeAxis | `ParrotTimeAxis` | 时间轴 |
| IndexCard | `ParrotIndexCard` | 首页卡片 |
| ProductCard | `ParrotProductCard` | 商品卡片 |
| TradeItem | `ParrotTradeItem` | 交易条目 |
| DataTag | `ParrotDataTag` | 数据标签 |
| SwiperDot | `ParrotSwiperDot` | 轮播指示器 |
| Result | `ParrotResult` | 结果页 |

### 表单组件 form (24)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Input | `ParrotInput` | 输入框 |
| Label | `ParrotLabel` | 表单标签 |
| Form | `ParrotForm` | 表单容器 |
| FormItem | `ParrotFormItem` | 表单项 |
| Select | `ParrotSelect` | 下拉选择 |
| Picker | `ParrotPicker` | 选择器 |
| DatePicker | `ParrotDatePicker` | 日期选择 |
| Calendar | `ParrotCalendar` | 日历 |
| Cascader | `ParrotCascader` | 级联选择 |
| Rate | `ParrotRate` | 评分 |
| Upload | `ParrotUpload` | 图片上传 |
| UploadVideo | `ParrotUploadVideo` | 视频上传 |
| InputNumber | `ParrotInputNumber` | 数字输入 |
| Slider | `ParrotSlider` | 滑块 |
| Textarea | `ParrotTextarea` | 文本域 |
| CheckboxGroup | `ParrotCheckboxGroup` | 复选框组 |
| Checkbox | `ParrotCheckbox` | 复选框 |
| RadioGroup | `ParrotRadioGroup` | 单选框组 |
| Radio | `ParrotRadio` | 单选框 |
| Switch | `ParrotSwitch` | 开关 |
| SearchBar | `ParrotSearchBar` | 搜索栏 |
| DigitalKeyboard | `ParrotDigitalKeyboard` | 数字键盘 |
| SingleInput | `ParrotSingleInput` | 单格输入 |
| LicensePlate | `ParrotLicensePlate` | 车牌输入 |

### 数据组件 data (7)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| List | `ParrotList` | 列表容器 |
| ListCell | `ParrotListCell` | 列表单元 |
| Pagination | `ParrotPagination` | 分页器 |
| Table | `ParrotTable` | 表格 |
| Progress | `ParrotProgress` | 进度条 |
| Circle | `ParrotCircle` | 环形进度 |
| CountDown | `ParrotCountDown` | 倒计时 |

### 操作反馈 feedback (6)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Message | `ParrotMessage` | 消息提示 |
| Toast | `ParrotToast` | 轻提示 |
| Alert | `ParrotAlert` | 警告提示 |
| Loading | `ParrotLoading` | 加载状态 |
| Spin | `ParrotSpin` | 旋转加载 |
| LoadAni | `ParrotLoadAni` | 加载动画 |

### 导航组件 navigation (18)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| NavBar | `ParrotNavBar` | 导航栏 |
| Tab | `ParrotTab` | 标签页 |
| Tabs | `ParrotTabs` | 标签页容器 |
| Tabbar | `ParrotTabbar` | 底部标签栏 |
| BottomNavbar | `ParrotBottomNavbar` | 底部导航 |
| Breadcrumb | `ParrotBreadcrumb` | 面包屑 |
| Steps | `ParrotSteps` | 步骤条 |
| Link | `ParrotLink` | 链接 |
| Menu | `ParrotMenu` | 菜单 |
| DropdownMenu | `ParrotDropdownMenu` | 下拉菜单 |
| DropdownList | `ParrotDropdownList` | 下拉列表 |
| Vtabs | `ParrotVtabs` | 纵向标签页 |
| SegmentedControl | `ParrotSegmentedControl` | 分段控制 |
| IndexList | `ParrotIndexList` | 索引列表 |
| Loadmore | `ParrotLoadmore` | 加载更多 |
| Sticky | `ParrotSticky` | 粘性定位 |
| SwipeAction | `ParrotSwipeAction` | 滑动操作 |
| Fab | `ParrotFab` | 浮动按钮 |

### 弹层组件 overlay (13)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Backdrop | `ParrotBackdrop` | 遮罩层 |
| ActionSheet | `ParrotActionSheet` | 操作面板 |
| Dialog | `ParrotDialog` | 对话框 |
| Drawer | `ParrotDrawer` | 抽屉 |
| Popup | `ParrotPopup` | 弹出层 |
| Modal | `ParrotModal` | 模态框 |
| BottomPopup | `ParrotBottomPopup` | 底部弹层 |
| TopPopup | `ParrotTopPopup` | 顶部弹层 |
| Gallery | `ParrotGallery` | 图片浏览 |
| Landscape | `ParrotLandscape` | 横屏弹层 |
| FilterDrawer | `ParrotFilterDrawer` | 筛选抽屉 |
| BubbleBox | `ParrotBubbleBox` | 气泡框 |
| ShareSheet | `ParrotShareSheet` | 分享面板 |

### 布局组件 layout (16)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Layout | `ParrotLayout` | 整体布局 |
| Grid | `ParrotGrid` | 宫格 |
| GridItem | `ParrotGridItem` | 宫格项 |
| Card | `ParrotCard` | 卡片 |
| Row | `ParrotRow` | 行容器 |
| Col | `ParrotCol` | 列容器 |
| Collapse | `ParrotCollapse` | 折叠面板 |
| CollapseItem | `ParrotCollapseItem` | 折叠面板项 |
| Empty | `ParrotEmpty` | 空状态 |
| Panel | `ParrotPanel` | 面板 |
| MovableView | `ParrotMovableView` | 可拖拽视图 |
| Preview | `ParrotPreview` | 预览 |
| HorizontalScroll | `ParrotHorizontalScroll` | 横向滚动 |
| BackgroundImage | `ParrotBackgroundImage` | 背景图 |
| BannerArc | `ParrotBannerArc` | 弧形横幅 |
| Waterfall | `ParrotWaterfall` | 瀑布流 |

### 动效组件 motion (4)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Animation | `ParrotAnimation` | 动画容器 |
| Lottie | `ParrotLottie` | Lottie 动画 |
| DigitalRoller | `ParrotDigitalRoller` | 数字滚轮 |
| CubicBezier | `ParrotCubicBezier` | 贝塞尔曲线 |

### 画布组件 canvas (4)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Poster | `ParrotPoster` | 海报生成 |
| Qrcode | `ParrotQrcode` | 二维码 |
| Barcode | `ParrotBarcode` | 条形码 |
| Autograph | `ParrotAutograph` | 手写签名 |

### 工具组件 utility (13)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| StatusBar | `ParrotStatusBar` | 状态栏占位 |
| WhiteSpace | `ParrotWhiteSpace` | 垂直留白 |
| WingBlank | `ParrotWingBlank` | 水平留白 |
| Css | `ParrotCss` | CSS 注入 |
| ThemeToggle | `ParrotThemeToggle` | 主题切换 |
| CopyText | `ParrotCopyText` | 复制文本 |
| Backtop | `ParrotBacktop` | 回到顶部 |
| SafeArea | `ParrotSafeArea` | 安全区域 |
| Lazyload | `ParrotLazyload` | 懒加载 |
| Timer | `ParrotTimer` | 定时器 |
| CountdownVerify | `ParrotCountdownVerify` | 验证码倒计时 |
| Parse | `ParrotParse` | 富文本解析 |
| OverflowHidden | `ParrotOverflowHidden` | 溢出隐藏 |

### 扩展组件 extended (8)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| FilterBar | `ParrotFilterBar` | 筛选栏 |
| SlideVerify | `ParrotSlideVerify` | 滑动验证 |
| RotateVerify | `ParrotRotateVerify` | 旋转验证 |
| SliderCaptcha | `ParrotSliderCaptcha` | 滑块验证码 |
| PuzzleVerify | `ParrotPuzzleVerify` | 拼图验证 |
| ImageCropper | `ParrotImageCropper` | 图片裁剪 |
| Drag | `ParrotDrag` | 拖拽排序 |
| TableWeex | `ParrotTableWeex` | Weex 表格 |

### 实验组件 experimental (5)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| GestureHandler | `ParrotGestureHandler` | 手势处理 |
| VirtualList | `ParrotVirtualList` | 虚拟列表 |
| Skeleton3D | `ParrotSkeleton3D` | 3D 骨架屏 |
| VoiceInput | `ParrotVoiceInput` | 语音输入 |
| AIAssist | `ParrotAIAssist` | AI 辅助 |

### 系统组件 system (6)

| 组件 | 导出名 | 用途 |
|------|--------|------|
| Notification | `ParrotNotification` | 系统通知 |
| Auth | `ParrotAuth` | 认证授权 |
| Permission | `ParrotPermission` | 权限控制 |
| Logger | `ParrotLogger` | 日志记录 |
| Settings | `ParrotSettings` | 系统设置 |
| Updater | `ParrotUpdater` | 版本更新 |

---

## Composables 组合式 API

### useColor — 颜色访问

运行时访问设计令牌颜色系统。

```typescript
import { useColor } from '@parrotui/core'

const color = useColor()

// 6 个计算属性（直接取当前主题色值）
color.primary   // '#1a7eff'
color.secondary // '#7c3aed'
color.success   // '#41a906'
color.warning   // '#e6a23c'
color.danger    // '#f56c6c'
color.info      // '#6c6f78'

// 10 个方法
color.getColor('primary')           // 获取颜色值
color.getPalette('primary')         // 获取某色系全部 10 级
color.getShade('primary', 300)      // 获取指定级别
color.mix('#ff0000', '#0000ff', 50) // 颜色混合
color.opacity('#1a7eff', 0.5)       // 透明度
color.contrast('#1a7eff')           // 对比色（黑/白）
color.shades('#1a7eff')             // 生成 10 级梯度
color.isDark('#333333')             // 是否深色
color.lighten('#1a7eff', 20)        // 变亮
color.darken('#1a7eff', 20)         // 变暗
```

### useResponsive — 响应式

屏幕尺寸检测与断点判断。

```typescript
import { useResponsive } from '@parrotui/core'

const screen = useResponsive()

// 计算属性
screen.screenWidth      // 屏幕宽度
screen.screenHeight     // 屏幕高度
screen.statusBarHeight  // 状态栏高度
screen.safeAreaBottom   // 安全区域底部
screen.platform         // 平台标识
screen.breakpoint       // 当前断点: xs | sm | md | lg | xl
screen.orientation      // 方向: portrait | landscape
screen.isSmall          // 是否小屏
screen.isLarge          // 是否大屏

// 断点: xs(0) sm(576) md(768) lg(992) xl(1200)
screen.isAbove('md')    // 是否大于 md
screen.isBelow('lg')    // 是否小于 lg
screen.rpx2px(100)      // rpx 转 px
screen.px2rpx(50)       // px 转 rpx
```

### useLocale — 国际化

多语言翻译，内置 zh-CN / en-US 70+ 条目。

```typescript
import { useLocale } from '@parrotui/core'

const { t, lang, setLang, registerMessages, getAvailableLangs } = useLocale()

// 翻译
t('common.confirm')                   // '确定'
t('form.maxLength', { max: 10 })      // '最多输入 10 个字符'

// 切换语言
setLang('en-US')

// 注册自定义语言包
registerMessages('ja-JP', {
  common: { confirm: '確認', cancel: 'キャンセル' }
})
```

### useTheme — 主题管理

动态主题切换与 CSS 变量注入。

```typescript
import { useTheme } from '@parrotui/core'

const theme = useTheme()

theme.mode              // 当前模式: 'light' | 'dark' | 'system'
theme.isDark            // 是否暗色模式

theme.setMode('dark')   // 设置模式
theme.toggleDark()      // 切换明暗
theme.applyTheme({ primary: '#ff6b6b' }) // 应用自定义色值
theme.resetTheme()      // 重置为默认
theme.restoreTheme()    // 从本地存储恢复
```

---

## Directives 指令工具

### vcopy — 剪贴板操作

```typescript
import { copyText, readClipboard } from '@parrotui/core'

// 复制文本
copyText('要复制的文本', {
  successText: '已复制',
  onSuccess: () => {},
  onFail: (err) => {}
})

// 读取剪贴板
readClipboard((text) => {
  console.log('剪贴板内容:', text)
})
```

### vloading — 加载状态

```typescript
import { showLoading, hideLoading, useLoading } from '@parrotui/core'

// 全局方式
showLoading('加载中...')
hideLoading()

// Composable 方式（支持嵌套计数）
const loading = useLoading()
loading.show('请稍候...')
loading.hide()
await loading.withLoading(asyncFn)  // 自动管理加载态
```

### vpermission — 权限控制

```typescript
import { usePermission, setPermissions, setRoles } from '@parrotui/core'

// 初始化权限
setPermissions(['user:read', 'user:write', 'order:read'])
setRoles(['admin', 'editor'])

// 使用
const perm = usePermission()
perm.can('user:read')                    // true
perm.canAll(['user:read', 'user:write']) // true
perm.canAny(['admin:delete', 'user:read']) // true
perm.isRole('admin')                     // true
```

---

## Utils 工具函数

### color — 颜色操作

```typescript
import { hexToRgb, rgbToHex, mixColors, withOpacity, contrastColor, lighten, darken } from '@parrotui/core'

hexToRgb('#1a7eff')           // { r: 26, g: 126, b: 255 }
rgbToHex(26, 126, 255)        // '#1a7eff'
mixColors('#ff0000', '#0000ff', 50) // 50% 混合
withOpacity('#1a7eff', 0.5)   // 'rgba(26,126,255,0.5)'
contrastColor('#1a7eff')      // '#ffffff'（自动黑白对比）
lighten('#1a7eff', 20)        // 亮化 20%
darken('#1a7eff', 20)         // 暗化 20%
```

### dom — DOM 操作

```typescript
import { getRect, getRects, scrollTo, scrollToTop, scrollToElement } from '@parrotui/core'

const rect = await getRect('.my-element', instance)
// { left, top, right, bottom, width, height }

scrollTo(500, 300)            // 滚动到 500px，耗时 300ms
scrollToTop()                 // 回到顶部
scrollToElement('.target', instance) // 滚动到元素
```

### event — 事件总线

```typescript
import { eventBus, debounce, throttle } from '@parrotui/core'

// 事件总线
eventBus.on('user:login', (data) => { /* ... */ })
eventBus.emit('user:login', { id: 1 })
eventBus.once('init', () => { /* 只触发一次 */ })
eventBus.off('user:login')
eventBus.clear()

// 防抖
const debouncedSearch = debounce((keyword: string) => { /* ... */ }, 300)

// 节流
const throttledScroll = throttle(() => { /* ... */ }, 100)
```

### validator — 表单验证

```typescript
import { isPhone, isEmail, isIdCard, validate, rules } from '@parrotui/core'

// 单项验证
isPhone('13800138000')   // true（中国手机号 1[3-9]XXXXXXXXX）
isEmail('a@b.com')       // true
isIdCard('110101...')     // true（18位身份证含校验位）
isUrl('https://a.com')   // true
isNumeric('123.45')      // true
isChinese('你好')        // true
isCreditCode('91...')    // true（统一社会信用代码）

// 规则工厂
const nameRules = [
  rules.required('请输入姓名'),
  rules.minLength(2, '至少 2 个字符'),
  rules.maxLength(20, '最多 20 个字符'),
]

// 批量验证
const result = validate(value, nameRules)
// { valid: false, message: '请输入姓名' }
```

---

## CSS 工具类

`base.css` 提供 140+ 工具类（parrot- 前缀），覆盖：

| 分类 | 示例 |
|------|------|
| Flex 布局 | `parrot-flex`, `parrot-justify-center`, `parrot-align-center`, `parrot-flex-wrap` |
| 间距 | `parrot-m-4`, `parrot-p-2`, `parrot-mt-8`, `parrot-px-4` |
| 间隙 | `parrot-gap-2`, `parrot-gap-4` |
| 文本 | `parrot-text-sm`, `parrot-text-bold`, `parrot-text-center`, `parrot-text-ellipsis` |
| 颜色 | `parrot-text-primary`, `parrot-bg-primary`, `parrot-text-white` |
| 尺寸 | `parrot-w-full`, `parrot-h-full`, `parrot-w-half` |
| 定位 | `parrot-relative`, `parrot-absolute`, `parrot-fixed`, `parrot-sticky` |
| 圆角 | `parrot-rounded`, `parrot-rounded-lg`, `parrot-rounded-full` |
| 阴影 | `parrot-shadow`, `parrot-shadow-lg` |
| 变换 | `parrot-rotate-90`, `parrot-scale-75`, `parrot-flip-x` |
| 边框 | `parrot-border`, `parrot-border-none`, `parrot-border-dashed` |
| 行数限制 | `parrot-line-clamp-2`, `parrot-line-clamp-3` |
| 显隐 | `parrot-hidden`, `parrot-visible` |

`animations.css` 提供 16 个动画关键帧和控制类：

```
fadeIn / fadeOut / slideUp / slideDown / slideLeft / slideRight /
bounceIn / zoomIn / flipIn / scaleBounce / heartbeat / float /
blink / wobble / spin / pulse
```

控制类：`parrot-animate-delay-*`, `parrot-animate-fast`, `parrot-animate-slow`, `parrot-animate-infinite`

---

## 主题系统

```
theme/
├── index.ts       # ThemeConfig 接口定义
├── light.ts       # 亮色主题值
├── dark.ts        # 暗色主题值
└── adminTheme.ts  # 后台管理主题预设
```

通过 `useTheme()` 切换明暗模式，CSS 变量自动注入 `[data-theme="dark"]`。

---

## 国际化 i18n

内置语言包覆盖以下键：

```
common.confirm / common.cancel / common.save / common.delete / common.search / ...
form.required / form.minLength / form.maxLength / form.email / form.phone / ...
message.success / message.error / message.warning / message.info / ...
```

通过 `useLocale()` 的 `registerMessages()` 扩展任意语言。

---

## 开发规范

- **文件格式**：页面 `.uvue`，逻辑 `.uts`
- **脚本语法**：`<script setup lang="uts">`
- **组件命名**：PascalCase（如 `ParrotButton`）
- **CSS 命名**：BEM + `parrot-` 前缀
- **响应单位**：rpx
- **Props 定义**：`defineProps` + `withDefaults`
- **事件定义**：`defineEmits`
- **类型检查**：UTS 严格模式，`UTSJSONObject` 取值用 `[]` 并做 null 检查
- **条件渲染**：使用 `v-if` 而非 `v-show`
- **状态管理**：全局 reactive store，不使用 Pinia

---

## 贡献指南

欢迎所有人参与共建 Parrot UI：

- **Bug 报告**：[Issues](https://github.com/parrotui/parrotui/issues)
- **功能建议**：在 Issues 中提出
- **提交代码**：Fork -> 开发 -> Pull Request
- **完善文档**：文档同样欢迎 PR
- **国际化**：贡献更多语言包

## License

[MIT](./LICENSE) © Parrot UI Contributors
