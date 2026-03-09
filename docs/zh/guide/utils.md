# 工具函数 Utils

Parrot UI 提供 4 个工具模块，覆盖颜色操作、DOM 查询、事件管理和表单验证。

## color — 颜色操作

基于 `parrotui-utils/color/helpers.uts` 的颜色计算函数。

```typescript
import {
  hexToRgb, rgbToHex, mixColors,
  withOpacity, contrastColor, lighten, darken
} from '@parrotui/core'
```

### API

| 函数 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `hexToRgb(hex)` | string | `{r, g, b}` | HEX 转 RGB |
| `rgbToHex(r, g, b)` | number x3 | string | RGB 转 HEX |
| `mixColors(c1, c2, weight)` | string, string, number | string | 按比例混合两色 |
| `withOpacity(color, alpha)` | string, number | string | 生成 rgba 字符串 |
| `contrastColor(color)` | string | string | 返回黑/白对比色 |
| `lighten(color, amount)` | string, number | string | 亮化 (与白色混合) |
| `darken(color, amount)` | string, number | string | 暗化 (与黑色混合) |

### 示例

```typescript
hexToRgb('#1a7eff')              // { r: 26, g: 126, b: 255 }
rgbToHex(26, 126, 255)           // '#1a7eff'
mixColors('#ff0000', '#0000ff', 50) // 红蓝各 50%
withOpacity('#1a7eff', 0.5)      // 'rgba(26,126,255,0.5)'
contrastColor('#1a7eff')         // '#ffffff'
lighten('#1a7eff', 20)           // 亮化 20%
darken('#1a7eff', 20)            // 暗化 20%
```

---

## dom — DOM 查询与滚动

uni-app X 环境下的元素查询和页面滚动工具。

```typescript
import { getRect, getRects, scrollTo, scrollToTop, scrollToElement } from '@parrotui/core'
```

### API

| 函数 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `getRect(selector, instance)` | string, ComponentInternalInstance | Promise\<Rect\> | 获取单个元素位置 |
| `getRects(selector, instance)` | string, ComponentInternalInstance | Promise\<Rect[]\> | 获取多个元素位置 |
| `scrollTo(top, duration?)` | number, number? | void | 滚动到指定位置 |
| `scrollToTop()` | - | void | 滚动到顶部 |
| `scrollToElement(selector, instance)` | string, ComponentInternalInstance | void | 滚动到元素位置 |

### Rect 类型

```typescript
interface Rect {
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}
```

### 示例

```typescript
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

// 获取元素尺寸
const rect = await getRect('.my-box', instance)
console.log(rect.width, rect.height)

// 滚动到 500px 位置
scrollTo(500, 300)

// 滚动到指定元素
scrollToElement('.target-section', instance)
```

---

## event — 事件总线与函数控制

提供全局事件总线和防抖/节流工具。

```typescript
import { eventBus, debounce, throttle } from '@parrotui/core'
```

### EventBus

全局单例事件总线，用于跨组件通信。

```typescript
// 监听事件
eventBus.on('user:login', (data) => {
  console.log('用户登录:', data)
})

// 只监听一次
eventBus.once('app:init', () => {
  console.log('初始化完成')
})

// 触发事件
eventBus.emit('user:login', { id: 1, name: '张三' })

// 取消监听
eventBus.off('user:login')

// 检查是否有监听
eventBus.has('user:login') // false

// 清除所有监听
eventBus.clear()
```

### debounce / throttle

```typescript
// 防抖：最后一次触发后等待 300ms 执行
const debouncedSearch = debounce((keyword: string) => {
  // 搜索逻辑
}, 300)

// 节流：每 100ms 最多执行一次
const throttledScroll = throttle(() => {
  // 滚动处理
}, 100)
```

### API

**EventBus 方法：**

| 方法 | 参数 | 说明 |
|------|------|------|
| `on(event, handler)` | string, Function | 监听事件 |
| `once(event, handler)` | string, Function | 监听一次 |
| `off(event, handler?)` | string, Function? | 取消监听（不传 handler 则取消该事件全部监听） |
| `emit(event, ...args)` | string, any[] | 触发事件 |
| `has(event)` | string | 检查是否有监听器 |
| `clear()` | - | 清除所有事件监听 |

**函数控制：**

| 函数 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `debounce(fn, delay)` | Function, number | Function | 防抖包装 |
| `throttle(fn, interval)` | Function, number | Function | 节流包装 |

---

## validator — 表单验证

面向中国业务场景的表单验证工具集。

```typescript
import {
  isPhone, isEmail, isIdCard, isUrl, isNumeric,
  isAmount, isChinese, isCreditCode, isPostCode, isNotEmpty,
  validate, validateFields, rules
} from '@parrotui/core'
```

### 内置验证函数

| 函数 | 规则 | 说明 |
|------|------|------|
| `isPhone(val)` | `1[3-9]\d{9}` | 中国手机号 |
| `isEmail(val)` | 标准邮箱格式 | 电子邮件 |
| `isIdCard(val)` | 18位 + 校验位 | 身份证号 |
| `isUrl(val)` | http(s) 协议 | 网址 |
| `isNumeric(val)` | 整数/小数 | 数字 |
| `isAmount(val)` | 最多两位小数 | 金额 |
| `isChinese(val)` | `[\u4e00-\u9fa5]` | 纯中文 |
| `isCreditCode(val)` | 18位统一代码 | 统一社会信用代码 |
| `isPostCode(val)` | 6位数字 | 邮政编码 |
| `isNotEmpty(val)` | 非空/非空白 | 非空检查 |

### 规则工厂

`rules` 对象提供快速创建验证规则的工厂方法：

```typescript
const nameRules = [
  rules.required('请输入姓名'),
  rules.minLength(2, '至少 2 个字符'),
  rules.maxLength(20, '最多 20 个字符'),
]

const emailRules = [
  rules.required('请输入邮箱'),
  rules.email('邮箱格式不正确'),
]

const phoneRules = [
  rules.required('请输入手机号'),
  rules.phone('手机号格式不正确'),
]

// 自定义正则
const customRules = [
  rules.pattern(/^[A-Z]{3}$/, '请输入 3 位大写字母'),
]
```

### 执行验证

```typescript
// 单值验证
const result = validate(value, nameRules)
// { valid: true } 或 { valid: false, message: '请输入姓名' }

// 批量字段验证
const results = validateFields({
  name: { value: '', rules: nameRules },
  email: { value: 'bad', rules: emailRules },
})
// { valid: false, errors: { name: '请输入姓名', email: '邮箱格式不正确' } }
```

### 类型定义

```typescript
interface ValidationRule {
  validator: (value: string) => boolean
  message: string
}

interface ValidationResult {
  valid: boolean
  message?: string
}
```
