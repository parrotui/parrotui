# Design Tokens

Design Tokens 是 Parrot UI 设计系统的基础，定义了颜色、字体、间距、阴影等所有视觉原子值。

## 颜色 Colors

### 品牌色 Brand

| Token | 值 | 预览 |
|-------|-----|------|
| `primary50`  | `#ecf5ff` | <span style="display:inline-block;width:24px;height:24px;background:#ecf5ff;border:1px solid #ddd;border-radius:4px"></span> |
| `primary500` | `#1a7eff` | <span style="display:inline-block;width:24px;height:24px;background:#1a7eff;border-radius:4px"></span> |
| `primary600` | `#0065e6` | <span style="display:inline-block;width:24px;height:24px;background:#0065e6;border-radius:4px"></span> |

### 功能色 Semantic

| Token | 值 | 含义 |
|-------|-----|------|
| `success500` | `#41a906` | 成功/正常 |
| `warning500` | `#e6a23c` | 警告/注意 |
| `danger500`  | `#f56c6c` | 错误/危险 |
| `info500`    | `#6c6f78` | 信息/中性 |

### CSS 变量使用

```css
.my-button {
  background-color: var(--pui-primary);
  color: #fff;
  border-radius: var(--pui-radius-base);
  padding: var(--pui-spacing-4) var(--pui-spacing-6);
}
```

## 字体 Typography

| Token | rpx | px 等效 | 用途 |
|-------|-----|---------|------|
| `font-xs`   | 20rpx | 10px | 辅助文字、提示 |
| `font-sm`   | 22rpx | 11px | 小号说明文字 |
| `font-base` | 28rpx | 14px | **默认正文** |
| `font-md`   | 30rpx | 15px | 稍大正文 |
| `font-lg`   | 32rpx | 16px | 重要内容 |
| `font-xl`   | 36rpx | 18px | 小标题 |
| `font-2xl`  | 40rpx | 20px | 标题 |
| `font-3xl`  | 48rpx | 24px | 大标题 |

## 间距 Spacing

基于 **4rpx 基准网格**（4px 等效）：

| Token | 值 | px 等效 |
|-------|-----|---------|
| `spacing-1` | 4rpx  | 2px  |
| `spacing-2` | 8rpx  | 4px  |
| `spacing-3` | 12rpx | 6px  |
| `spacing-4` | 16rpx | 8px  |
| `spacing-5` | 20rpx | 10px |
| `spacing-6` | 24rpx | 12px |
| `spacing-8` | 32rpx | 16px |

## 圆角 Radius

| Token | 值 | 用途 |
|-------|-----|------|
| `radius-sm`   | 4rpx | 标签、小元素 |
| `radius-base` | 8rpx | **默认** |
| `radius-md`   | 12rpx | 卡片 |
| `radius-lg`   | 16rpx | 弹窗 |
| `radius-xl`   | 24rpx | 大圆角 |
| `radius-full` | 9999rpx | 胶囊/圆形 |

## 阴影 Shadows

| Token | 值 | 用途 |
|-------|-----|------|
| `shadow-xs`   | `0 1px 2px rgba(0,0,0,0.05)` | 微弱提升 |
| `shadow-sm`   | `0 1px 6px rgba(0,0,0,0.08)` | 按钮 |
| `shadow-base` | `0 2px 12px rgba(0,0,0,0.10)` | **默认卡片** |
| `shadow-md`   | `0 4px 16px rgba(0,0,0,0.12)` | 弹出层 |
| `shadow-lg`   | `0 8px 24px rgba(0,0,0,0.14)` | 模态框 |

## TypeScript 中使用 Tokens

```typescript
import { colors, spacing, fontSize, shadows } from '@parrotui/core/tokens'

// 获取颜色值
const primaryColor = colors.primary500  // '#1a7eff'

// 获取间距值
const normalPadding = spacing[4]        // '16rpx'
```
