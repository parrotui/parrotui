# 组件概览

> Parrot UI Core — **11 分类 · 300 个组件** + Composables + Directives + Utils + Design Tokens

```
parrotui-core/
├─ index.ts                              # 统一导出（300 组件 + 全部 API）
├─ components/                           # 组件源码（11 分类）
│  ├─ basic/                             #   基础组件 (41)
│  ├─ layout/                            #   布局组件 (32)
│  ├─ form/                              #   表单组件 (53)
│  ├─ data/                              #   数据组件 (18)
│  ├─ chart/                             #   图表组件 (14)
│  ├─ display/                           #   展示组件 (18)
│  ├─ feedback/                          #   反馈组件 (30)
│  ├─ navigation/                        #   导航组件 (23)
│  ├─ media/                             #   媒体组件 (27)
│  ├─ advanced/                          #   高级组件 (24)
│  └─ utility/                           #   工具组件 (20)
├─ composables/                          # 组合式 API
│  ├─ useColor.ts                        #   颜色访问
│  ├─ useResponsive.ts                   #   响应式断点
│  ├─ useLocale.ts                       #   国际化 i18n
│  └─ useTheme.ts                        #   主题管理
├─ directives/                           # 自定义指令
│  ├─ vcopy.ts                           #   剪贴板复制
│  ├─ vloading.ts                        #   加载状态
│  └─ vpermission.ts                     #   权限控制
├─ utils/                                # 工具函数
│  ├─ color.ts                           #   颜色操作
│  ├─ dom.ts                             #   DOM 查询 / 滚动
│  ├─ event.ts                           #   事件总线 / 防抖 / 节流
│  └─ validator.ts                       #   表单验证
├─ tokens/                               # 设计令牌
│  ├─ colors.ts                          #   7 色系 × 10 级
│  ├─ spacing.ts                         #   间距规范
│  ├─ typography.ts                      #   字体规范
│  └─ shadows.ts                         #   阴影规范
├─ theme/                                # 主题配置
│  ├─ light.ts                           #   亮色主题
│  ├─ dark.ts                            #   暗色主题
│  └─ adminTheme.ts                      #   后台管理预设
├─ locale/                               # 语言包
│  ├─ zhCN.ts                            #   简体中文
│  └─ enUS.ts                            #   English
└─ styles/                               # 全局样式
   ├─ variables.css                      #   CSS 变量定义
   ├─ base.css                           #   140+ 工具类
   ├─ animations.css                     #   16 个关键帧动画
   └─ reset.css                          #   样式重置
```

## 目录说明

| 目录 | 说明 |
|------|------|
| `components/basic/` | 基础 UI 元素：排版、按钮、图标、徽标、进度、开关等 (41) |
| `components/layout/` | 布局容器：Flex / Grid / Stack / 页面结构 / 滚动 (32) |
| `components/form/` | 表单控件：输入、选择、日期、上传、编辑器、穿梭框 (53) |
| `components/data/` | 数据展示：表格、列表、树、数据网格、时间线、日历 (18) |
| `components/chart/` | 数据可视化：折线、柱状、饼图、雷达、热力图、仪表盘 (14) |
| `components/display/` | 内容展示：JSON/YAML/Markdown/Diff 查看器、文件树 (18) |
| `components/feedback/` | 操作反馈：弹窗、提示、通知、加载、引导、错误页 (30) |
| `components/navigation/` | 导航系统：菜单、标签页、面包屑、分页、搜索、筛选 (23) |
| `components/media/` | 媒体处理：图片、视频、音频、相机、扫码、动画 (27) |
| `components/advanced/` | 高级功能：拖拽、流程图、看板、构建器、虚拟滚动 (24) |
| `components/utility/` | 工具组件：焦点陷阱、快捷键、全屏、主题/语言提供者 (20) |
| `composables/` | 4 个 Composable Hook — 颜色、响应式断点、国际化、主题 |
| `directives/` | 3 个自定义指令 — 剪贴板、加载状态、权限控制 |
| `utils/` | 4 个工具模块 — 颜色操作、DOM 查询、事件总线、表单验证 |
| `tokens/` | 设计令牌 — 7 色系 × 10 级渐变色、间距、字体、阴影 |

## 11 分类 · 300 组件清单

::: details basic 基础组件 (41)
- `Color` 颜色 — 色块展示、主题令牌、透明度
- `Text` 文本 — link / price / phone / name 模式，可复制
- `Heading` 标题 — h1-h6 六级标题，4 种颜色类型
- `Paragraph` 段落 — 3 种尺寸、缩进、对齐
- `Label` 标签文本 — 表单标签、必填标记
- `Caption` 说明文字 — 固定 22rpx，4 种颜色
- `Code` 代码块 — 行号、复制按钮、暗色主题
- `Quote` 引用 — 边框 / 背景 / 图标 3 种类型
- `Number` 数字 — 统计卡片、趋势指示、前后缀
- `Statistic` 统计数值 — 趋势、精度、千分位
- `Counter` 动画计数器 — 数字递增动画
- `Countdown` 倒计时 — 天/时/分/秒、自定义格式
- `Currency` 货币 — 符号、千分位、5 种尺寸
- `Percentage` 百分比 — 趋势箭头、涨跌配色
- `Icon` 图标 — 旋转、脉冲/弹跳动画、翻转
- `IconButton` 图标按钮 — circle / square / round，徽标
- `Button` 按钮 — solid / outline / ghost / link / text 变体
- `ButtonGroup` 按钮组 — 水平 / 垂直，相邻边框合并
- `Link` 链接 — 内部/外部链接、下划线、图标
- `Divider` 分割线 — 水平 / 垂直、文字分割
- `Spacer` 间距 — 水平 / 垂直方向占位
- `Badge` 徽标 — 数字 / 圆点 / 自定义
- `Tag` 标签 — 多色、可关闭
- `Chip` 标签片 — 可选中、可关闭、图标+文本
- `Avatar` 头像 — 圆形 / 方形、图片 / 文字
- `AvatarGroup` 头像组 — 重叠展示、+N 计数
- `Image` 图片 — 加载/错误占位、圆形、预览
- `Picture` 图文 — 图片+说明文字组合
- `AspectRatio` 宽高比 — 比例锁定容器
- `Skeleton` 骨架屏 — 加载占位动画
- `Spinner` 加载旋转 — 多种旋转样式
- `Progress` 进度条 — 线性进度、百分比、颜色
- `CircularProgress` 环形进度 — 环形进度条、仪表盘
- `Rating` 评分 — 星级/心形、半星、只读
- `Switch` 开关 — 开/关切换、自定义文字
- `Slider` 滑块 — 单滑块、步长、刻度
- `RangeSlider` 双滑块 — 范围选择
- `Clipboard` 剪贴板 — 剪贴板读写操作
- `CopyButton` 复制按钮 — 一键复制、成功提示
- `Highlight` 高亮 — 关键词高亮、正则匹配
- `VisuallyHidden` 视觉隐藏 — 无障碍隐藏元素
:::

::: details layout 布局组件 (32)
- `Container` 容器 — 最大宽度、居中、内边距
- `Flex` 弹性布局 — 方向、对齐、换行、间距
- `Grid` 网格布局 — 行列定义、间距、响应式
- `Stack` 堆叠布局 — 层叠排列、z-index 管理
- `HStack` 水平堆叠 — 水平方向排列、间距
- `VStack` 垂直堆叠 — 垂直方向排列、间距
- `Center` 居中容器 — 水平/垂直居中
- `Space` 间距容器 — 子元素统一间距
- `Wrap` 自动换行 — 子元素自动换行排列
- `DividerLayout` 分割布局 — 带分割线的区域布局
- `AspectRatioLayout` 比例布局 — 固定宽高比的布局容器
- `Page` 页面容器 — 页面级容器、滚动管理
- `PageHeader` 页头 — 标题、面包屑、操作区
- `PageFooter` 页脚 — 底部信息、版权、链接
- `Section` 区块 — 标题+内容区块
- `Sidebar` 侧边栏 — 左/右侧边栏、可折叠
- `SidebarLayout` 侧边栏布局 — 侧边栏+主内容区
- `HeaderLayout` 顶栏布局 — 顶部导航+主内容区
- `FooterLayout` 底栏布局 — 主内容区+底部栏
- `SplitLayout` 分栏布局 — 左右/上下分栏、可拖拽
- `DashboardLayout` 仪表盘布局 — 侧栏+顶栏+内容
- `CardLayout` 卡片布局 — 多卡片网格排列
- `ListLayout` 列表布局 — 列表+详情联动
- `MediaLayout` 媒体布局 — 图文混排布局
- `ScrollView` 滚动视图 — 区域滚动、下拉刷新
- `Sticky` 粘性定位 — 滚动吸顶/吸底
- `Portal` 传送门 — 渲染到指定 DOM 节点
- `Overlay` 遮罩层 — 全屏遮罩、自定义透明度
- `SafeArea` 安全区域 — 适配刘海屏/底部安全区
- `Viewport` 视口容器 — 视口尺寸检测
- `FixedLayout` 固定布局 — 固定定位容器
- `FloatingLayout` 浮动布局 — 浮动定位容器
:::

::: details form 表单组件 (53)
- `Form` 表单容器 — 校验、提交、重置
- `FormItem` 表单项 — 标签、校验消息、布局
- `FormLabel` 表单标签 — 必填标记、提示
- `FormDescription` 表单描述 — 字段说明文字
- `FormError` 表单错误 — 错误消息展示
- `FormGroup` 表单分组 — 字段分组、标题
- `FormField` 表单字段 — 受控字段封装
- `Input` 输入框 — 前后缀、图标、清除
- `Textarea` 文本域 — 自动高度、字数限制
- `PasswordInput` 密码输入 — 显示/隐藏切换、强度
- `NumberInput` 数字输入 — 步进、范围限制
- `OtpInput` 验证码输入 — 多格输入、自动聚焦
- `SearchInput` 搜索输入 — 搜索图标、清除、防抖
- `UrlInput` 网址输入 — 协议选择、URL 验证
- `EmailInput` 邮箱输入 — 邮箱格式验证
- `PhoneInput` 电话输入 — 区号选择、格式化
- `Select` 下拉选择 — 单选、搜索、分组
- `MultiSelect` 多选下拉 — 多选、标签展示
- `TreeSelect` 树形选择 — 树形结构、多选
- `Cascader` 级联选择 — 多级联动、搜索
- `Checkbox` 复选框 — 选中/半选/禁用
- `CheckboxGroup` 复选框组 — 多选、全选
- `Radio` 单选框 — 选中/禁用
- `RadioGroup` 单选框组 — 排列方向、按钮样式
- `SwitchField` 开关字段 — 表单绑定开关
- `SliderField` 滑块字段 — 表单绑定滑块
- `RangeSliderField` 范围滑块字段 — 表单绑定范围滑块
- `RatingField` 评分字段 — 表单绑定评分
- `DatePicker` 日期选择 — 日期选择、范围、格式
- `TimePicker` 时间选择 — 时分秒选择
- `DateTimePicker` 日期时间 — 日期+时间联合
- `RangePicker` 范围选择 — 日期范围
- `WeekPicker` 周选择 — 选择周
- `MonthPicker` 月选择 — 选择月
- `YearPicker` 年选择 — 选择年
- `ColorPicker` 颜色选择器 — 取色、预设色板
- `FileUpload` 文件上传 — 文件选择、拖拽上传
- `ImageUpload` 图片上传 — 预览、裁剪、压缩
- `Dropzone` 拖拽上传区 — 拖拽文件到区域上传
- `UploadList` 上传列表 — 文件列表、进度、删除
- `SignaturePad` 手写签名 — 触摸签名、导出图片
- `RichTextEditor` 富文本编辑 — 工具栏、格式化
- `MarkdownEditor` Markdown 编辑 — 预览、语法高亮
- `JsonEditor` JSON 编辑器 — 格式化、校验
- `CodeEditor` 代码编辑器 — 语法高亮、行号
- `TagInput` 标签输入 — 添加/删除标签
- `Autocomplete` 自动完成 — 联想建议、异步
- `Mention` 提及 — @人员、#话题
- `Transfer` 穿梭框 — 左右移动、搜索
- `DualList` 双列表 — 双列表选择
- `Stepper` 步进器 — 数字加减
- `WizardForm` 向导表单 — 分步骤填写
- `FormArray` 动态表单 — 动态增删表单项
:::

::: details data 数据组件 (18)
- `Table` 表格 — 基础表格、排序、筛选
- `DataTable` 数据表格 — 分页、搜索、导出
- `VirtualTable` 虚拟表格 — 大数据量虚拟滚动
- `TreeTable` 树形表格 — 树形结构表格
- `GridTable` 网格表格 — 可编辑网格
- `List` 列表 — 基础列表、加载更多
- `VirtualList` 虚拟列表 — 大数据量虚拟滚动
- `Tree` 树形控件 — 展开/折叠、选中、拖拽
- `DataGrid` 数据网格 — 多列数据展示
- `StatisticCard` 统计卡片 — 数值+趋势+图标
- `Metric` 指标卡 — KPI 指标展示
- `Timeline` 时间线 — 纵向/横向时间线
- `Calendar` 日历 — 月/周视图、事件标记
- `Schedule` 日程 — 日程安排、时间段
- `ActivityFeed` 动态流 — 活动记录、时间线
- `Kanban` 看板 — 列拖拽、卡片管理
- `DataCard` 数据卡片 — 数据摘要展示
- `Waterfall` 瀑布流 — 不等高瀑布流布局
:::

::: details chart 图表组件 (14)
- `Chart` 图表容器 — 通用图表容器、响应式
- `LineChart` 折线图 — 趋势、多线、面积
- `BarChart` 柱状图 — 垂直/水平、堆叠、分组
- `PieChart` 饼图 — 环形、标签、图例
- `AreaChart` 面积图 — 渐变填充、堆叠
- `RadarChart` 雷达图 — 多维度对比
- `ScatterChart` 散点图 — 气泡、聚类
- `Heatmap` 热力图 — 色阶矩阵
- `Gauge` 仪表盘 — 进度弧、刻度、指针
- `Sparkline` 迷你图 — 行内趋势图
- `Map` 地图 — 区域着色、标注
- `GeoMap` 地理地图 — 经纬度标注、轨迹
- `FunnelChart` 漏斗图 — 转化率、层级
- `TreemapChart` 矩形树图 — 层级占比、钻取
:::

::: details display 展示组件 (18)
- `DataViewer` 数据查看器 — 通用数据展示
- `JsonViewer` JSON 查看器 — 折叠/展开、搜索
- `YamlViewer` YAML 查看器 — 语法高亮
- `KeyValue` 键值对 — 标签+值、复制
- `LogViewer` 日志查看器 — 实时日志、过滤
- `CodeViewer` 代码查看器 — 只读代码展示、高亮
- `MarkdownViewer` Markdown 渲染 — Markdown 转 HTML
- `DiffViewer` 差异对比 — 文件差异、并排/内联
- `FileTree` 文件树 — 文件目录结构展示
- `FileList` 文件列表 — 文件列表展示
- `FolderTree` 文件夹树 — 文件夹层级
- `FolderList` 文件夹列表 — 文件夹平铺
- `MediaGallery` 媒体画廊 — 图片/视频网格
- `ProductList` 商品列表 — 商品卡片网格
- `UserList` 用户列表 — 用户信息列表
- `NotificationList` 通知列表 — 通知消息列表
- `Watermark` 水印 — 全局/局部水印
- `ProfileCard` 个人名片 — 用户信息卡片
:::

::: details feedback 反馈组件 (30)
- `Alert` 警告提示 — 成功/信息/警告/错误
- `Banner` 横幅 — 全宽通知条
- `Callout` 标注 — 带图标的提示块
- `Toast` 轻提示 — 自动消失、位置可选
- `Message` 消息提示 — 全局消息、可关闭
- `Snackbar` 操作提示 — 底部提示、可操作
- `Notification` 通知 — 弹出通知、可关闭
- `NotificationCenter` 通知中心 — 通知列表、未读标记
- `Dialog` 对话框 — 确认/取消、自定义内容
- `Modal` 模态框 — 遮罩、关闭、动画
- `ConfirmDialog` 确认对话框 — 确认/取消操作
- `PromptDialog` 输入对话框 — 带输入框的对话框
- `FullscreenModal` 全屏模态 — 全屏弹出、移动端
- `Drawer` 抽屉 — 侧滑面板、多方向
- `BottomSheet` 底部面板 — 底部弹出、拖拽
- `Popover` 气泡卡片 — 点击触发、内容丰富
- `Tooltip` 文字提示 — 悬停显示、多方向
- `HoverCard` 悬停卡片 — 悬停展示详情
- `ContextMenu` 右键菜单 — 上下文操作菜单
- `Loading` 加载 — 全局/局部加载
- `LoadingOverlay` 加载遮罩 — 覆盖区域的加载
- `ProgressBar` 进度条 — 操作进度反馈
- `SkeletonLoader` 骨架加载 — 内容占位加载
- `EmptyState` 空状态 — 无数据时的占位
- `Result` 结果页 — 操作结果展示
- `ErrorPage` 错误页 — 404/500 等错误页面
- `Offline` 离线提示 — 网络断开提示
- `Retry` 重试 — 失败重试操作
- `Tour` 引导 — 功能引导、步骤提示
- `Guide` 指南 — 新手引导、遮罩高亮
:::

::: details navigation 导航组件 (23)
- `Menu` 菜单 — 垂直/水平、子菜单
- `MenuBar` 菜单栏 — 顶部菜单栏
- `DropdownMenu` 下拉菜单 — 点击触发、多级
- `MegaMenu` 超级菜单 — 大面板、分栏
- `Tabs` 标签页 — 切换面板、懒加载
- `TabBar` 标签栏 — 底部标签栏、图标+文字
- `Breadcrumb` 面包屑 — 层级导航、分隔符
- `Pagination` 分页 — 页码、跳转、每页条数
- `Pager` 翻页器 — 简洁上一页/下一页
- `NavBar` 导航栏 — 顶部导航、返回、标题
- `TopNav` 顶部导航 — 桌面端顶部导航
- `SideNav` 侧边导航 — 侧边栏导航、折叠
- `BottomNav` 底部导航 — 移动端底部标签栏
- `MobileNav` 移动导航 — 移动端汉堡菜单
- `CommandPalette` 命令面板 — 快捷命令搜索
- `SearchBar` 搜索栏 — 搜索建议、历史
- `SearchDialog` 搜索对话框 — 全屏搜索弹窗
- `FilterBar` 筛选栏 — 多条件筛选
- `SortBar` 排序栏 — 排序选项切换
- `CategoryNav` 分类导航 — 分类标签导航
- `TagNav` 标签导航 — 标签选择导航
- `AnchorNav` 锚点导航 — 页内锚点跳转
- `FloatingMenu` 浮动菜单 — 悬浮操作菜单
:::

::: details media 媒体组件 (27)
- `ImageViewer` 图片查看 — 缩放、旋转、多图
- `ImagePreview` 图片预览 — 点击预览大图
- `ImageZoom` 图片缩放 — 放大镜效果
- `ImageCropper` 图片裁剪 — 自由/固定比例裁剪
- `ImageEditor` 图片编辑 — 滤镜、标注、裁剪
- `Gallery` 图库 — 网格展示、预览
- `Carousel` 走马灯 — 轮播图、自动播放
- `SliderGallery` 滑动画廊 — 横向滑动浏览
- `Lightbox` 灯箱 — 全屏图片浏览
- `VideoPlayer` 视频播放器 — 控制栏、全屏
- `AudioPlayer` 音频播放器 — 播放控制、进度
- `MediaPlayer` 媒体播放器 — 通用音视频播放
- `MediaCard` 媒体卡片 — 封面+标题+描述
- `MediaGrid` 媒体网格 — 媒体文件网格展示
- `Camera` 相机 — 拍照、扫码
- `ScreenRecorder` 录屏 — 屏幕录制
- `AudioRecorder` 录音 — 音频录制
- `QRScanner` 二维码扫描 — 扫码识别
- `BarcodeScanner` 条码扫描 — 条形码识别
- `AvatarEditor` 头像编辑 — 头像裁剪上传
- `GifPlayer` GIF 播放 — GIF 动图控制
- `LottiePlayer` Lottie 播放 — Lottie 动画
- `AnimationPlayer` 动画播放 — CSS/JS 动画
- `PosterGenerator` 海报生成 — Canvas 海报
- `Thumbnail` 缩略图 — 图片/视频缩略图
- `DocumentViewer` 文档预览 — PDF/Office 预览
- `Panorama` 全景 — 全景图查看
:::

::: details advanced 高级组件 (24)
- `GlobalSearch` 全局搜索 — 跨模块搜索
- `Spotlight` 聚光灯 — 快捷搜索入口
- `KanbanBoard` 看板面板 — 多列拖拽看板
- `WorkflowDesigner` 工作流设计器 — 流程编排
- `FlowChart` 流程图 — 节点连线图
- `MindMap` 思维导图 — 树形发散
- `OrgChart` 组织架构图 — 层级关系图
- `TreeEditor` 树编辑器 — 树形数据编辑
- `DragList` 拖拽列表 — 列表项拖拽排序
- `DragGrid` 拖拽网格 — 网格拖拽布局
- `DragTree` 拖拽树 — 树节点拖拽
- `SortableList` 可排序列表 — 拖拽排序
- `SortableTable` 可排序表格 — 行拖拽排序
- `VirtualScroller` 虚拟滚动 — 超长列表虚拟渲染
- `InfiniteScroll` 无限滚动 — 滚动加载更多
- `SmartTable` 智能表格 — 自动配置表格
- `QueryBuilder` 查询构建器 — 可视化查询条件
- `FilterBuilder` 筛选构建器 — 可视化筛选条件
- `LayoutBuilder` 布局构建器 — 拖拽搭建布局
- `DashboardBuilder` 仪表盘构建器 — 拖拽搭建仪表盘
- `PageBuilder` 页面构建器 — 可视化搭建页面
- `ThemeEditor` 主题编辑器 — 可视化主题定制
- `ComponentPlayground` 组件演练场 — 在线调试组件
- `LiveEditor` 实时编辑器 — 代码实时预览
:::

::: details utility 工具组件 (20)
- `FocusTrap` 焦点陷阱 — 焦点锁定在区域内
- `ClickOutside` 外部点击 — 检测外部点击
- `ResizeObserver` 尺寸监听 — 元素尺寸变化监听
- `IntersectionObserver` 交叉监听 — 元素可见性检测
- `ScrollLock` 滚动锁定 — 禁止背景滚动
- `ScrollSpy` 滚动监听 — 滚动位置追踪
- `Keybinding` 快捷键绑定 — 键盘快捷键注册
- `Hotkey` 热键 — 全局热键管理
- `ClipboardManager` 剪贴板管理 — 读写剪贴板
- `Fullscreen` 全屏 — 全屏切换
- `IdleTimer` 空闲计时 — 用户空闲检测
- `VisibilitySensor` 可见性传感 — 组件可见性检测
- `DeviceDetector` 设备检测 — 设备类型/方向检测
- `ThemeProvider` 主题提供者 — 主题上下文注入
- `LocaleProvider` 语言提供者 — 国际化上下文注入
- `ConfigProvider` 配置提供者 — 全局配置注入
- `ErrorBoundary` 错误边界 — 子组件错误捕获
- `RenderIf` 条件渲染 — 声明式条件渲染
- `Breakpoint` 断点检测 — 响应式断点判断
- `MediaQuery` 媒体查询 — CSS 媒体查询封装
:::
