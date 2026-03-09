# Composables 组合式 API

Parrot UI 提供 4 个 Composable Hook，封装常用的跨组件逻辑。

## useColor

运行时访问设计令牌颜色系统，提供颜色计算与操作能力。

### 基本用法

```typescript
import { useColor } from '@parrotui/core'

const color = useColor()

// 获取主题色值（计算属性，响应式）
color.primary   // '#1a7eff'
color.secondary // '#7c3aed'
color.success   // '#41a906'
color.warning   // '#e6a23c'
color.danger    // '#f56c6c'
color.info      // '#6c6f78'
```

### API

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `getColor(key)` | ColorKey | string | 获取颜色值 |
| `getPalette(key)` | ColorKey | object | 获取色系全部 10 级 |
| `getShade(key, level)` | ColorKey, ShadeLevel | string | 获取指定级别色值 |
| `mix(c1, c2, weight)` | string, string, number | string | 两色混合 |
| `opacity(color, alpha)` | string, number | string | 设置透明度 |
| `contrast(color)` | string | string | 计算对比色（黑/白） |
| `shades(color)` | string | ShadeMap | 生成 10 级梯度 |
| `isDark(color)` | string | boolean | 判断是否深色 |
| `lighten(color, amount)` | string, number | string | 颜色变亮 |
| `darken(color, amount)` | string, number | string | 颜色变暗 |

### ShadeLevel 类型

```typescript
type ShadeLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
```

---

## useResponsive

屏幕尺寸检测、断点判断、单位换算。

### 基本用法

```typescript
import { useResponsive } from '@parrotui/core'

const screen = useResponsive()

// 屏幕信息
console.log(screen.screenWidth)     // 375
console.log(screen.breakpoint)      // 'sm'
console.log(screen.orientation)     // 'portrait'

// 断点判断
if (screen.isAbove('md')) {
  // 平板及以上
}
```

### 断点定义

| 断点 | 最小宽度 | 典型设备 |
|------|---------|----------|
| `xs` | 0 | 小屏手机 |
| `sm` | 576px | 标准手机 |
| `md` | 768px | 平板 |
| `lg` | 992px | 大平板/小笔记本 |
| `xl` | 1200px | 桌面 |

### API

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| `screenWidth` | number | 屏幕宽度 (px) |
| `screenHeight` | number | 屏幕高度 (px) |
| `statusBarHeight` | number | 状态栏高度 (px) |
| `safeAreaBottom` | number | 安全区底部 (px) |
| `platform` | string | 平台标识 |
| `breakpoint` | Breakpoint | 当前断点 |
| `orientation` | Orientation | 屏幕方向 |
| `isSmall` | boolean | 是否 xs/sm |
| `isLarge` | boolean | 是否 lg/xl |
| `isAbove(bp)` | (Breakpoint) => boolean | 大于等于断点 |
| `isBelow(bp)` | (Breakpoint) => boolean | 小于断点 |
| `rpx2px(rpx)` | (number) => number | rpx 转 px |
| `px2rpx(px)` | (number) => number | px 转 rpx |
| `refresh()` | () => void | 刷新屏幕信息 |

---

## useLocale

国际化多语言系统，内置 zh-CN / en-US 共 70+ 条目。

### 基本用法

```typescript
import { useLocale } from '@parrotui/core'

const { t, lang, setLang, registerMessages } = useLocale()

// 翻译
t('common.confirm')               // '确定'
t('form.maxLength', { max: 10 })  // '最多输入 10 个字符'

// 切换语言
setLang('en-US')
t('common.confirm')               // 'Confirm'
```

### 内置语言条目分类

| 分类 | 示例键 | zh-CN | en-US |
|------|--------|-------|-------|
| common | `common.confirm` | 确定 | Confirm |
| common | `common.cancel` | 取消 | Cancel |
| common | `common.save` | 保存 | Save |
| common | `common.delete` | 删除 | Delete |
| form | `form.required` | 此项为必填 | This field is required |
| form | `form.email` | 请输入有效邮箱 | Invalid email |
| form | `form.phone` | 请输入有效手机号 | Invalid phone |
| message | `message.success` | 操作成功 | Success |
| message | `message.error` | 操作失败 | Error |

### API

| 方法 | 参数 | 说明 |
|------|------|------|
| `t(key, params?)` | string, object? | 翻译（支持参数插值 `{key}`） |
| `lang` | computed | 当前语言代码 |
| `setLang(code)` | LangCode | 切换语言 |
| `registerMessages(code, msgs)` | string, object | 注册自定义语言包 |
| `getAvailableLangs()` | - | 获取可用语言列表 |
| `restoreLocale()` | - | 从本地存储恢复语言设置 |

---

## useTheme

主题管理，支持亮色/暗色/跟随系统三种模式。

### 基本用法

```typescript
import { useTheme } from '@parrotui/core'

const theme = useTheme()

// 读取状态
console.log(theme.mode)   // 'light' | 'dark' | 'system'
console.log(theme.isDark) // false

// 切换
theme.toggleDark()        // 明暗切换
theme.setMode('dark')     // 设置为暗色

// 自定义品牌色
theme.applyTheme({
  primary: '#ff6b6b',
  success: '#51cf66'
})

// 重置
theme.resetTheme()
```

### API

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| `mode` | ThemeMode | 当前模式 |
| `isDark` | boolean | 是否暗色 |
| `setMode(mode)` | (ThemeMode) => void | 设置模式 |
| `toggleDark()` | () => void | 切换明暗 |
| `applyTheme(patch)` | (ThemePatch) => void | 应用自定义色值 |
| `resetTheme()` | () => void | 重置为默认 |
| `restoreTheme()` | () => void | 从本地存储恢复 |

### ThemeMode 类型

```typescript
type ThemeMode = 'light' | 'dark' | 'system'
```
