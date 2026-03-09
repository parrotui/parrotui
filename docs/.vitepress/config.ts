import { defineConfig } from 'vitepress'

// 微博官方 SVG 图标
const weiboSvg = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M851.4 590.193c-22.196-66.233-90.385-90.422-105.912-91.863-15.523-1.442-29.593-9.94-19.295-27.505 10.302-17.566 29.304-68.684-7.248-104.681-36.564-36.14-116.512-22.462-173.094 0.866-56.434 23.327-53.39 7.055-51.65-8.925 1.89-16.848 32.355-111.02-60.791-122.395C311.395 220.86 154.85 370.754 99.572 457.15 16 587.607 29.208 675.873 29.208 675.873h0.58c10.009 121.819 190.787 218.869 412.328 218.869 190.5 0 350.961-71.853 398.402-169.478 0 0 0.143-0.433 0.575-1.156 4.938-10.506 8.71-21.168 11.035-32.254 6.668-26.205 11.755-64.215-0.728-101.66z m-436.7 251.27c-157.71 0-285.674-84.095-285.674-187.768 0-103.671 127.82-187.76 285.674-187.76 157.705 0 285.673 84.089 285.673 187.76 0 103.815-127.968 187.768-285.673 187.768z" fill="currentColor"/><path d="M803.096 425.327c2.896 1.298 5.945 1.869 8.994 1.869 8.993 0 17.7-5.328 21.323-14.112 5.95-13.964 8.993-28.793 8.993-44.205 0-62.488-51.208-113.321-114.181-113.321-15.379 0-30.32 3.022-44.396 8.926-11.755 4.896-17.263 18.432-12.335 30.24 4.933 11.662 18.572 17.134 30.465 12.238 8.419-3.46 17.268-5.33 26.41-5.33 37.431 0 67.752 30.241 67.752 67.247 0 9.068-1.735 17.857-5.369 26.202a22.832 22.832 0 0 0 12.335 30.236z" fill="currentColor"/><path d="M726.922 114.157c-25.969 0-51.65 3.744-76.315 10.942-18.423 5.472-28.868 24.622-23.5 42.91 5.509 18.29 24.804 28.657 43.237 23.329a201.888 201.888 0 0 1 56.578-8.064c109.253 0 198.189 88.271 198.189 196.696 0 19.436-2.905 38.729-8.419 57.16-5.508 18.289 4.79 37.588 23.212 43.053 3.342 1.014 6.817 1.442 10.159 1.442 14.943 0 28.725-9.648 33.37-24.48 7.547-24.906 11.462-50.826 11.462-77.175-0.143-146.588-120.278-265.813-267.973-265.813z" fill="currentColor"/><path d="M388.294 534.47c-84.151 0-152.34 59.178-152.34 132.334 0 73.141 68.189 132.328 152.34 132.328 84.148 0 152.337-59.182 152.337-132.328 0-73.15-68.19-132.334-152.337-132.334zM338.53 752.763c-29.454 0-53.39-23.755-53.39-52.987 0-29.228 23.941-52.989 53.39-52.989 29.453 0 53.39 23.76 53.39 52.989 0 29.227-23.937 52.987-53.39 52.987z m99.82-95.465c-6.382 11.086-19.296 15.696-28.726 10.219-9.43-5.323-11.75-18.717-5.37-29.803 6.386-11.09 19.297-15.7 28.725-10.224 9.43 5.472 11.755 18.864 5.37 29.808z" fill="currentColor"/></svg>`

// 简体中文侧边栏
const zhSidebar = {
  '/zh/guide/': [
    {
      text: '开始使用',
      collapsed: false,
      items: [
        { text: '介绍',         link: '/zh/guide/introduction' },
        { text: '快速上手',     link: '/zh/guide/getting-started' },
        { text: '安装',         link: '/zh/guide/installation' },
        { text: '更新日志',     link: '/zh/guide/changelog' },
      ],
    },
    {
      text: '设计基础',
      collapsed: false,
      items: [
        { text: 'Design Tokens', link: '/zh/guide/tokens' },
        { text: '颜色系统',     link: '/zh/guide/colors' },
        { text: '字体规范',     link: '/zh/guide/typography' },
        { text: '间距规范',     link: '/zh/guide/spacing' },
        { text: '主题系统',     link: '/zh/guide/theming' },
        { text: '国际化 i18n', link: '/zh/guide/i18n' },
      ],
    },
    {
      text: '架构参考',
      collapsed: false,
      items: [
        { text: '架构概览',         link: '/zh/guide/architecture' },
        { text: 'Composables API', link: '/zh/guide/composables' },
        { text: '指令工具',         link: '/zh/guide/directives' },
        { text: '工具函数',         link: '/zh/guide/utils' },
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '组件概览',
      collapsed: false,
      items: [
        { text: '组件概览',      link: '/zh/components/overview' },
      ],
    },
    {
      text: '基础组件 Basic (25)',
      collapsed: true,
      items: [
        { text: 'Button 按钮',        link: '/zh/components/button' },
        { text: 'Icon 图标',           link: '/zh/components/icon' },
        { text: 'Text 文本',           link: '/zh/components/text' },
        { text: 'Color 颜色',          link: '/zh/components/color' },
        { text: 'Number 数字',         link: '/zh/components/number' },
        { text: 'Footer 页脚',         link: '/zh/components/footer' },
        { text: 'Heading 标题',        link: '/zh/components/heading' },
        { text: 'Paragraph 段落',      link: '/zh/components/paragraph' },
        { text: 'Caption 说明文字',    link: '/zh/components/caption' },
        { text: 'Code 代码块',         link: '/zh/components/code' },
        { text: 'Quote 引用',          link: '/zh/components/quote' },
        { text: 'Statistic 统计数值',  link: '/zh/components/statistic' },
        { text: 'Counter 计数器',      link: '/zh/components/counter' },
        { text: 'Currency 货币',       link: '/zh/components/currency' },
        { text: 'Percentage 百分比',   link: '/zh/components/percentage' },
        { text: 'IconButton 图标按钮', link: '/zh/components/icon-button' },
        { text: 'ButtonGroup 按钮组',  link: '/zh/components/button-group' },
        { text: 'Chip 标签片',         link: '/zh/components/chip' },
        { text: 'Spacer 间距',         link: '/zh/components/spacer' },
        { text: 'Image 图片',          link: '/zh/components/image' },
        { text: 'Picture 图文',        link: '/zh/components/picture' },
        { text: 'AspectRatio 宽高比',  link: '/zh/components/aspect-ratio' },
        { text: 'RangeSlider 双滑块',  link: '/zh/components/range-slider' },
        { text: 'Highlight 高亮',      link: '/zh/components/highlight' },
        { text: 'SvgIcon SVG图标',     link: '/zh/components/svg-icon' },
      ],
    },
    {
      text: '展示组件 Display (16)',
      collapsed: true,
      items: [
        { text: 'Badge 徽标',           link: '/zh/components/badge' },
        { text: 'Tag 标签',             link: '/zh/components/tag' },
        { text: 'Avatar 头像',          link: '/zh/components/avatar' },
        { text: 'AvatarGroup 头像组',   link: '/zh/components/avatar-group' },
        { text: 'Divider 分割线',       link: '/zh/components/divider' },
        { text: 'Section 章节',         link: '/zh/components/section' },
        { text: 'Skeleton 骨架屏',      link: '/zh/components/skeleton' },
        { text: 'NoticeBar 通知栏',     link: '/zh/components/notice-bar' },
        { text: 'FooterLinks 页脚链接', link: '/zh/components/footer-links' },
        { text: 'TimeAxis 时间轴',      link: '/zh/components/time-axis' },
        { text: 'IndexCard 首页卡片',   link: '/zh/components/index-card' },
        { text: 'ProductCard 商品卡片', link: '/zh/components/product-card' },
        { text: 'TradeItem 交易条目',   link: '/zh/components/trade-item' },
        { text: 'DataTag 数据标签',     link: '/zh/components/data-tag' },
        { text: 'SwiperDot 轮播指示器', link: '/zh/components/swiper-dot' },
        { text: 'Result 结果页',        link: '/zh/components/result' },
      ],
    },
    {
      text: '表单组件 Form (24)',
      collapsed: true,
      items: [
        { text: 'Input 输入框',              link: '/zh/components/input' },
        { text: 'Label 表单标签',            link: '/zh/components/label' },
        { text: 'Form 表单容器',             link: '/zh/components/form' },
        { text: 'FormItem 表单项',           link: '/zh/components/form-item' },
        { text: 'Select 下拉选择',           link: '/zh/components/select' },
        { text: 'Picker 选择器',             link: '/zh/components/picker' },
        { text: 'DatePicker 日期选择',       link: '/zh/components/date-picker' },
        { text: 'Calendar 日历',             link: '/zh/components/calendar' },
        { text: 'Cascader 级联选择',         link: '/zh/components/cascader' },
        { text: 'Rate 评分',                 link: '/zh/components/rate' },
        { text: 'Upload 图片上传',           link: '/zh/components/upload' },
        { text: 'UploadVideo 视频上传',      link: '/zh/components/upload-video' },
        { text: 'InputNumber 数字输入',      link: '/zh/components/input-number' },
        { text: 'Slider 滑块',              link: '/zh/components/slider' },
        { text: 'Textarea 文本域',           link: '/zh/components/textarea' },
        { text: 'CheckboxGroup 复选框组',    link: '/zh/components/checkbox-group' },
        { text: 'Checkbox 复选框',           link: '/zh/components/checkbox' },
        { text: 'RadioGroup 单选框组',       link: '/zh/components/radio-group' },
        { text: 'Radio 单选框',              link: '/zh/components/radio' },
        { text: 'Switch 开关',               link: '/zh/components/switch' },
        { text: 'SearchBar 搜索栏',          link: '/zh/components/search-bar' },
        { text: 'DigitalKeyboard 数字键盘',  link: '/zh/components/digital-keyboard' },
        { text: 'SingleInput 单格输入',      link: '/zh/components/single-input' },
        { text: 'LicensePlate 车牌输入',     link: '/zh/components/license-plate' },
      ],
    },
    {
      text: '数据组件 Data (7)',
      collapsed: true,
      items: [
        { text: 'List 列表',           link: '/zh/components/list' },
        { text: 'ListCell 列表单元',   link: '/zh/components/list-cell' },
        { text: 'Pagination 分页',     link: '/zh/components/pagination' },
        { text: 'Table 表格',          link: '/zh/components/table' },
        { text: 'Progress 进度条',     link: '/zh/components/progress' },
        { text: 'Circle 环形进度',     link: '/zh/components/circle' },
        { text: 'CountDown 倒计时',    link: '/zh/components/count-down' },
      ],
    },
    {
      text: '操作反馈 Feedback (6)',
      collapsed: true,
      items: [
        { text: 'Message 消息提示',  link: '/zh/components/message' },
        { text: 'Toast 轻提示',      link: '/zh/components/toast' },
        { text: 'Alert 警告提示',    link: '/zh/components/alert' },
        { text: 'Loading 加载',      link: '/zh/components/loading' },
        { text: 'Spin 旋转加载',     link: '/zh/components/spin' },
        { text: 'LoadAni 加载动画',  link: '/zh/components/load-ani' },
      ],
    },
    {
      text: '导航组件 Navigation (18)',
      collapsed: true,
      items: [
        { text: 'NavBar 导航栏',              link: '/zh/components/nav-bar' },
        { text: 'Tab 标签页',                 link: '/zh/components/tab' },
        { text: 'Tabs 标签页容器',            link: '/zh/components/tabs' },
        { text: 'Tabbar 底部标签栏',          link: '/zh/components/tabbar' },
        { text: 'BottomNavbar 底部导航',      link: '/zh/components/bottom-navbar' },
        { text: 'Breadcrumb 面包屑',          link: '/zh/components/breadcrumb' },
        { text: 'Steps 步骤条',               link: '/zh/components/steps' },
        { text: 'Link 链接',                  link: '/zh/components/link' },
        { text: 'Menu 菜单',                  link: '/zh/components/menu' },
        { text: 'DropdownMenu 下拉菜单',      link: '/zh/components/dropdown-menu' },
        { text: 'DropdownList 下拉列表',      link: '/zh/components/dropdown-list' },
        { text: 'Vtabs 纵向标签页',           link: '/zh/components/vtabs' },
        { text: 'SegmentedControl 分段控制',  link: '/zh/components/segmented-control' },
        { text: 'IndexList 索引列表',         link: '/zh/components/index-list' },
        { text: 'Loadmore 加载更多',          link: '/zh/components/loadmore' },
        { text: 'Sticky 粘性定位',            link: '/zh/components/sticky' },
        { text: 'SwipeAction 滑动操作',       link: '/zh/components/swipe-action' },
        { text: 'Fab 浮动按钮',               link: '/zh/components/fab' },
      ],
    },
    {
      text: '弹层组件 Overlay (13)',
      collapsed: true,
      items: [
        { text: 'Backdrop 遮罩层',       link: '/zh/components/backdrop' },
        { text: 'ActionSheet 操作面板',   link: '/zh/components/action-sheet' },
        { text: 'Dialog 对话框',          link: '/zh/components/dialog' },
        { text: 'Drawer 抽屉',           link: '/zh/components/drawer' },
        { text: 'Popup 弹出层',          link: '/zh/components/popup' },
        { text: 'Modal 模态框',          link: '/zh/components/modal' },
        { text: 'BottomPopup 底部弹层',  link: '/zh/components/bottom-popup' },
        { text: 'TopPopup 顶部弹层',     link: '/zh/components/top-popup' },
        { text: 'Gallery 图片浏览',      link: '/zh/components/gallery' },
        { text: 'Landscape 横屏弹层',    link: '/zh/components/landscape' },
        { text: 'FilterDrawer 筛选抽屉', link: '/zh/components/filter-drawer' },
        { text: 'BubbleBox 气泡框',      link: '/zh/components/bubble-box' },
        { text: 'ShareSheet 分享面板',   link: '/zh/components/share-sheet' },
      ],
    },
    {
      text: '布局组件 Layout (16)',
      collapsed: true,
      items: [
        { text: 'Layout 整体布局',             link: '/zh/components/layout' },
        { text: 'Grid 宫格',                   link: '/zh/components/grid' },
        { text: 'GridItem 宫格项',             link: '/zh/components/grid-item' },
        { text: 'Card 卡片',                   link: '/zh/components/card' },
        { text: 'Row 行容器',                  link: '/zh/components/row' },
        { text: 'Col 列容器',                  link: '/zh/components/col' },
        { text: 'Collapse 折叠面板',           link: '/zh/components/collapse' },
        { text: 'CollapseItem 折叠面板项',     link: '/zh/components/collapse-item' },
        { text: 'Empty 空状态',                link: '/zh/components/empty' },
        { text: 'Panel 面板',                  link: '/zh/components/panel' },
        { text: 'MovableView 可拖拽视图',      link: '/zh/components/movable-view' },
        { text: 'Preview 预览',                link: '/zh/components/preview' },
        { text: 'HorizontalScroll 横向滚动',   link: '/zh/components/horizontal-scroll' },
        { text: 'BackgroundImage 背景图',      link: '/zh/components/background-image' },
        { text: 'BannerArc 弧形横幅',         link: '/zh/components/banner-arc' },
        { text: 'Waterfall 瀑布流',            link: '/zh/components/waterfall' },
      ],
    },
    {
      text: '动效组件 Motion (4)',
      collapsed: true,
      items: [
        { text: 'Animation 动画容器',       link: '/zh/components/animation' },
        { text: 'Lottie 动画',              link: '/zh/components/lottie' },
        { text: 'DigitalRoller 数字滚轮',   link: '/zh/components/digital-roller' },
        { text: 'CubicBezier 贝塞尔曲线',   link: '/zh/components/cubic-bezier' },
      ],
    },
    {
      text: '画布组件 Canvas (4)',
      collapsed: true,
      items: [
        { text: 'Poster 海报生成',    link: '/zh/components/poster' },
        { text: 'Qrcode 二维码',      link: '/zh/components/qrcode' },
        { text: 'Barcode 条形码',     link: '/zh/components/barcode' },
        { text: 'Autograph 手写签名', link: '/zh/components/autograph' },
      ],
    },
    {
      text: '工具组件 Utility (13)',
      collapsed: true,
      items: [
        { text: 'StatusBar 状态栏',            link: '/zh/components/status-bar' },
        { text: 'WhiteSpace 垂直留白',         link: '/zh/components/white-space' },
        { text: 'WingBlank 水平留白',          link: '/zh/components/wing-blank' },
        { text: 'Css CSS注入',                 link: '/zh/components/css' },
        { text: 'ThemeToggle 主题切换',        link: '/zh/components/theme-toggle' },
        { text: 'CopyText 复制文本',           link: '/zh/components/copy-text' },
        { text: 'Backtop 回到顶部',            link: '/zh/components/backtop' },
        { text: 'SafeArea 安全区域',           link: '/zh/components/safe-area' },
        { text: 'Lazyload 懒加载',             link: '/zh/components/lazyload' },
        { text: 'Timer 定时器',                link: '/zh/components/timer' },
        { text: 'CountdownVerify 验证码倒计时', link: '/zh/components/countdown-verify' },
        { text: 'Parse 富文本解析',             link: '/zh/components/parse' },
        { text: 'OverflowHidden 溢出隐藏',     link: '/zh/components/overflow-hidden' },
      ],
    },
    {
      text: '扩展组件 Extended (8)',
      collapsed: true,
      items: [
        { text: 'FilterBar 筛选栏',          link: '/zh/components/filter-bar' },
        { text: 'SlideVerify 滑动验证',      link: '/zh/components/slide-verify' },
        { text: 'RotateVerify 旋转验证',     link: '/zh/components/rotate-verify' },
        { text: 'SliderCaptcha 滑块验证码',  link: '/zh/components/slider-captcha' },
        { text: 'PuzzleVerify 拼图验证',     link: '/zh/components/puzzle-verify' },
        { text: 'ImageCropper 图片裁剪',     link: '/zh/components/image-cropper' },
        { text: 'Drag 拖拽排序',             link: '/zh/components/drag' },
        { text: 'TableWeex Weex表格',        link: '/zh/components/table-weex' },
      ],
    },
    {
      text: '实验组件 Experimental (5)',
      collapsed: true,
      items: [
        { text: 'GestureHandler 手势处理',  link: '/zh/components/gesture-handler' },
        { text: 'VirtualList 虚拟列表',     link: '/zh/components/virtual-list' },
        { text: 'Skeleton3D 3D骨架屏',      link: '/zh/components/skeleton-3d' },
        { text: 'VoiceInput 语音输入',      link: '/zh/components/voice-input' },
        { text: 'AIAssist AI辅助',          link: '/zh/components/ai-assist' },
      ],
    },
    {
      text: '系统组件 System (6)',
      collapsed: true,
      items: [
        { text: 'Notification 系统通知',  link: '/zh/components/notification' },
        { text: 'Auth 认证授权',          link: '/zh/components/auth' },
        { text: 'Permission 权限控制',    link: '/zh/components/permission' },
        { text: 'Logger 日志记录',        link: '/zh/components/logger' },
        { text: 'Settings 系统设置',      link: '/zh/components/settings' },
        { text: 'Updater 版本更新',       link: '/zh/components/updater' },
      ],
    },
  ],
}

// 繁体中文侧边栏
const zhTWSidebar = {
  '/zh-HK/guide/': [
    {
      text: '開始使用',
      collapsed: false,
      items: [
        { text: '介紹',     link: '/zh-HK/guide/introduction' },
        { text: '快速上手', link: '/zh-HK/guide/getting-started' },
        { text: '安裝',     link: '/zh-HK/guide/installation' },
        { text: '更新日誌', link: '/zh-HK/guide/changelog' },
      ],
    },
    {
      text: '設計基礎',
      collapsed: false,
      items: [
        { text: 'Design Tokens', link: '/zh-HK/guide/tokens' },
        { text: '顏色系統',     link: '/zh-HK/guide/colors' },
        { text: '字體規範',     link: '/zh-HK/guide/typography' },
        { text: '間距規範',     link: '/zh-HK/guide/spacing' },
        { text: '主題系統',     link: '/zh-HK/guide/theming' },
      ],
    },
  ],
  '/zh-HK/components/': [
    {
      text: '元件概覽',
      collapsed: false,
      items: [
        { text: '元件概覽',      link: '/zh-HK/components/overview' },
      ],
    },
    {
      text: '基礎元件 Basic (25)',
      collapsed: true,
      items: [
        { text: 'Button 按鈕',        link: '/zh-HK/components/button' },
        { text: 'Icon 圖示',          link: '/zh-HK/components/icon' },
        { text: 'Text 文字',          link: '/zh-HK/components/text' },
        { text: 'Color 顏色',         link: '/zh-HK/components/color' },
        { text: 'Number 數字',        link: '/zh-HK/components/number' },
        { text: 'Heading 標題',       link: '/zh-HK/components/heading' },
        { text: 'Image 圖片',         link: '/zh-HK/components/image' },
      ],
    },
    {
      text: '展示元件 Display (16)',
      collapsed: true,
      items: [
        { text: 'Badge 徽標',     link: '/zh-HK/components/badge' },
        { text: 'Tag 標籤',       link: '/zh-HK/components/tag' },
        { text: 'Avatar 頭像',    link: '/zh-HK/components/avatar' },
        { text: 'Skeleton 骨架屏', link: '/zh-HK/components/skeleton' },
        { text: 'NoticeBar 通知欄', link: '/zh-HK/components/notice-bar' },
        { text: 'Result 結果頁',   link: '/zh-HK/components/result' },
      ],
    },
    {
      text: '表單元件 Form (24)',
      collapsed: true,
      items: [
        { text: 'Input 輸入框',    link: '/zh-HK/components/input' },
        { text: 'Select 下拉選擇', link: '/zh-HK/components/select' },
        { text: 'Switch 開關',     link: '/zh-HK/components/switch' },
        { text: 'Radio 單選',      link: '/zh-HK/components/radio' },
        { text: 'Checkbox 多選',   link: '/zh-HK/components/checkbox' },
      ],
    },
    {
      text: '數據元件 Data (7)',
      collapsed: true,
      items: [
        { text: 'List 列表',       link: '/zh-HK/components/list' },
        { text: 'Table 表格',      link: '/zh-HK/components/table' },
        { text: 'Pagination 分頁', link: '/zh-HK/components/pagination' },
      ],
    },
    {
      text: '操作反饋 Feedback (6)',
      collapsed: true,
      items: [
        { text: 'Modal 彈窗',   link: '/zh-HK/components/modal' },
        { text: 'Loading 加載', link: '/zh-HK/components/loading' },
        { text: 'Message 消息', link: '/zh-HK/components/message' },
      ],
    },
    {
      text: '導航元件 Navigation (18)',
      collapsed: true,
      items: [
        { text: 'NavBar 導航欄',   link: '/zh-HK/components/nav-bar' },
        { text: 'Tab 標籤頁',      link: '/zh-HK/components/tab' },
        { text: 'Tabbar 底部標籤欄', link: '/zh-HK/components/tabbar' },
        { text: 'Steps 步驟條',     link: '/zh-HK/components/steps' },
      ],
    },
    {
      text: '彈層元件 Overlay (13)',
      collapsed: true,
      items: [
        { text: 'Dialog 對話框',  link: '/zh-HK/components/dialog' },
        { text: 'Popup 彈出層',   link: '/zh-HK/components/popup' },
        { text: 'Drawer 抽屜',    link: '/zh-HK/components/drawer' },
      ],
    },
    {
      text: '佈局元件 Layout (16)',
      collapsed: true,
      items: [
        { text: 'Layout 佈局',  link: '/zh-HK/components/layout' },
        { text: 'Grid 柵格',    link: '/zh-HK/components/grid' },
        { text: 'Card 卡片',    link: '/zh-HK/components/card' },
      ],
    },
    {
      text: '動效 Motion (4)',   collapsed: true, items: [
        { text: 'Animation 動畫', link: '/zh-HK/components/animation' },
        { text: 'Lottie 動畫',    link: '/zh-HK/components/lottie' },
      ],
    },
    {
      text: '畫布 Canvas (4)',   collapsed: true, items: [
        { text: 'Qrcode 二維碼',  link: '/zh-HK/components/qrcode' },
        { text: 'Poster 海報',    link: '/zh-HK/components/poster' },
      ],
    },
    {
      text: '工具 Utility (13)',  collapsed: true, items: [
        { text: 'ThemeToggle 主題切換', link: '/zh-HK/components/theme-toggle' },
        { text: 'SafeArea 安全區域',    link: '/zh-HK/components/safe-area' },
      ],
    },
    {
      text: '擴展 Extended (8)',       collapsed: true, items: [
        { text: 'ImageCropper 圖片裁剪', link: '/zh-HK/components/image-cropper' },
      ],
    },
    {
      text: '實驗 Experimental (5)',   collapsed: true, items: [
        { text: 'VirtualList 虛擬列表', link: '/zh-HK/components/virtual-list' },
      ],
    },
    {
      text: '系統 System (6)',         collapsed: true, items: [
        { text: 'Settings 系統設定', link: '/zh-HK/components/settings' },
      ],
    },
  ],
}

// 英文侧边栏
const enSidebar = {
  '/en/guide/': [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction',  link: '/en/guide/introduction' },
        { text: 'Quick Start',   link: '/en/guide/getting-started' },
        { text: 'Installation',  link: '/en/guide/installation' },
        { text: 'Changelog',     link: '/en/guide/changelog' },
      ],
    },
    {
      text: 'Design',
      collapsed: false,
      items: [
        { text: 'Design Tokens', link: '/en/guide/tokens' },
        { text: 'Colors',        link: '/en/guide/colors' },
        { text: 'Typography',    link: '/en/guide/typography' },
        { text: 'Spacing',       link: '/en/guide/spacing' },
        { text: 'Theming',       link: '/en/guide/theming' },
      ],
    },
    {
      text: 'Architecture',
      collapsed: false,
      items: [
        { text: 'Overview',       link: '/en/guide/architecture' },
        { text: 'Composables',    link: '/en/guide/composables' },
        { text: 'Directives',     link: '/en/guide/directives' },
        { text: 'Utils',          link: '/en/guide/utils' },
      ],
    },
  ],
  '/en/components/': [
    {
      text: 'Overview',
      collapsed: false,
      items: [
        { text: 'Overview',     link: '/en/components/overview' },
      ],
    },
    {
      text: 'Basic (25)',
      collapsed: true,
      items: [
        { text: 'Button',       link: '/en/components/button' },
        { text: 'Icon',         link: '/en/components/icon' },
        { text: 'Text',         link: '/en/components/text' },
        { text: 'Color',        link: '/en/components/color' },
        { text: 'Number',       link: '/en/components/number' },
        { text: 'Heading',      link: '/en/components/heading' },
        { text: 'Image',        link: '/en/components/image' },
      ],
    },
    {
      text: 'Display (16)',
      collapsed: true,
      items: [
        { text: 'Badge',        link: '/en/components/badge' },
        { text: 'Tag',          link: '/en/components/tag' },
        { text: 'Avatar',       link: '/en/components/avatar' },
        { text: 'Skeleton',     link: '/en/components/skeleton' },
        { text: 'NoticeBar',    link: '/en/components/notice-bar' },
        { text: 'Result',       link: '/en/components/result' },
      ],
    },
    {
      text: 'Form (24)',
      collapsed: true,
      items: [
        { text: 'Input',        link: '/en/components/input' },
        { text: 'Select',       link: '/en/components/select' },
        { text: 'Switch',       link: '/en/components/switch' },
        { text: 'Radio',        link: '/en/components/radio' },
        { text: 'Checkbox',     link: '/en/components/checkbox' },
      ],
    },
    {
      text: 'Data (7)',
      collapsed: true,
      items: [
        { text: 'List',         link: '/en/components/list' },
        { text: 'Table',        link: '/en/components/table' },
        { text: 'Pagination',   link: '/en/components/pagination' },
      ],
    },
    {
      text: 'Feedback (6)',
      collapsed: true,
      items: [
        { text: 'Modal',        link: '/en/components/modal' },
        { text: 'Loading',      link: '/en/components/loading' },
        { text: 'Message',      link: '/en/components/message' },
      ],
    },
    {
      text: 'Navigation (18)',
      collapsed: true,
      items: [
        { text: 'Tab',          link: '/en/components/tab' },
        { text: 'NavBar',       link: '/en/components/nav-bar' },
        { text: 'Steps',        link: '/en/components/steps' },
      ],
    },
    {
      text: 'Overlay (13)',
      collapsed: true,
      items: [
        { text: 'Dialog',       link: '/en/components/dialog' },
        { text: 'Popup',        link: '/en/components/popup' },
        { text: 'Drawer',       link: '/en/components/drawer' },
      ],
    },
    {
      text: 'Layout (16)',
      collapsed: true,
      items: [
        { text: 'Layout',       link: '/en/components/layout' },
        { text: 'Grid',         link: '/en/components/grid' },
        { text: 'Card',         link: '/en/components/card' },
      ],
    },
    { text: 'Motion (4)',       collapsed: true, items: [
        { text: 'Animation',   link: '/en/components/animation' },
    ]},
    { text: 'Canvas (4)',       collapsed: true, items: [
        { text: 'Qrcode',     link: '/en/components/qrcode' },
    ]},
    { text: 'Utility (13)',     collapsed: true, items: [
        { text: 'ThemeToggle', link: '/en/components/theme-toggle' },
        { text: 'SearchBar',   link: '/en/components/search-bar' },
    ]},
    { text: 'Extended (8)',     collapsed: true, items: [
        { text: 'ImageCropper', link: '/en/components/image-cropper' },
    ]},
    { text: 'Experimental (5)', collapsed: true, items: [
        { text: 'VirtualList',  link: '/en/components/virtual-list' },
    ]},
    { text: 'System (6)',       collapsed: true, items: [
        { text: 'Settings',     link: '/en/components/settings' },
    ]},
  ],
}

export default defineConfig({
  title: 'Parrot UI',
  description: '基于 uni-app X 的跨终端组件库',

  // 根路径重定向到简体中文
  rewrites: {
    'zh/:rest*': ':rest*',
  },

  // 多语言配置
  locales: {
    root: {
      label: '🇨🇳 简体中文',
      lang: 'zh-CN',
      title: 'Parrot UI',
      description: '基于 uni-app X 的跨终端组件库，支持 Android / iOS / 鸿蒙 / 微信小程序 / Web',
      themeConfig: {
        nav: [
          { text: '指南',           link: '/guide/introduction',   activeMatch: '/guide/' },
          { text: '组件',           link: '/components/overview#组件概览',    activeMatch: '/components/' },
          { text: '架构',           link: '/guide/architecture' },
          { text: '更新日志',       link: '/guide/changelog' },
        ],
        sidebar: {
          '/guide/': zhSidebar['/zh/guide/'].map(g => ({
            ...g,
            items: g.items.map(i => ({ ...i, link: i.link.replace('/zh/', '/') })),
          })),
          '/components/': zhSidebar['/zh/components/'].map(g => ({
            ...g,
            items: g.items.map(i => ({ ...i, link: i.link.replace('/zh/', '/') })),
          })),
        },
        outline:             { level: [2, 3], label: '本页目录' },
        sidebarMenuLabel:    '目录',
        returnToTopLabel:    '返回顶部',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换至亮色模式',
        darkModeSwitchTitle:  '切换至暗色模式',
        editLink: {
          pattern: 'https://github.com/parrotui/parrotui/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        lastUpdated: { text: '最后更新' },
        docFooter: { prev: '上一页', next: '下一页' },
      },
    },

    'zh-HK': {
      label: '🇭🇰 繁體中文',
      lang: 'zh-HK',
      title: 'Parrot UI',
      description: '基於 uni-app X 的跨終端元件庫',
      themeConfig: {
        nav: [
          { text: '指南',           link: '/zh-HK/guide/introduction',   activeMatch: '/zh-HK/guide/' },
          { text: '元件',           link: '/zh-HK/components/overview#元件概覽',    activeMatch: '/zh-HK/components/' },
          { text: '架構',           link: '/zh-HK/guide/architecture' },
          { text: '更新日誌',       link: '/zh-HK/guide/changelog' },
        ],
        sidebar: zhTWSidebar,
        outline:             { level: [2, 3], label: '本頁目錄' },
        sidebarMenuLabel:    '目錄',
        returnToTopLabel:    '返回頂部',
        darkModeSwitchLabel: '外觀',
        lightModeSwitchTitle: '切換至亮色模式',
        darkModeSwitchTitle:  '切換至暗色模式',
        editLink: {
          pattern: 'https://github.com/parrotui/parrotui/edit/main/docs/:path',
          text: '在 GitHub 上編輯此頁',
        },
        lastUpdated: { text: '最後更新' },
        docFooter: { prev: '上一頁', next: '下一頁' },
      },
    },

    en: {
      label: '🇺🇸 English',
      lang: 'en-US',
      title: 'Parrot UI',
      description: 'Cross-platform component library based on uni-app X',
      themeConfig: {
        nav: [
          { text: 'Guide',          link: '/en/guide/introduction',  activeMatch: '/en/guide/' },
          { text: 'Components',     link: '/en/components/overview#overview',   activeMatch: '/en/components/' },
          { text: 'Architecture',   link: '/en/guide/architecture' },
          { text: 'Changelog',      link: '/en/guide/changelog' },
        ],
        sidebar: enSidebar,
        outline:             { level: [2, 3], label: 'On this page' },
        sidebarMenuLabel:    'Menu',
        returnToTopLabel:    'Return to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle:  'Switch to dark mode',
        editLink: {
          pattern: 'https://github.com/parrotui/parrotui/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
      },
    },
  },

  // 基础路径
  base: '/',

  // 共享主题配置
  themeConfig: {
    logo: '/icon.svg',
    siteTitle: 'Parrot UI',

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/parrotui/parrotui' },
      { icon: { svg: weiboSvg }, link: 'https://weibo.com/parrotui', target: '_blank' },
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Parrot UI Contributors',
    },

    // 搜索
    search: { provider: 'local' },
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
  },

  // Head 注入
  head: [
    ['link', { rel: 'icon',             href: '/favicon.ico' }],
    ['link', { rel: 'icon',             href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }],
    ['link', { rel: 'icon',             href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest',         href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color',     content: '#1a7eff' }],
    ['meta', { property: 'og:type',        content: 'website' }],
    ['meta', { property: 'og:title',       content: 'Parrot UI' }],
    ['meta', { property: 'og:description', content: '基于 uni-app X 的跨终端组件库' }],
    ['meta', { property: 'og:url',         content: 'https://doc.parrotui.com' }],
    ['meta', { property: 'og:image',       content: 'https://doc.parrotui.com/android-chrome-512x512.png' }],
  ],
})
