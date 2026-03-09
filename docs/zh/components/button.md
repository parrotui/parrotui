# 组件预览概述

> Parrot UI 共包含 **14 个分类 · 165 个组件**，覆盖基础元素、数据录入、信息展示、操作反馈、导航、弹层、布局、动效、画布、工具、扩展、实验及系统等全场景。

<style>
.pui-tree { font-size: 14px; line-height: 1.8; }
.pui-tree details { margin-bottom: 4px; }
.pui-tree summary {
  cursor: pointer;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  user-select: none;
}
.pui-tree summary:hover { background: var(--vp-c-bg-soft); }
.pui-tree .tree-list {
  padding-left: 20px;
  margin: 2px 0 6px 10px;
  border-left: 2px solid var(--vp-c-divider);
  list-style: none;
}
.pui-tree .tree-list li {
  position: relative;
  padding: 1px 0 1px 14px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}
.pui-tree .tree-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 10px;
  border-top: 2px solid var(--vp-c-divider);
}
.pui-tree .tree-list code {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 3px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}
.pui-tree .cat-count {
  font-weight: 400;
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-left: 4px;
}
</style>

<div class="pui-tree">

<details open>
<summary>basic 基础组件 <span class="cat-count">(25)</span></summary>
<ul class="tree-list">
<li><code>Button</code> 按钮 — solid/outline/ghost/link/text 变体，图标、长按</li>
<li><code>Icon</code> 图标 — 旋转、脉冲/弹跳动画、翻转、徽标</li>
<li><code>Text</code> 文本 — link/price/phone/name 模式，h1-h6 标题，可复制</li>
<li><code>Color</code> 颜色 — swatch 色块、主题令牌、透明度</li>
<li><code>Number</code> 数字 — 统计卡片模式、趋势指示、前后缀</li>
<li><code>Footer</code> 页脚 — default/branded/minimal 变体，安全区适配</li>
<li><code>Heading</code> 标题 — h1-h6 六级，4 种颜色类型</li>
<li><code>Paragraph</code> 段落 — 3 种尺寸、缩进、对齐</li>
<li><code>Caption</code> 说明文字 — 固定 22rpx，4 种颜色</li>
<li><code>Code</code> 代码块 — 行号、复制按钮、暗色主题</li>
<li><code>Quote</code> 引用 — 边框/背景/图标 3 种类型</li>
<li><code>Statistic</code> 统计数值 — 趋势、精度、千分位</li>
<li><code>Counter</code> 动画计数器 — 数字递增动画</li>
<li><code>Currency</code> 货币 — 符号、千分位、5 种尺寸</li>
<li><code>Percentage</code> 百分比 — 趋势箭头、涨跌配色</li>
<li><code>IconButton</code> 图标按钮 — circle/square/round，徽标</li>
<li><code>ButtonGroup</code> 按钮组 — 水平/垂直，相邻边框合并</li>
<li><code>Chip</code> 标签片 — 可选中、可关闭、图标+文本</li>
<li><code>Spacer</code> 间距占位 — 水平/垂直方向</li>
<li><code>Image</code> 图片 — 加载/错误占位、圆形、预览、懒加载</li>
<li><code>Picture</code> 图文 — 图片+说明文字</li>
<li><code>AspectRatio</code> 宽高比容器 — 比例锁定</li>
<li><code>RangeSlider</code> 双滑块 — 触摸事件、范围选择</li>
<li><code>Highlight</code> 关键词高亮 — 正则匹配、自定义样式</li>
<li><code>SvgIcon</code> SVG 图标 — 旋转、旋转动画</li>
</ul>
</details>

<details open>
<summary>display 展示组件 <span class="cat-count">(16)</span></summary>
<ul class="tree-list">
<li><code>Badge</code> 徽标数</li>
<li><code>Tag</code> 标签</li>
<li><code>Avatar</code> 头像</li>
<li><code>AvatarGroup</code> 头像组</li>
<li><code>Divider</code> 分割线</li>
<li><code>Section</code> 章节容器</li>
<li><code>Skeleton</code> 骨架屏</li>
<li><code>NoticeBar</code> 通知栏</li>
<li><code>FooterLinks</code> 页脚链接</li>
<li><code>TimeAxis</code> 时间轴</li>
<li><code>IndexCard</code> 首页卡片</li>
<li><code>ProductCard</code> 商品卡片</li>
<li><code>TradeItem</code> 交易条目</li>
<li><code>DataTag</code> 数据标签</li>
<li><code>SwiperDot</code> 轮播指示器</li>
<li><code>Result</code> 结果页</li>
</ul>
</details>

<details open>
<summary>form 表单组件 <span class="cat-count">(24)</span></summary>
<ul class="tree-list">
<li><code>Input</code> 输入框</li>
<li><code>Label</code> 表单标签</li>
<li><code>Form</code> 表单容器</li>
<li><code>FormItem</code> 表单项</li>
<li><code>Select</code> 下拉选择</li>
<li><code>Picker</code> 选择器</li>
<li><code>DatePicker</code> 日期选择</li>
<li><code>Calendar</code> 日历</li>
<li><code>Cascader</code> 级联选择</li>
<li><code>Rate</code> 评分</li>
<li><code>Upload</code> 图片上传</li>
<li><code>UploadVideo</code> 视频上传</li>
<li><code>InputNumber</code> 数字输入</li>
<li><code>Slider</code> 滑块</li>
<li><code>Textarea</code> 文本域</li>
<li><code>CheckboxGroup</code> 复选框组</li>
<li><code>Checkbox</code> 复选框</li>
<li><code>RadioGroup</code> 单选框组</li>
<li><code>Radio</code> 单选框</li>
<li><code>Switch</code> 开关</li>
<li><code>SearchBar</code> 搜索栏</li>
<li><code>DigitalKeyboard</code> 数字键盘</li>
<li><code>SingleInput</code> 单格输入</li>
<li><code>LicensePlate</code> 车牌输入</li>
</ul>
</details>

<details open>
<summary>data 数据组件 <span class="cat-count">(7)</span></summary>
<ul class="tree-list">
<li><code>List</code> 列表容器</li>
<li><code>ListCell</code> 列表单元</li>
<li><code>Pagination</code> 分页器</li>
<li><code>Table</code> 表格</li>
<li><code>Progress</code> 进度条</li>
<li><code>Circle</code> 环形进度</li>
<li><code>CountDown</code> 倒计时</li>
</ul>
</details>

<details open>
<summary>feedback 操作反馈 <span class="cat-count">(6)</span></summary>
<ul class="tree-list">
<li><code>Message</code> 消息提示</li>
<li><code>Toast</code> 轻提示</li>
<li><code>Alert</code> 警告提示</li>
<li><code>Loading</code> 加载状态</li>
<li><code>Spin</code> 旋转加载</li>
<li><code>LoadAni</code> 加载动画</li>
</ul>
</details>

<details open>
<summary>navigation 导航组件 <span class="cat-count">(18)</span></summary>
<ul class="tree-list">
<li><code>NavBar</code> 导航栏</li>
<li><code>Tab</code> 标签页</li>
<li><code>Tabs</code> 标签页容器</li>
<li><code>Tabbar</code> 底部标签栏</li>
<li><code>BottomNavbar</code> 底部导航</li>
<li><code>Breadcrumb</code> 面包屑</li>
<li><code>Steps</code> 步骤条</li>
<li><code>Link</code> 链接</li>
<li><code>Menu</code> 菜单</li>
<li><code>DropdownMenu</code> 下拉菜单</li>
<li><code>DropdownList</code> 下拉列表</li>
<li><code>Vtabs</code> 纵向标签页</li>
<li><code>SegmentedControl</code> 分段控制</li>
<li><code>IndexList</code> 索引列表</li>
<li><code>Loadmore</code> 加载更多</li>
<li><code>Sticky</code> 粘性定位</li>
<li><code>SwipeAction</code> 滑动操作</li>
<li><code>Fab</code> 浮动按钮</li>
</ul>
</details>

<details open>
<summary>overlay 弹层组件 <span class="cat-count">(13)</span></summary>
<ul class="tree-list">
<li><code>Backdrop</code> 遮罩层</li>
<li><code>ActionSheet</code> 操作面板</li>
<li><code>Dialog</code> 对话框</li>
<li><code>Drawer</code> 抽屉</li>
<li><code>Popup</code> 弹出层</li>
<li><code>Modal</code> 模态框</li>
<li><code>BottomPopup</code> 底部弹层</li>
<li><code>TopPopup</code> 顶部弹层</li>
<li><code>Gallery</code> 图片浏览</li>
<li><code>Landscape</code> 横屏弹层</li>
<li><code>FilterDrawer</code> 筛选抽屉</li>
<li><code>BubbleBox</code> 气泡框</li>
<li><code>ShareSheet</code> 分享面板</li>
</ul>
</details>

<details open>
<summary>layout 布局组件 <span class="cat-count">(16)</span></summary>
<ul class="tree-list">
<li><code>Layout</code> 整体布局</li>
<li><code>Grid</code> 宫格</li>
<li><code>GridItem</code> 宫格项</li>
<li><code>Card</code> 卡片</li>
<li><code>Row</code> 行容器</li>
<li><code>Col</code> 列容器</li>
<li><code>Collapse</code> 折叠面板</li>
<li><code>CollapseItem</code> 折叠面板项</li>
<li><code>Empty</code> 空状态</li>
<li><code>Panel</code> 面板</li>
<li><code>MovableView</code> 可拖拽视图</li>
<li><code>Preview</code> 预览</li>
<li><code>HorizontalScroll</code> 横向滚动</li>
<li><code>BackgroundImage</code> 背景图</li>
<li><code>BannerArc</code> 弧形横幅</li>
<li><code>Waterfall</code> 瀑布流</li>
</ul>
</details>

<details open>
<summary>motion 动效组件 <span class="cat-count">(4)</span></summary>
<ul class="tree-list">
<li><code>Animation</code> 动画容器</li>
<li><code>Lottie</code> Lottie 动画</li>
<li><code>DigitalRoller</code> 数字滚轮</li>
<li><code>CubicBezier</code> 贝塞尔曲线</li>
</ul>
</details>

<details open>
<summary>canvas 画布组件 <span class="cat-count">(4)</span></summary>
<ul class="tree-list">
<li><code>Poster</code> 海报生成</li>
<li><code>Qrcode</code> 二维码</li>
<li><code>Barcode</code> 条形码</li>
<li><code>Autograph</code> 手写签名</li>
</ul>
</details>

<details open>
<summary>utility 工具组件 <span class="cat-count">(13)</span></summary>
<ul class="tree-list">
<li><code>StatusBar</code> 状态栏占位</li>
<li><code>WhiteSpace</code> 垂直留白</li>
<li><code>WingBlank</code> 水平留白</li>
<li><code>Css</code> CSS 注入</li>
<li><code>ThemeToggle</code> 主题切换</li>
<li><code>CopyText</code> 复制文本</li>
<li><code>Backtop</code> 回到顶部</li>
<li><code>SafeArea</code> 安全区域</li>
<li><code>Lazyload</code> 懒加载</li>
<li><code>Timer</code> 定时器</li>
<li><code>CountdownVerify</code> 验证码倒计时</li>
<li><code>Parse</code> 富文本解析</li>
<li><code>OverflowHidden</code> 溢出隐藏</li>
</ul>
</details>

<details open>
<summary>extended 扩展组件 <span class="cat-count">(8)</span></summary>
<ul class="tree-list">
<li><code>FilterBar</code> 筛选栏</li>
<li><code>SlideVerify</code> 滑动验证</li>
<li><code>RotateVerify</code> 旋转验证</li>
<li><code>SliderCaptcha</code> 滑块验证码</li>
<li><code>PuzzleVerify</code> 拼图验证</li>
<li><code>ImageCropper</code> 图片裁剪</li>
<li><code>Drag</code> 拖拽排序</li>
<li><code>TableWeex</code> Weex 表格</li>
</ul>
</details>

<details open>
<summary>experimental 实验组件 <span class="cat-count">(5)</span></summary>
<ul class="tree-list">
<li><code>GestureHandler</code> 手势处理</li>
<li><code>VirtualList</code> 虚拟列表</li>
<li><code>Skeleton3D</code> 3D 骨架屏</li>
<li><code>VoiceInput</code> 语音输入</li>
<li><code>AIAssist</code> AI 辅助</li>
</ul>
</details>

<details open>
<summary>system 系统组件 <span class="cat-count">(6)</span></summary>
<ul class="tree-list">
<li><code>Notification</code> 系统通知</li>
<li><code>Auth</code> 认证授权</li>
<li><code>Permission</code> 权限控制</li>
<li><code>Logger</code> 日志记录</li>
<li><code>Settings</code> 系统设置</li>
<li><code>Updater</code> 版本更新</li>
</ul>
</details>

</div>

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
