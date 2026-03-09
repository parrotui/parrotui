<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  document.querySelectorAll('.vp-doc details.details').forEach(el => { el.open = true })
})
</script>

# 组件预览概述

> Parrot UI 共包含 **14 个分类 · 165 个组件**，覆盖基础元素、数据录入、信息展示、操作反馈、导航、弹层、布局、动效、画布、工具、扩展、实验及系统等全场景。点击分类标题可折叠/展开。

::: details basic 基础组件 (25)
- `Button` 按钮 — solid/outline/ghost/link/text 变体，图标、长按
- `Icon` 图标 — 旋转、脉冲/弹跳动画、翻转、徽标
- `Text` 文本 — link/price/phone/name 模式，h1-h6 标题，可复制
- `Color` 颜色 — swatch 色块、主题令牌、透明度
- `Number` 数字 — 统计卡片模式、趋势指示、前后缀
- `Footer` 页脚 — default/branded/minimal 变体，安全区适配
- `Heading` 标题 — h1-h6 六级，4 种颜色类型
- `Paragraph` 段落 — 3 种尺寸、缩进、对齐
- `Caption` 说明文字 — 固定 22rpx，4 种颜色
- `Code` 代码块 — 行号、复制按钮、暗色主题
- `Quote` 引用 — 边框/背景/图标 3 种类型
- `Statistic` 统计数值 — 趋势、精度、千分位
- `Counter` 动画计数器 — 数字递增动画
- `Currency` 货币 — 符号、千分位、5 种尺寸
- `Percentage` 百分比 — 趋势箭头、涨跌配色
- `IconButton` 图标按钮 — circle/square/round，徽标
- `ButtonGroup` 按钮组 — 水平/垂直，相邻边框合并
- `Chip` 标签片 — 可选中、可关闭、图标+文本
- `Spacer` 间距占位 — 水平/垂直方向
- `Image` 图片 — 加载/错误占位、圆形、预览、懒加载
- `Picture` 图文 — 图片+说明文字
- `AspectRatio` 宽高比容器 — 比例锁定
- `RangeSlider` 双滑块 — 触摸事件、范围选择
- `Highlight` 关键词高亮 — 正则匹配、自定义样式
- `SvgIcon` SVG 图标 — 旋转、旋转动画
:::

::: details display 展示组件 (16)
- `Badge` 徽标数 — 数字/圆点/自定义内容
- `Tag` 标签 — 多色、可关闭
- `Avatar` 头像 — 圆形/方形、图片/文字
- `AvatarGroup` 头像组 — 重叠展示、+N 计数
- `Divider` 分割线 — 水平/垂直、文字分割
- `Section` 章节容器 — 标题+内容区块
- `Skeleton` 骨架屏 — 加载占位动画
- `NoticeBar` 通知栏 — 滚动/静态、可关闭
- `FooterLinks` 页脚链接 — 底部导航链接组
- `TimeAxis` 时间轴 — 纵向时间线
- `IndexCard` 首页卡片 — 首页业务卡片
- `ProductCard` 商品卡片 — 商品展示
- `TradeItem` 交易条目 — 订单/交易记录
- `DataTag` 数据标签 — 数据展示标签
- `SwiperDot` 轮播指示器 — 轮播图点/条指示
- `Result` 结果页 — 成功/失败/空状态
:::

::: details form 表单组件 (24)
- `Input` 输入框 — 文本/密码/数字输入
- `Label` 表单标签 — 表单字段标签
- `Form` 表单容器 — 表单整体容器
- `FormItem` 表单项 — 单个表单字段包装
- `Select` 下拉选择 — 单选/多选下拉
- `Picker` 选择器 — 滚动选择器
- `DatePicker` 日期选择 — 年月日选择
- `Calendar` 日历 — 日历面板
- `Cascader` 级联选择 — 多级联动
- `Rate` 评分 — 星星评分
- `Upload` 图片上传 — 图片选择+上传
- `UploadVideo` 视频上传 — 视频选择+上传
- `InputNumber` 数字输入 — 步进器
- `Slider` 滑块 — 单滑块选择
- `Textarea` 文本域 — 多行文本
- `CheckboxGroup` 复选框组 — 多选容器
- `Checkbox` 复选框 — 单个复选
- `RadioGroup` 单选框组 — 单选容器
- `Radio` 单选框 — 单个单选
- `Switch` 开关 — 布尔切换
- `SearchBar` 搜索栏 — 搜索输入
- `DigitalKeyboard` 数字键盘 — 虚拟数字键盘
- `SingleInput` 单格输入 — 验证码单格
- `LicensePlate` 车牌输入 — 车牌号键盘
:::

::: details data 数据组件 (7)
- `List` 列表容器 — 列表整体容器
- `ListCell` 列表单元 — 单行列表项
- `Pagination` 分页器 — 页码导航
- `Table` 表格 — 数据表格
- `Progress` 进度条 — 线性进度
- `Circle` 环形进度 — 圆形进度
- `CountDown` 倒计时 — 时间倒计时
:::

::: details feedback 操作反馈 (6)
- `Message` 消息提示 — 全局提示信息
- `Toast` 轻提示 — 短暂提示
- `Alert` 警告提示 — 页内警告
- `Loading` 加载状态 — 加载中提示
- `Spin` 旋转加载 — 旋转加载动画
- `LoadAni` 加载动画 — 自定义加载动画
:::

::: details navigation 导航组件 (18)
- `NavBar` 导航栏 — 顶部导航
- `Tab` 标签页 — 选项卡切换
- `Tabs` 标签页容器 — 多标签容器
- `Tabbar` 底部标签栏 — 底部 Tab
- `BottomNavbar` 底部导航 — 底部导航栏
- `Breadcrumb` 面包屑 — 路径导航
- `Steps` 步骤条 — 流程步骤
- `Link` 链接 — 文字链接
- `Menu` 菜单 — 导航菜单
- `DropdownMenu` 下拉菜单 — 下拉操作
- `DropdownList` 下拉列表 — 下拉选项
- `Vtabs` 纵向标签页 — 左右分栏
- `SegmentedControl` 分段控制 — 分段选择器
- `IndexList` 索引列表 — 字母索引
- `Loadmore` 加载更多 — 上拉加载
- `Sticky` 粘性定位 — 吸顶组件
- `SwipeAction` 滑动操作 — 侧滑按钮
- `Fab` 浮动按钮 — 悬浮操作
:::

::: details overlay 弹层组件 (13)
- `Backdrop` 遮罩层 — 背景遮罩
- `ActionSheet` 操作面板 — 底部操作项
- `Dialog` 对话框 — 确认对话
- `Drawer` 抽屉 — 侧边抽屉
- `Popup` 弹出层 — 通用弹出
- `Modal` 模态框 — 模态对话
- `BottomPopup` 底部弹层 — 底部抽屉
- `TopPopup` 顶部弹层 — 顶部下拉
- `Gallery` 图片浏览 — 图片预览
- `Landscape` 横屏弹层 — 横屏展示
- `FilterDrawer` 筛选抽屉 — 筛选面板
- `BubbleBox` 气泡框 — 气泡提示
- `ShareSheet` 分享面板 — 分享操作
:::

::: details layout 布局组件 (16)
- `Layout` 整体布局 — 页面骨架
- `Grid` 宫格 — 等分网格
- `GridItem` 宫格项 — 网格单元
- `Card` 卡片 — 信息卡片
- `Row` 行容器 — 水平排列
- `Col` 列容器 — 栅格列
- `Collapse` 折叠面板 — 手风琴
- `CollapseItem` 折叠面板项 — 面板单元
- `Empty` 空状态 — 无数据提示
- `Panel` 面板 — 内容面板
- `MovableView` 可拖拽视图 — 自由拖动
- `Preview` 预览 — 内容预览
- `HorizontalScroll` 横向滚动 — 横向滑动
- `BackgroundImage` 背景图 — 背景图容器
- `BannerArc` 弧形横幅 — 弧形头部
- `Waterfall` 瀑布流 — 瀑布式布局
:::

::: details motion 动效组件 (4)
- `Animation` 动画容器 — CSS 动画包装
- `Lottie` Lottie 动画 — Lottie JSON 播放
- `DigitalRoller` 数字滚轮 — 数字滚动效果
- `CubicBezier` 贝塞尔曲线 — 缓动函数可视化
:::

::: details canvas 画布组件 (4)
- `Poster` 海报生成 — Canvas 海报
- `Qrcode` 二维码 — 二维码生成
- `Barcode` 条形码 — 条形码生成
- `Autograph` 手写签名 — 触摸签名板
:::

::: details utility 工具组件 (13)
- `StatusBar` 状态栏占位 — 状态栏高度占位
- `WhiteSpace` 垂直留白 — 垂直间距
- `WingBlank` 水平留白 — 水平间距
- `Css` CSS 注入 — 动态 CSS
- `ThemeToggle` 主题切换 — 亮暗切换开关
- `CopyText` 复制文本 — 点击复制
- `Backtop` 回到顶部 — 滚动返回顶部
- `SafeArea` 安全区域 — 安全区占位
- `Lazyload` 懒加载 — 延迟加载
- `Timer` 定时器 — 计时器组件
- `CountdownVerify` 验证码倒计时 — 发送验证码
- `Parse` 富文本解析 — HTML 富文本渲染
- `OverflowHidden` 溢出隐藏 — 内容截断
:::

::: details extended 扩展组件 (8)
- `FilterBar` 筛选栏 — 条件筛选
- `SlideVerify` 滑动验证 — 滑块验证码
- `RotateVerify` 旋转验证 — 旋转图片验证
- `SliderCaptcha` 滑块验证码 — 拼图滑块
- `PuzzleVerify` 拼图验证 — 拼图验证码
- `ImageCropper` 图片裁剪 — 图片剪切
- `Drag` 拖拽排序 — 拖拽重排
- `TableWeex` Weex 表格 — Weex 原生表格
:::

::: details experimental 实验组件 (5)
- `GestureHandler` 手势处理 — 多指手势识别
- `VirtualList` 虚拟列表 — 大数据列表
- `Skeleton3D` 3D 骨架屏 — 3D 加载占位
- `VoiceInput` 语音输入 — 语音转文字
- `AIAssist` AI 辅助 — AI 智能助手
:::

::: details system 系统组件 (6)
- `Notification` 系统通知 — 消息推送
- `Auth` 认证授权 — 登录/注册/授权
- `Permission` 权限控制 — 功能权限管理
- `Logger` 日志记录 — 运行日志
- `Settings` 系统设置 — 设置面板
- `Updater` 版本更新 — 热更新/版本检测
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
/* 自定义主按钮颜色 */
:root {
  --pui-primary: #7c3aed;         /* 主色 */
  --pui-primary-dark: #6d28d9;    /* hover/active 颜色 */
}
```
