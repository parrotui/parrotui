# Parrot Footer Links 页脚链接组件

灵活的页脚链接和信息展示组件，支持链接列表、版权信息、ICP 备案号等。

## 功能特性

- ✅ 站点名称展示
- ✅ 自定义链接列表
- ✅ 支持分隔符
- ✅ 版权信息
- ✅ ICP 备案号（自动跳转）
- ✅ 公安备案号（自动跳转）
- ✅ 自定义底部文本
- ✅ 全面样式定制

## 基础用法

```vue
<template>
  <ParrotFooterLinks 
    site-name="鹦鹉知识产权"
    :links="footerLinks"
    copyright="© 2026 鹦鹉知识产权"
    icp="京 ICP 备 12345678 号"
  />
</template>

<script setup lang="uts">
import ParrotFooterLinks from '@/components/parrotui/parrot-footer-links/parrot-footer-links.uvue'

const footerLinks = [
  { text: '关于我们', path: 'guanyu' },
  { text: '|', type: 'separator' },
  { text: '隐私政策', path: 'yinsi' },
  { text: '|', type: 'separator' },
  { text: '服务条款', path: 'fuwutiaokuan' }
]
</script>
```

## 进阶用法

### 1. 完整配置

```vue
<ParrotFooterLinks 
  site-name="鹦鹉知识产权"
  :links="footerLinks"
  copyright="© 2026 鹦鹉知识产权 版权所有"
  icp="京 ICP 备 12345678 号"
  police-code="京公网安备 11010502034567 号"
  bottom-text="本网站由阿里云提供云计算服务"
/>
```

### 2. 外部链接

```vue
<script setup lang="uts">
const footerLinks = [
  { text: '官方微博', href: 'https://weibo.com/parrotip' },
  { text: '|', type: 'separator' },
  { text: '微信公众号', url: '/pages/common/qrcode' },
  { text: '|', type: 'separator' },
  { text: '联系客服', url: 'tel:4001234567' }
]
</script>

<ParrotFooterLinks :links="footerLinks" />
```

### 3. 深色主题

```vue
<ParrotFooterLinks 
  site-name="鹦鹉知识产权"
  :links="footerLinks"
  background-color="#1a1a1a"
  link-color="#cccccc"
  copyright-color="#999999"
  icp-color="#999999"
  padding="40rpx 30rpx"
/>
```

### 4. 简化模式（仅版权）

```vue
<ParrotFooterLinks 
  copyright="© 2026 鹦鹉知识产权"
  icp="京 ICP 备 12345678 号"
/>
```

### 5. 仅链接

```vue
<script setup lang="uts">
const footerLinks = [
  { text: '首页', url: '/pages/index/index' },
  { text: '|', type: 'separator' },
  { text: '商标查询', url: '/pages/trademark/index' },
  { text: '|', type: 'separator' },
  { text: '商标交易', url: '/pages/trademark/trade/index' },
  { text: '|', type: 'separator' },
  { text: '帮助中心', url: '/pages/helps/index' }
]
</script>

<ParrotFooterLinks 
  :links="footerLinks"
  :show-site-name="false"
/>
```

### 6. 完整示例（与 index.uvue 一致）

```vue
<template>
  <view class="page-footer-wrap">
    <ParrotFooterLinks 
      :site-name="appSettings.site_name"
      :links="footerLinks"
      :copyright="appSettings.copyright"
      :icp="appSettings.icp"
      :police-code="appSettings.police_code"
      :bottom-text="appSettings.bottom_text"
    />
  </view>
</template>

<script setup lang="uts">
const appSettings = ref({
  site_name: '鹦鹉知识产权',
  copyright: '© 2026 鹦鹉知识产权 版权所有',
  icp: '京 ICP 备 12345678 号',
  police_code: '京公网安备 11010502034567 号',
  bottom_text: '本网站由阿里云提供云计算服务'
})

const footerLinks = [
  { text: '关于我们', path: 'guanyu' },
  { text: '|', type: 'separator' },
  { text: '隐私政策', path: 'yinsi' },
  { text: '|', type: 'separator' },
  { text: '服务条款', path: 'fuwutiaokuan' },
  { text: '|', type: 'separator' },
  { text: '退款政策', path: 'tuikuan' },
  { text: '|', type: 'separator' },
  { text: '商标转让声明', path: 'tm-transfer-statement' }
]
</script>

<style scoped lang="scss">
.page-footer-wrap {
  padding: 30rpx 20rpx;
  background-color: #f5f5f5;
}
</style>
```

## API 参数

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| siteName | `string` | `''` | 站点名称 |
| links | `FooterLink[]` | `[]` | 链接列表 |
| copyright | `string` | `''` | 版权信息 |
| icp | `string` | `''` | ICP 备案号 |
| policeCode | `string` | `''` | 公安备案号 |
| bottomText | `string` | `''` | 底部文本 |
| customStyle | `string` | `''` | 自定义样式 |
| backgroundColor | `string` | `'transparent'` | 背景颜色 |
| padding | `string` | `'20rpx'` | 内边距 |
| linkColor | `string` | `'#999999'` | 链接颜色 |
| linkFontSize | `number` | `24` | 链接字体大小 |
| separatorColor | `string` | `'#CCCCCC'` | 分隔符颜色 |
| copyrightColor | `string` | `'#999999'` | 版权颜色 |
| copyrightFontSize | `number` | `22` | 版权字体大小 |
| icpColor | `string` | `'#999999'` | ICP 颜色 |
| icpFontSize | `number` | `22` | ICP 字体大小 |
| policeColor | `string` | `'#999999'` | 公安颜色 |
| policeFontSize | `number` | `22` | 公安字体大小 |
| bottomTextColor | `string` | `'#999999'` | 底部文本颜色 |
| bottomTextFontSize | `number` | `22` | 底部文本字体大小 |
| lineHeight | `number` | `1.8` | 行间距 |

### FooterLink 数据结构

```typescript
interface FooterLink {
  text: string              // 显示文本
  url?: string              // 内部链接路径
  href?: string             // 外部完整 URL
  path?: string             // 文章路径（跳转到文章页）
  type?: 'link' | 'separator'  // 类型：链接/分隔符
}
```

## 链接类型说明

| 属性 | 说明 | 示例 |
|------|------|------|
| `url` | 内部链接 | `/pages/about/index` |
| `href` | 外部链接 | `https://weibo.com/parrotip` |
| `path` | 文章路径 | `guanyu`（跳转到 `/pages/common/article?path=guanyu`） |

## 自动跳转

- **ICP 备案号** → 点击跳转到工信部备案查询（https://beian.miit.gov.cn/）
- **公安备案号** → 点击跳转到公安部备案查询

## 样式变量

```scss
.parrot-footer-links {
  --parrot-footer-bg: transparent;
  --parrot-footer-padding: 20rpx;
  --parrot-footer-link-color: #999999;
  --parrot-footer-separator-color: #CCCCCC;
  --parrot-footer-copyright-color: #999999;
}
```

## 注意事项

1. 分隔符使用 `type: 'separator'`，`text` 默认为 `|`
2. ICP 和公安备案号会自动添加跳转链接
3. 文章路径会自动跳转到 `/pages/common/article`
4. 所有尺寸单位为 `rpx`

## 主题预设

```vue
<!-- 浅色主题 -->
<ParrotFooterLinks 
  :links="footerLinks"
  background-color="#f5f5f5"
  link-color="#666666"
/>

<!-- 深色主题 -->
<ParrotFooterLinks 
  :links="footerLinks"
  background-color="#1a1a1a"
  link-color="#cccccc"
  copyright-color="#999999"
/>

<!-- 品牌色主题 -->
<ParrotFooterLinks 
  :links="footerLinks"
  link-color="#F85252"
  separator-color="#F85252"
/>
```
