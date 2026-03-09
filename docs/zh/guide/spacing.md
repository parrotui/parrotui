# 间距规范

Parrot UI 的间距系统通过 `tokens/spacing.ts` 定义，使用 rpx 单位确保跨平台一致性。

## 间距令牌

| 令牌 | 值 | 用途 |
|------|-----|------|
| `xs` | 8rpx | 紧凑间距、图标与文本间距 |
| `sm` | 16rpx | 小间距、列表项内间距 |
| `md` | 24rpx | 默认间距、卡片内边距 |
| `lg` | 32rpx | 大间距、区域分隔 |
| `xl` | 48rpx | 特大间距、页面级分隔 |
| `xxl` | 64rpx | 超大间距、首屏留白 |

## CSS 工具类

base.css 提供以 `parrot-` 为前缀的间距工具类：

### 外边距 (margin)

```
parrot-m-0   parrot-m-1   parrot-m-2   parrot-m-4   parrot-m-6   parrot-m-8
parrot-mt-*  parrot-mr-*  parrot-mb-*  parrot-ml-*
parrot-mx-*  parrot-my-*
```

### 内边距 (padding)

```
parrot-p-0   parrot-p-1   parrot-p-2   parrot-p-4   parrot-p-6   parrot-p-8
parrot-pt-*  parrot-pr-*  parrot-pb-*  parrot-pl-*
parrot-px-*  parrot-py-*
```

### 数值映射

| 数字 | 值 |
|------|-----|
| 0 | 0 |
| 1 | 8rpx |
| 2 | 16rpx |
| 3 | 24rpx |
| 4 | 32rpx |
| 6 | 48rpx |
| 8 | 64rpx |
| 10 | 80rpx |
| 12 | 96rpx |

### 间隙 (gap)

```
parrot-gap-1  parrot-gap-2  parrot-gap-3  parrot-gap-4
parrot-gap-6  parrot-gap-8
```

## 使用示例

```html
<view class="parrot-p-4 parrot-mb-2">
  <parrot-text text="内边距 32rpx，底部外边距 16rpx" />
</view>

<view class="parrot-flex parrot-gap-2">
  <parrot-button text="按钮1" />
  <parrot-button text="按钮2" />
</view>
```

## 组件间距

组件也可使用 Spacer 组件实现灵活间距：

```vue
<parrot-button text="上方按钮" />
<parrot-spacer size="32" />
<parrot-button text="下方按钮" />
```
