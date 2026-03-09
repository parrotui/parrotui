/**
 * Parrot UI 权限控制工具
 *
 * 提供基于角色/权限码的访问控制能力
 * 支持权限检查、角色判断、权限缓存
 *
 * 用法：
 *   import { usePermission, setPermissions, hasPermission } from '@parrotui/core/directives/vpermission'
 *
 *   // 初始化（登录后设置用户权限列表）
 *   setPermissions(['user:view', 'user:edit', 'order:view'])
 *   setRoles(['admin', 'editor'])
 *
 *   // 检查权限
 *   if (hasPermission('user:edit')) { ... }
 *   if (hasRole('admin')) { ... }
 *
 *   // 组合式用法
 *   const { can, canAll, canAny, isRole } = usePermission()
 */

import { ref, readonly } from 'vue'

// ─── 类型定义 ─────────────────────────────────────────────────

/** 权限码（如 'user:edit'、'order:create'） */
export type PermissionCode = string

/** 角色标识（如 'admin'、'editor'） */
export type RoleCode = string

// ─── 内部状态（模块级单例） ─────────────────────────────────────

/** 当前用户的权限码集合 */
const _permissions = ref<Set<PermissionCode>>(new Set())

/** 当前用户的角色集合 */
const _roles = ref<Set<RoleCode>>(new Set())

/** 是否为超级管理员（拥有所有权限） */
const _isSuperAdmin = ref<boolean>(false)

// ─── 全局方法 ─────────────────────────────────────────────────

/**
 * 设置当前用户的权限列表
 * 通常在登录成功后调用
 * @param codes - 权限码数组
 */
export function setPermissions(codes: PermissionCode[]): void {
  _permissions.value = new Set(codes)
}

/**
 * 设置当前用户的角色列表
 * @param roles - 角色码数组
 */
export function setRoles(roles: RoleCode[]): void {
  _roles.value = new Set(roles)
}

/**
 * 设置超级管理员标记
 * 超级管理员拥有所有权限，跳过权限检查
 * @param value - 是否为超管
 */
export function setSuperAdmin(value: boolean): void {
  _isSuperAdmin.value = value
}

/**
 * 检查是否拥有指定权限
 * @param code - 权限码
 * @returns 是否拥有该权限
 */
export function hasPermission(code: PermissionCode): boolean {
  if (_isSuperAdmin.value) return true
  return _permissions.value.has(code)
}

/**
 * 检查是否拥有指定角色
 * @param role - 角色码
 * @returns 是否拥有该角色
 */
export function hasRole(role: RoleCode): boolean {
  return _roles.value.has(role)
}

/**
 * 清除所有权限和角色（登出时调用）
 */
export function clearPermissions(): void {
  _permissions.value = new Set()
  _roles.value = new Set()
  _isSuperAdmin.value = false
}

// ─── 组合式 API ───────────────────────────────────────────────

export function usePermission() {

  /**
   * 检查单个权限
   * @param code - 权限码
   */
  function can(code: PermissionCode): boolean {
    return hasPermission(code)
  }

  /**
   * 检查是否拥有所有指定权限（AND 逻辑）
   * @param codes - 权限码数组
   */
  function canAll(codes: PermissionCode[]): boolean {
    if (_isSuperAdmin.value) return true
    for (let i = 0; i < codes.length; i++) {
      if (!_permissions.value.has(codes[i])) return false
    }
    return true
  }

  /**
   * 检查是否拥有任一指定权限（OR 逻辑）
   * @param codes - 权限码数组
   */
  function canAny(codes: PermissionCode[]): boolean {
    if (_isSuperAdmin.value) return true
    for (let i = 0; i < codes.length; i++) {
      if (_permissions.value.has(codes[i])) return true
    }
    return false
  }

  /**
   * 检查是否为指定角色
   * @param role - 角色码
   */
  function isRole(role: RoleCode): boolean {
    return hasRole(role)
  }

  /**
   * 检查是否为任一指定角色
   * @param roles - 角色码数组
   */
  function isAnyRole(roles: RoleCode[]): boolean {
    for (let i = 0; i < roles.length; i++) {
      if (_roles.value.has(roles[i])) return true
    }
    return false
  }

  /**
   * 获取当前所有权限码
   */
  function getPermissions(): PermissionCode[] {
    return Array.from(_permissions.value)
  }

  /**
   * 获取当前所有角色码
   */
  function getRoles(): RoleCode[] {
    return Array.from(_roles.value)
  }

  return {
    /** 检查单个权限 */
    can,
    /** 检查全部权限 */
    canAll,
    /** 检查任一权限 */
    canAny,
    /** 检查角色 */
    isRole,
    /** 检查任一角色 */
    isAnyRole,
    /** 获取权限列表 */
    getPermissions,
    /** 获取角色列表 */
    getRoles,
    /** 是否超管（只读响应式） */
    isSuperAdmin: readonly(_isSuperAdmin),
  }
}
