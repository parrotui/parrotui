# 更新日志

## v0.2.0 (2026-03-09)

### 新增

**基础设施**
- 设计令牌系统：7 色系 × 10 级梯度（共 70 个颜色值）
- 颜色工具函数：hexToRgb、rgbToHex、mixColors、withOpacity、contrastColor 等
- CSS 变量系统：variables.css 完整覆盖所有色系和语义颜色
- 亮色/暗色双主题配置

**Composables 组合式 API (4)**
- `useColor` — 运行时颜色访问（10 个方法 + 6 个计算属性）
- `useResponsive` — 屏幕检测与断点判断（5 级断点）
- `useLocale` — 国际化（内置 zh-CN / en-US 70+ 条目）
- `useTheme` — 主题管理（亮/暗/系统 三模式）

**Directives 指令工具 (3)**
- `vcopy` — 剪贴板读写
- `vloading` — 加载状态管理（支持嵌套计数）
- `vpermission` — 权限/角色访问控制

**Utils 工具函数 (4)**
- `color` — 颜色操作（lighten、darken 等）
- `dom` — DOM 查询与页面滚动
- `event` — 事件总线 + debounce/throttle
- `validator` — 表单验证（10 个验证器 + 规则工厂）

**基础组件增强 (6)**
- Button：新增 variant/icon/square/hairline/shadow/longpress
- Text：新增 mode(link/price/phone/name)/level/copyable
- Icon：新增 rotate/animated/flip/badge
- Number：新增 statistic/trend/prefix/suffix
- Color：新增 swatch/theme/opacity
- Footer：新增 variant/safeAreaBottom

**新增基础组件 (19)**
- Heading、Paragraph、Caption、Code、Quote
- Statistic、Counter、Currency、Percentage
- IconButton、ButtonGroup、Chip、Spacer
- Image、Picture、AspectRatio
- RangeSlider、Highlight、SvgIcon

**新增分类组件 (140)**
- display (16)、form (24)、data (7)、feedback (6)
- navigation (18)、overlay (13)、layout (16)、motion (4)
- canvas (4)、utility (13)、extended (8)、experimental (5)、system (6)

**CSS 扩展**
- base.css：新增 140+ 工具类
- animations.css：新增 8 个动画关键帧 + 控制类

**文档**
- VitePress 文档站（三语言：简体/繁体/英文）
- 架构概览、Composables、Directives、Utils 参考文档
- GitHub Pages 自动部署

---

## v0.1.0 (2026-03-08)

### 初始版本

- Monorepo 架构搭建（parrotui-core / parrotui-icons / parrotui-utils / parrotui-cli）
- 6 个基础组件（Button / Icon / Text / Color / Number / Footer）
- useTheme Composable
- VitePress 文档站骨架
- GitHub Actions CI/CD 配置
