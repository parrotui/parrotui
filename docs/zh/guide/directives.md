# 指令工具 Directives

Parrot UI 提供 3 个指令工具模块，封装常用的操作逻辑。

## vcopy — 剪贴板操作

提供跨平台的剪贴板读写能力。

### 复制文本

```typescript
import { copyText } from '@parrotui/core'

// 基本用法
copyText('要复制的文本')

// 完整配置
copyText('要复制的文本', {
  successText: '已复制到剪贴板',    // 成功提示文案
  onSuccess: () => {
    console.log('复制成功')
  },
  onFail: (err) => {
    console.error('复制失败:', err)
  }
})
```

### 读取剪贴板

```typescript
import { readClipboard } from '@parrotui/core'

readClipboard((text) => {
  console.log('剪贴板内容:', text)
})
```

### API

| 函数 | 参数 | 说明 |
|------|------|------|
| `copyText(text, options?)` | string, CopyOptions? | 复制文本到剪贴板 |
| `readClipboard(callback)` | (text: string) => void | 读取剪贴板内容 |

### CopyOptions

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `successText` | string | '复制成功' | 成功提示文案 |
| `onSuccess` | () => void | - | 成功回调 |
| `onFail` | (err) => void | - | 失败回调 |

---

## vloading — 加载状态管理

支持全局函数调用和 Composable 两种使用方式，嵌套调用自动计数。

### 全局方式

```typescript
import { showLoading, hideLoading } from '@parrotui/core'

showLoading('加载中...')

// 异步操作完成后
hideLoading()
```

### Composable 方式

```typescript
import { useLoading } from '@parrotui/core'

const loading = useLoading()

// 手动控制
loading.show('正在提交...')
loading.hide()

// 自动管理（推荐）
await loading.withLoading(async () => {
  const data = await fetchData()
  return data
})

// 响应式状态
loading.setLoading(true)
```

### API

**全局函数：**

| 函数 | 参数 | 说明 |
|------|------|------|
| `showLoading(text?)` | string? | 显示加载提示 |
| `hideLoading()` | - | 隐藏加载提示 |

**useLoading() 返回：**

| 方法 | 参数 | 说明 |
|------|------|------|
| `show(text?)` | string? | 显示加载 |
| `hide()` | - | 隐藏加载 |
| `withLoading(fn)` | () => Promise | 自动包裹异步函数 |
| `setLoading(flag)` | boolean | 设置加载状态 |

::: tip 嵌套计数
多次调用 `show()` 会递增内部计数器，需要对应次数的 `hide()` 才会真正关闭加载提示。
:::

---

## vpermission — 权限控制

基于权限码和角色的访问控制系统，支持超级管理员模式。

### 初始化

```typescript
import { setPermissions, setRoles, setSuperAdmin } from '@parrotui/core'

// 登录成功后设置权限（通常在登录接口返回后调用）
setPermissions(['user:read', 'user:write', 'order:read', 'order:write'])
setRoles(['admin', 'editor'])

// 可选：设置超级管理员（跳过所有权限检查）
setSuperAdmin(true)
```

### 权限检查

```typescript
import { hasPermission, hasRole } from '@parrotui/core'

// 全局函数检查
hasPermission('user:read')  // true
hasRole('admin')            // true
```

### Composable 方式

```typescript
import { usePermission } from '@parrotui/core'

const perm = usePermission()

// 单权限检查
perm.can('user:read')                         // true

// 全部满足
perm.canAll(['user:read', 'user:write'])      // true

// 任一满足
perm.canAny(['admin:delete', 'user:read'])    // true

// 角色检查
perm.isRole('admin')                          // true
perm.isAnyRole(['admin', 'viewer'])           // true

// 获取当前权限/角色列表
perm.getPermissions() // ['user:read', 'user:write', ...]
perm.getRoles()       // ['admin', 'editor']
```

### 清理

```typescript
import { clearPermissions } from '@parrotui/core'

// 退出登录时清除所有权限和角色
clearPermissions()
```

### API

**全局函数：**

| 函数 | 参数 | 说明 |
|------|------|------|
| `setPermissions(list)` | string[] | 设置权限码列表 |
| `setRoles(list)` | string[] | 设置角色列表 |
| `setSuperAdmin(flag)` | boolean | 设置超级管理员 |
| `hasPermission(code)` | string | 检查单个权限 |
| `hasRole(role)` | string | 检查单个角色 |
| `clearPermissions()` | - | 清除所有权限和角色 |

**usePermission() 返回：**

| 方法 | 参数 | 说明 |
|------|------|------|
| `can(code)` | string | 检查单个权限 |
| `canAll(codes)` | string[] | 全部满足 |
| `canAny(codes)` | string[] | 任一满足 |
| `isRole(role)` | string | 检查角色 |
| `isAnyRole(roles)` | string[] | 任一角色 |
| `getPermissions()` | - | 获取权限列表 |
| `getRoles()` | - | 获取角色列表 |
