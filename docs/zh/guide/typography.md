# 字体规范

Parrot UI 的字体系统通过 `tokens/typography.ts` 定义。

## 字体大小

| 令牌 | 值 | 用途 |
|------|-----|------|
| `xs` | 20rpx | 辅助说明、标注 |
| `sm` | 24rpx | 次要文本、Caption |
| `md` | 28rpx | 正文默认 |
| `lg` | 32rpx | 小标题 |
| `xl` | 36rpx | 标题 |
| `xxl` | 40rpx | 大标题 |
| `h1` | 48rpx | 一级标题 |
| `h2` | 40rpx | 二级标题 |
| `h3` | 36rpx | 三级标题 |
| `h4` | 32rpx | 四级标题 |
| `h5` | 28rpx | 五级标题 |
| `h6` | 24rpx | 六级标题 |

## 字重

| 名称 | 值 | 用途 |
|------|-----|------|
| `light` | 300 | 轻量文本 |
| `normal` | 400 | 正文 |
| `medium` | 500 | 中等强调 |
| `semibold` | 600 | 半粗体 |
| `bold` | 700 | 标题、强调 |

## 行高

| 名称 | 值 | 用途 |
|------|-----|------|
| `tight` | 1.2 | 紧凑标题 |
| `normal` | 1.5 | 正文默认 |
| `relaxed` | 1.8 | 宽松阅读 |

## 使用示例

```vue
<parrot-heading level="1">一级标题</parrot-heading>
<parrot-paragraph size="md">正文内容</parrot-paragraph>
<parrot-caption type="secondary">辅助说明</parrot-caption>
```
