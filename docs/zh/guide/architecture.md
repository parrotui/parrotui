# 架构概览

Parrot UI 采用 Monorepo 架构，核心包 `@parrotui/core` 统一导出所有组件及基础设施。

## 整体架构

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

## 设计原则

| 原则 | 说明 |
|------|------|
| **Token 驱动** | 所有颜色、间距、字体、阴影均由设计令牌统一管理，确保视觉一致性 |
| **BEM 命名** | CSS 类名统一使用 `parrot-` 前缀 + BEM 规范 |
| **rpx 响应式** | 使用 rpx 单位实现跨平台屏幕适配 |
| **Composition API** | 所有组件使用 `<script setup lang="uts">` |
| **按需导出** | 通过 index.ts 统一导出，支持 Tree-shaking |
| **14 分类体系** | 组件按职责划分为 14 个物理分类，结构清晰 |

## 目录结构

```
packages/parrotui-core/
├── index.ts                    # 统一导出入口（165 组件 + API）
├── components/                 # 14 分类组件目录
│   ├── basic/          (25)    # 基础组件
│   ├── display/        (16)    # 展示组件
│   ├── form/           (24)    # 表单组件
│   ├── data/            (7)    # 数据组件
│   ├── feedback/        (6)    # 操作反馈
│   ├── navigation/     (18)    # 导航组件
│   ├── overlay/        (13)    # 弹层组件
│   ├── layout/         (16)    # 布局组件
│   ├── motion/          (4)    # 动效组件
│   ├── canvas/          (4)    # 画布组件
│   ├── utility/        (13)    # 工具组件
│   ├── extended/        (8)    # 扩展组件
│   ├── experimental/    (5)    # 实验组件
│   └── system/          (6)    # 系统组件
├── composables/                # 组合式 API
│   ├── useColor.ts             # 颜色访问
│   ├── useResponsive.ts        # 响应式检测
│   ├── useLocale.ts            # 国际化
│   └── useTheme.ts             # 主题管理
├── directives/                 # 指令工具
│   ├── vcopy.ts                # 剪贴板
│   ├── vloading.ts             # 加载状态
│   └── vpermission.ts          # 权限控制
├── utils/                      # 工具函数
│   ├── color.ts                # 颜色操作
│   ├── dom.ts                  # DOM 查询
│   ├── event.ts                # 事件总线
│   └── validator.ts            # 表单验证
├── tokens/                     # 设计令牌
│   ├── colors.ts               # 7 色系 × 10 级
│   ├── spacing.ts              # 间距规范
│   ├── typography.ts           # 字体规范
│   └── shadows.ts              # 阴影规范
├── theme/                      # 主题配置
│   ├── index.ts                # ThemeConfig 接口
│   ├── light.ts                # 亮色主题
│   ├── dark.ts                 # 暗色主题
│   └── adminTheme.ts           # 后台管理预设
└── styles/                     # 全局样式
    ├── variables.css           # CSS 变量（色值 + 语义）
    ├── base.css                # 140+ 工具类
    ├── animations.css          # 16 个动画关键帧
    └── reset.css               # 样式重置
```

## 14 分类体系

组件按照功能职责划分为 14 个物理分类，每个分类有独立的目录：

| 分类 | 数量 | 职责说明 |
|------|------|----------|
| **basic** | 25 | 最基础的 UI 原子：按钮、文本、图标、数字显示等 |
| **display** | 16 | 信息展示：头像、徽标、标签、骨架屏、卡片等 |
| **form** | 24 | 数据录入：输入框、选择器、日期、上传、表单等 |
| **data** | 7 | 数据展示：列表、表格、分页、进度、倒计时 |
| **feedback** | 6 | 操作反馈：消息提示、加载状态、警告 |
| **navigation** | 18 | 导航导引：导航栏、标签页、步骤条、菜单等 |
| **overlay** | 13 | 弹出浮层：对话框、抽屉、弹出层、操作面板 |
| **layout** | 16 | 页面布局：栅格、卡片、折叠面板、瀑布流等 |
| **motion** | 4 | 动效组件：Lottie、数字滚轮、贝塞尔曲线 |
| **canvas** | 4 | 画布能力：海报、二维码、条形码、签名 |
| **utility** | 13 | 辅助工具：状态栏、留白、懒加载、回到顶部等 |
| **extended** | 8 | 业务增强：筛选栏、验证码、图片裁剪、拖拽 |
| **experimental** | 5 | 实验性功能：虚拟列表、手势、语音、AI |
| **system** | 6 | 系统级功能：通知、权限、日志、更新检测 |

## 组件命名规范

每个组件遵循以下约定：

- **目录名**：PascalCase（如 `Button/`、`InputNumber/`）
- **文件名**：kebab-case + parrot 前缀（如 `parrot-button.uvue`）
- **导出名**：Parrot + PascalCase（如 `ParrotButton`）
- **模板标签**：kebab-case（如 `<parrot-button />`）

## 技术栈

- **框架**：Vue 3 + Composition API
- **运行时**：uni-app X (UTS)
- **类型**：TypeScript strict mode
- **样式**：CSS + rpx 单位
- **构建**：VitePress (文档) + pnpm workspace (Monorepo)
- **部署**：GitHub Actions + GitHub Pages
