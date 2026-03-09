<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  document.querySelectorAll('.vp-doc details.details').forEach(el => { el.open = true })
})
</script>

# Project Structure

> Parrot UI 共 **6 个包 · 14 分类 · 165 个组件** — 基于 pnpm workspace 的 Monorepo 架构。

```
parrotui/
├─ packages/
│  ├─ parrotui-core/                    # 核心包（主入口）
│  │  ├─ index.ts                       # 统一导出（165 组件 + API）
│  │  ├─ components/                    # 14 分类 · 165 组件
│  │  │  ├─ basic/                      #   基础组件 (25)
│  │  │  │  ├─ Button/
│  │  │  │  │  └─ parrot-button.uvue
│  │  │  │  ├─ Icon/
│  │  │  │  │  └─ parrot-icon.uvue
│  │  │  │  ├─ Text/
│  │  │  │  │  └─ parrot-text.uvue
│  │  │  │  ├─ Heading/
│  │  │  │  │  └─ parrot-heading.uvue
│  │  │  │  └─ ... (25 个组件)
│  │  │  ├─ display/                    #   展示组件 (16)
│  │  │  │  ├─ Badge/
│  │  │  │  │  └─ parrot-badge.uvue
│  │  │  │  ├─ Avatar/
│  │  │  │  │  └─ parrot-avatar.uvue
│  │  │  │  └─ ... (16 个组件)
│  │  │  ├─ form/                       #   表单组件 (24)
│  │  │  │  ├─ Input/
│  │  │  │  │  └─ parrot-input.uvue
│  │  │  │  ├─ Select/
│  │  │  │  │  └─ parrot-select.uvue
│  │  │  │  └─ ... (24 个组件)
│  │  │  ├─ data/                       #   数据组件 (7)
│  │  │  ├─ feedback/                   #   操作反馈 (6)
│  │  │  ├─ navigation/                 #   导航组件 (18)
│  │  │  ├─ overlay/                    #   弹层组件 (13)
│  │  │  ├─ layout/                     #   布局组件 (16)
│  │  │  ├─ motion/                     #   动效组件 (4)
│  │  │  ├─ canvas/                     #   画布组件 (4)
│  │  │  ├─ utility/                    #   工具组件 (13)
│  │  │  ├─ extended/                   #   扩展组件 (8)
│  │  │  ├─ experimental/               #   实验组件 (5)
│  │  │  └─ system/                     #   系统组件 (6)
│  │  ├─ composables/                   # 组合式 API
│  │  │  ├─ useColor.ts                 #   颜色访问
│  │  │  ├─ useResponsive.ts            #   响应式断点
│  │  │  ├─ useLocale.ts                #   国际化 i18n
│  │  │  └─ useTheme.ts                 #   主题管理
│  │  ├─ directives/                    # 指令工具
│  │  │  ├─ vcopy.ts                    #   剪贴板
│  │  │  ├─ vloading.ts                 #   加载状态
│  │  │  └─ vpermission.ts              #   权限控制
│  │  ├─ utils/                         # 工具函数
│  │  │  ├─ color.ts                    #   颜色操作
│  │  │  ├─ dom.ts                      #   DOM 查询/滚动
│  │  │  ├─ event.ts                    #   事件总线/防抖/节流
│  │  │  └─ validator.ts                #   表单验证
│  │  ├─ tokens/                        # 设计令牌
│  │  │  ├─ colors.ts                   #   7 色系 × 10 级
│  │  │  ├─ spacing.ts                  #   间距规范
│  │  │  ├─ typography.ts               #   字体规范
│  │  │  └─ shadows.ts                  #   阴影规范
│  │  ├─ theme/                         # 主题配置
│  │  │  ├─ index.ts                    #   ThemeConfig 接口
│  │  │  ├─ light.ts                    #   亮色主题
│  │  │  ├─ dark.ts                     #   暗色主题
│  │  │  └─ adminTheme.ts              #   后台管理预设
│  │  ├─ locale/                        # 语言包
│  │  │  ├─ index.ts                    #   语言管理入口
│  │  │  ├─ zhCN.ts                     #   简体中文
│  │  │  └─ enUS.ts                     #   英文
│  │  ├─ styles/                        # 全局样式
│  │  │  ├─ variables.css               #   CSS 变量
│  │  │  ├─ base.css                    #   140+ 工具类
│  │  │  ├─ animations.css              #   16 个动画
│  │  │  └─ reset.css                   #   样式重置
│  │  └─ package.json
│  ├─ parrotui-utils/                   # 底层工具包
│  │  ├─ color/
│  │  │  ├─ color-manager.uts           #   颜色管理器
│  │  │  └─ helpers.uts                 #   颜色算法
│  │  ├─ clipboard/
│  │  │  └─ index.uts                   #   剪贴板操作
│  │  ├─ request/
│  │  │  └─ index.uts                   #   HTTP 请求封装
│  │  ├─ validator/
│  │  │  └─ index.uts                   #   底层验证器
│  │  ├─ utils/
│  │  │  └─ index.uts                   #   通用工具
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ parrotui-icons/                   # 图标包
│  │  ├─ svg/                           #   SVG 图标源文件
│  │  │  ├─ logo.svg
│  │  │  └─ parrotui-logo.svg
│  │  ├─ iconfont/                      #   Favicon / PWA 图标
│  │  │  ├─ favicon.ico
│  │  │  ├─ android-chrome-512x512.png
│  │  │  └─ apple-touch-icon.png
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ parrotui-cli/                     # CLI 脚手架工具
│  │  ├─ commands/
│  │  │  ├─ create.ts                   #   创建项目
│  │  │  ├─ add.ts                      #   添加组件
│  │  │  └─ install.ts                  #   安装依赖
│  │  ├─ templates/                     #   项目模板
│  │  │  ├─ uniapp/
│  │  │  ├─ vue3/
│  │  │  └─ admin/
│  │  ├─ index.ts
│  │  └─ package.json
│  └─ parrotui-templates/               # 页面模板
│     ├─ LoginA/index.uvue              #   登录模板 A
│     ├─ LoginB/index.uvue              #   登录模板 B
│     ├─ LoginC/index.uvue              #   登录模板 C
│     ├─ LoginD/index.uvue              #   登录模板 D
│     └─ Portal/index.uvue              #   门户首页模板
├─ docs/                                # VitePress 文档站
│  ├─ .vitepress/
│  │  ├─ config.ts                      #   站点配置（多语言/侧边栏）
│  │  └─ theme/                         #   主题定制
│  ├─ public/                           #   静态资源
│  ├─ zh/                               #   简体中文文档
│  │  ├─ index.md                       #     首页
│  │  ├─ guide/                         #     指南（14 篇）
│  │  │  ├─ introduction.md
│  │  │  ├─ architecture.md
│  │  │  ├─ composables.md
│  │  │  ├─ directives.md
│  │  │  ├─ utils.md
│  │  │  ├─ colors.md
│  │  │  ├─ theming.md
│  │  │  └─ ...
│  │  └─ components/                    #     组件文档
│  │     └─ button.md
│  ├─ zh-HK/                            #   繁體中文文档
│  └─ en/                               #   English docs
├─ .github/workflows/                   # CI/CD
│  ├─ ci.yml                            #   持续集成
│  ├─ docs.yml                          #   文档自动部署 → GitHub Pages
│  └─ release.yml                       #   版本发布
├─ CNAME                                # doc.parrotui.com
├─ package.json                         # 根 package（scripts）
├─ pnpm-workspace.yaml                  # pnpm 工作区
├─ tsconfig.json                        # TypeScript 配置
└─ README.md                            # 项目说明
```

## 目录说明

| 目录 | 说明 |
|------|------|
| `packages/parrotui-core/` | 核心包，统一导出全部 165 个 UI 组件及 Composables / Directives / Utils / Tokens |
| `packages/parrotui-core/components/` | 组件源码，按 14 个分类目录组织，每个组件一个独立目录 |
| `packages/parrotui-core/composables/` | 4 个 Composable Hook：颜色、响应式、国际化、主题 |
| `packages/parrotui-core/directives/` | 3 个指令工具：剪贴板、加载状态、权限控制 |
| `packages/parrotui-core/utils/` | 4 个工具模块：颜色操作、DOM 查询、事件总线、表单验证 |
| `packages/parrotui-core/tokens/` | 设计令牌：7 色系 × 10 级颜色、间距、字体、阴影 |
| `packages/parrotui-core/theme/` | 主题配置：亮色 / 暗色 / 后台管理预设 |
| `packages/parrotui-core/locale/` | 语言包：内置 zh-CN / en-US |
| `packages/parrotui-core/styles/` | 全局样式：CSS 变量 + 140 工具类 + 16 动画 + 重置 |
| `packages/parrotui-utils/` | 底层工具包：颜色算法、HTTP 请求、剪贴板、验证器 |
| `packages/parrotui-icons/` | 图标包：SVG 图标 + Favicon / PWA 图标 |
| `packages/parrotui-cli/` | CLI 脚手架：create / add / install 命令 + 项目模板 |
| `packages/parrotui-templates/` | 页面模板：4 套登录页 + 门户首页 |
| `docs/` | VitePress 文档站（三语言：简中 / 繁中 / 英文） |
| `.github/workflows/` | GitHub Actions：CI + 文档自动部署 + 版本发布 |

## 14 分类组件清单

::: details basic 基础组件 (25)
- `Button` 按钮 — solid / outline / ghost / link / text 变体，图标、长按
- `Icon` 图标 — 旋转、脉冲/弹跳动画、翻转、徽标
- `Text` 文本 — link / price / phone / name 模式，h1-h6 标题，可复制
- `Color` 颜色 — swatch 色块、主题令牌、透明度
- `Number` 数字 — 统计卡片、趋势指示、前后缀
- `Footer` 页脚 — default / branded / minimal，安全区适配
- `Heading` 标题 — h1-h6 六级，4 种颜色类型
- `Paragraph` 段落 — 3 种尺寸、缩进、对齐
- `Caption` 说明文字 — 固定 22rpx，4 种颜色
- `Code` 代码块 — 行号、复制按钮、暗色主题
- `Quote` 引用 — 边框 / 背景 / 图标 3 种类型
- `Statistic` 统计数值 — 趋势、精度、千分位
- `Counter` 动画计数器 — 数字递增动画
- `Currency` 货币 — 符号、千分位、5 种尺寸
- `Percentage` 百分比 — 趋势箭头、涨跌配色
- `IconButton` 图标按钮 — circle / square / round，徽标
- `ButtonGroup` 按钮组 — 水平 / 垂直，相邻边框合并
- `Chip` 标签片 — 可选中、可关闭、图标+文本
- `Spacer` 间距占位 — 水平 / 垂直方向
- `Image` 图片 — 加载/错误占位、圆形、预览、懒加载
- `Picture` 图文 — 图片+说明文字
- `AspectRatio` 宽高比容器 — 比例锁定
- `RangeSlider` 双滑块 — 触摸事件、范围选择
- `Highlight` 关键词高亮 — 正则匹配、自定义样式
- `SvgIcon` SVG 图标 — 旋转动画
:::

::: details display 展示组件 (16)
- `Badge` 徽标数 — 数字 / 圆点 / 自定义
- `Tag` 标签 — 多色、可关闭
- `Avatar` 头像 — 圆形 / 方形、图片 / 文字
- `AvatarGroup` 头像组 — 重叠展示、+N 计数
- `Divider` 分割线 — 水平 / 垂直、文字分割
- `Section` 章节容器 — 标题+内容区块
- `Skeleton` 骨架屏 — 加载占位动画
- `NoticeBar` 通知栏 — 滚动 / 静态、可关闭
- `FooterLinks` 页脚链接 — 底部导航链接组
- `TimeAxis` 时间轴 — 纵向时间线
- `IndexCard` 首页卡片 — 首页业务卡片
- `ProductCard` 商品卡片 — 商品展示
- `TradeItem` 交易条目 — 订单/交易记录
- `DataTag` 数据标签 — 数据展示标签
- `SwiperDot` 轮播指示器 — 点 / 条指示
- `Result` 结果页 — 成功 / 失败 / 空状态
:::

::: details form 表单组件 (24)
- `Input` 输入框 · `Label` 表单标签 · `Form` 表单容器 · `FormItem` 表单项
- `Select` 下拉选择 · `Picker` 选择器 · `DatePicker` 日期选择 · `Calendar` 日历
- `Cascader` 级联选择 · `Rate` 评分 · `Upload` 图片上传 · `UploadVideo` 视频上传
- `InputNumber` 数字输入 · `Slider` 滑块 · `Textarea` 文本域
- `CheckboxGroup` 复选框组 · `Checkbox` 复选框 · `RadioGroup` 单选框组 · `Radio` 单选框
- `Switch` 开关 · `SearchBar` 搜索栏
- `DigitalKeyboard` 数字键盘 · `SingleInput` 单格输入 · `LicensePlate` 车牌输入
:::

::: details data 数据组件 (7)
- `List` 列表容器 · `ListCell` 列表单元 · `Pagination` 分页器
- `Table` 表格 · `Progress` 进度条 · `Circle` 环形进度 · `CountDown` 倒计时
:::

::: details feedback 操作反馈 (6)
- `Message` 消息提示 · `Toast` 轻提示 · `Alert` 警告提示
- `Loading` 加载状态 · `Spin` 旋转加载 · `LoadAni` 加载动画
:::

::: details navigation 导航组件 (18)
- `NavBar` 导航栏 · `Tab` 标签页 · `Tabs` 标签页容器 · `Tabbar` 底部标签栏
- `BottomNavbar` 底部导航 · `Breadcrumb` 面包屑 · `Steps` 步骤条 · `Link` 链接
- `Menu` 菜单 · `DropdownMenu` 下拉菜单 · `DropdownList` 下拉列表
- `Vtabs` 纵向标签页 · `SegmentedControl` 分段控制 · `IndexList` 索引列表
- `Loadmore` 加载更多 · `Sticky` 粘性定位 · `SwipeAction` 滑动操作 · `Fab` 浮动按钮
:::

::: details overlay 弹层组件 (13)
- `Backdrop` 遮罩层 · `ActionSheet` 操作面板 · `Dialog` 对话框 · `Drawer` 抽屉
- `Popup` 弹出层 · `Modal` 模态框 · `BottomPopup` 底部弹层 · `TopPopup` 顶部弹层
- `Gallery` 图片浏览 · `Landscape` 横屏弹层 · `FilterDrawer` 筛选抽屉
- `BubbleBox` 气泡框 · `ShareSheet` 分享面板
:::

::: details layout 布局组件 (16)
- `Layout` 整体布局 · `Grid` 宫格 · `GridItem` 宫格项 · `Card` 卡片
- `Row` 行容器 · `Col` 列容器 · `Collapse` 折叠面板 · `CollapseItem` 折叠面板项
- `Empty` 空状态 · `Panel` 面板 · `MovableView` 可拖拽视图 · `Preview` 预览
- `HorizontalScroll` 横向滚动 · `BackgroundImage` 背景图
- `BannerArc` 弧形横幅 · `Waterfall` 瀑布流
:::

::: details motion 动效 (4) · canvas 画布 (4)
**motion：** `Animation` 动画容器 · `Lottie` Lottie 动画 · `DigitalRoller` 数字滚轮 · `CubicBezier` 贝塞尔曲线

**canvas：** `Poster` 海报生成 · `Qrcode` 二维码 · `Barcode` 条形码 · `Autograph` 手写签名
:::

::: details utility 工具 (13)
- `StatusBar` 状态栏占位 · `WhiteSpace` 垂直留白 · `WingBlank` 水平留白
- `Css` CSS 注入 · `ThemeToggle` 主题切换 · `CopyText` 复制文本
- `Backtop` 回到顶部 · `SafeArea` 安全区域 · `Lazyload` 懒加载
- `Timer` 定时器 · `CountdownVerify` 验证码倒计时 · `Parse` 富文本解析
- `OverflowHidden` 溢出隐藏
:::

::: details extended 扩展 (8) · experimental 实验 (5) · system 系统 (6)
**extended：** `FilterBar` 筛选栏 · `SlideVerify` 滑动验证 · `RotateVerify` 旋转验证 · `SliderCaptcha` 滑块验证码 · `PuzzleVerify` 拼图验证 · `ImageCropper` 图片裁剪 · `Drag` 拖拽排序 · `TableWeex` Weex 表格

**experimental：** `GestureHandler` 手势处理 · `VirtualList` 虚拟列表 · `Skeleton3D` 3D 骨架屏 · `VoiceInput` 语音输入 · `AIAssist` AI 辅助

**system：** `Notification` 系统通知 · `Auth` 认证授权 · `Permission` 权限控制 · `Logger` 日志记录 · `Settings` 系统设置 · `Updater` 版本更新
:::

---

# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框、取消操作或执行删除操作等。

## 基础用法

```vue
<template>
  <parrot-button>默认按钮</parrot-button>
  <parrot-button type="primary">主要按钮</parrot-button>
  <parrot-button type="success">成功按钮</parrot-button>
  <parrot-button type="warning">警告按钮</parrot-button>
  <parrot-button type="danger">危险按钮</parrot-button>
  <parrot-button type="info">信息按钮</parrot-button>
</template>
```

## 线框按钮

```vue
<parrot-button plain>默认线框</parrot-button>
<parrot-button type="primary" plain>主要线框</parrot-button>
<parrot-button type="danger" plain>危险线框</parrot-button>
```

## 尺寸

```vue
<parrot-button size="xs">超小</parrot-button>
<parrot-button size="sm">小号</parrot-button>
<parrot-button>默认</parrot-button>
<parrot-button size="lg">大号</parrot-button>
```

## 圆角按钮

```vue
<parrot-button round>圆角</parrot-button>
<parrot-button type="primary" round>主要圆角</parrot-button>
```

## 图标按钮

```vue
<parrot-button icon="search">搜索</parrot-button>
<parrot-button type="primary" icon="plus">添加</parrot-button>
```

## 加载状态

```vue
<parrot-button :loading="true">加载中</parrot-button>
<parrot-button type="primary" :loading="true">提交中</parrot-button>
```

## 禁用状态

```vue
<parrot-button disabled>禁用</parrot-button>
<parrot-button type="primary" disabled>主要禁用</parrot-button>
```

## 块级按钮

```vue
<parrot-button block>块级按钮</parrot-button>
<parrot-button type="primary" block>块级主要按钮</parrot-button>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | 按钮类型 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| `plain` | `boolean` | `false` | 是否线框样式 |
| `round` | `boolean` | `false` | 是否圆角 |
| `circle` | `boolean` | `false` | 是否圆形（正方形图标按钮） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `block` | `boolean` | `false` | 是否块级（宽度100%） |
| `icon` | `string` | — | 图标名称 |
| `iconRight` | `boolean` | `false` | 图标是否在右侧 |

### Events

| 事件 | 说明 | 回调参数 |
|------|------|---------|
| `click` | 点击事件（非禁用/加载时触发） | `(event: Event)` |

### Slots

| 插槽 | 说明 |
|------|------|
| `default` | 按钮文字内容 |
| `icon` | 自定义图标 |

## 主题变量

可通过 CSS 变量覆盖按钮样式：

```css
:root {
  --pui-primary: #7c3aed;
  --pui-primary-dark: #6d28d9;
}
```
