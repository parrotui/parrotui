# Parrot UI

**基于 uni-app X 的跨端移动端组件库 · MIT 开源 · 欢迎共建**

Parrot UI 是一套基于 uni-app X 的移动端组件库，支持 Android、iOS、鸿蒙、微信小程序、H5 等多端统一运行。
采用 Vue3 + Composition API + UTS 构建，提供完整的设计 Token 系统、亮暗主题切换、国际化支持。

> 开源、开放、共建 —— 欢迎任何人使用、贡献和扩展 Parrot UI 生态。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![uni-app X](https://img.shields.io/badge/uni--app%20X-supported-green.svg)](https://uniapp.dcloud.net.cn/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/parrotui/parrotui/pulls)

## 快速开始

### 安装

```javascript
// 在项目中导入组件库
import * as ParrotUI from '@/components/parrotui/index'

// 或者按需导入
import { ParrotButton, ParrotIcon } from '@/components/parrotui/index'
```

### 基础使用

```vue
<template>
  <view class="container">
    <!-- 使用按钮组件 -->
    <parrot-button 
      type="primary" 
      text="点击我" 
      @click="handleClick"
    />
    
    <!-- 使用图标组件 -->
    <parrot-icon name="heart" size="24" color="#ff0000" />
    
    <!-- 使用主题切换 -->
    <parrot-theme-toggle @change="handleThemeChange" />
  </view>
</template>

<script setup>
import { ParrotButton, ParrotIcon, ParrotThemeToggle } from '@/components/parrotui/index'

const handleClick = () => {
  console.log('按钮被点击')
}

const handleThemeChange = (mode) => {
  console.log('主题切换到:', mode)
}
</script>
```

## 主题系统

### 颜色管理

Parrot UI 内置了完整的主题管理系统：

```javascript
import parrotColor from '@/components/parrotui/packages/parrotui-utils/color/color-manager.uts'

// 获取当前主题颜色
const primaryColor = parrotColor.getColor('primary')

// 切换主题模式
parrotColor.toggleMode()

// 监听主题变化
const unsubscribe = parrotColor.onThemeChange((theme, mode) => {
  console.log('主题已切换:', mode)
})

// 组件销毁时记得取消监听
// unsubscribe()
```

### CSS 变量使用

```scss
.my-component {
  background-color: var(--parrot-primary);
  color: var(--parrot-text);
  border: 1px solid var(--parrot-border);
}
```

## 组件列表

### 基础组件
- `ParrotButton` - 按钮组件
- `ParrotIcon` - 图标组件
- `ParrotText` - 文本组件
- `ParrotColor` - 颜色组件
- `ParrotNumber` - 数字组件
- `ParrotFooter` - 页脚组件

### 布局组件
- `ParrotLayout` - 栅格布局
- `ParrotGrid` - 宫格布局
- `ParrotCard` - 卡片组件

### 导航组件
- `ParrotThemeToggle` - 主题切换开关

## 主题定制

### 自定义主题

```javascript
// 自定义浅色主题
parrotColor.updateTheme({
  primary: '#custom-color',
  success: '#custom-success',
  // ... 其他颜色
}, 'light')

// 自定义深色主题
parrotColor.updateTheme({
  primary: '#dark-custom-color',
  success: '#dark-custom-success',
  // ... 其他颜色
}, 'dark')
```

### 使用自定义主题

```javascript
// 设置自定义主题
parrotColor.setCustomTheme('my-theme', {
  primary: '#ff6b6b',
  success: '#51cf66',
  // ... 完整的主题配置
})

// 使用自定义主题
parrotColor.useCustomTheme('my-theme')
```

## 样式系统

### 工具类

Parrot UI 提供了丰富的 CSS 工具类：

```html
<!-- 间距工具类 -->
<view class="parrot-m-4 parrot-p-2">内容</view>

<!-- 颜色工具类 -->
<view class="parrot-bg-primary parrot-text-white">内容</view>

<!-- 布局工具类 -->
<view class="parrot-flex parrot-justify-center parrot-align-center">内容</view>
```

### 响应式设计

```scss
// 支持不同屏幕尺寸
.parrot-container {
  width: 100%;
  max-width: 750rpx; // 适配移动端
  margin: 0 auto;
}
```

## 最佳实践

### 性能优化

1. **按需导入**：只导入需要的组件
2. **合理使用**：避免过度嵌套组件
3. **主题缓存**：利用本地存储缓存用户主题偏好

### 兼容性

- 支持 iOS 10+ / Android 5.0+
- 支持微信小程序、支付宝小程序等
- 支持 H5 浏览器
- 支持鸿蒙系统

### 注意事项

1. 所有组件都使用 `rpx` 单位，自动适配不同屏幕密度
2. 主题切换会有 0.3s 的过渡动画
3. 深色模式会自动跟随系统设置
4. 组件样式支持安全区域适配

## 开发指南

### 组件开发规范

```vue
<template>
  <view 
    class="parrot-component"
    :class="componentClass"
    :style="componentStyle"
  >
    <!-- 组件内容 -->
  </view>
</template>

<script setup lang="uts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

// 定义 props
interface Props {
  // 组件属性
}

// 默认 props
const props = withDefaults(defineProps<Props>(), {
  // 默认值
})

// 定义 emits
const emit = defineEmits<{
  // 事件定义
}>()

// 计算属性
const componentClass = computed(() => {
  // 返回类名数组
})

const componentStyle = computed(() => {
  // 返回样式对象
})
</script>

<style lang="scss">
.parrot-component {
  // 组件样式
}
</style>
```

## 贡献指南

Parrot UI 是一个完全开放的社区项目，欢迎所有人参与共建！

- 🐛 **提交 Bug**：[Issues](https://github.com/parrotui/parrotui/issues)
- 💡 **功能建议**：欢迎在 Issues 中提出想法
- 🔧 **提交代码**：Fork → 开发 → Pull Request
- 📖 **完善文档**：文档同样欢迎 PR
- 🌍 **国际化**：欢迎贡献更多语言包

提交 PR 前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 社区

- GitHub：[github.com/parrotui/parrotui](https://github.com/parrotui/parrotui)
- Issues：[提交问题或建议](https://github.com/parrotui/parrotui/issues)

## License

[MIT](./LICENSE) © Parrot UI Contributors