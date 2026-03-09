/**
 * Parrot UI 响应式布局组合式 API
 *
 * 提供屏幕尺寸检测、断点判断、平台识别、安全区域等工具
 * 跨平台兼容 Android / iOS / 鸿蒙 / H5 / 小程序
 *
 * 用法：
 *   import { useResponsive } from '@parrotui/core/composables/useResponsive'
 *   const { screenWidth, isSmall, platform, safeAreaBottom } = useResponsive()
 */

import { ref, computed, readonly } from 'vue'

// ─── 类型定义 ─────────────────────────────────────────────────

/** 断点名称 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/** 平台标识 */
export type Platform = 'ios' | 'android' | 'harmony' | 'web' | 'mp' | 'unknown'

/** 屏幕方向 */
export type Orientation = 'portrait' | 'landscape'

/** 断点阈值（单位 px） */
const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

// ─── 内部状态（模块级单例） ─────────────────────────────────────

const _screenWidth = ref<number>(375)
const _screenHeight = ref<number>(667)
const _statusBarHeight = ref<number>(0)
const _safeAreaBottom = ref<number>(0)
const _pixelRatio = ref<number>(2)
const _platform = ref<Platform>('unknown')
const _initialized = ref<boolean>(false)

/** 初始化系统信息 */
function _init(): void {
  if (_initialized.value) return
  try {
    const info = uni.getSystemInfoSync()
    _screenWidth.value = info.screenWidth
    _screenHeight.value = info.screenHeight
    _statusBarHeight.value = info.statusBarHeight ?? 0
    _pixelRatio.value = info.devicePixelRatio
    // 安全区域底部
    const safeArea = info.safeArea
    if (safeArea != null) {
      _safeAreaBottom.value = _screenHeight.value - safeArea.bottom
    }
    // 平台检测
    const os = (info.osName ?? '').toLowerCase()
    if (os === 'ios') {
      _platform.value = 'ios'
    } else if (os === 'android') {
      _platform.value = 'android'
    } else if (os === 'harmonyos') {
      _platform.value = 'harmony'
    } else {
      // 编译条件兜底
      // #ifdef H5
      _platform.value = 'web'
      // #endif
      // #ifdef MP
      _platform.value = 'mp'
      // #endif
    }
    _initialized.value = true
  } catch {
    // 获取系统信息失败，使用默认值
  }
}

// ─── Composable ───────────────────────────────────────────────

export function useResponsive() {
  // 首次调用时初始化
  _init()

  /** 当前断点名称 */
  const breakpoint = computed<Breakpoint>(() => {
    const w = _screenWidth.value
    if (w >= BREAKPOINTS.xl) return 'xl'
    if (w >= BREAKPOINTS.lg) return 'lg'
    if (w >= BREAKPOINTS.md) return 'md'
    if (w >= BREAKPOINTS.sm) return 'sm'
    return 'xs'
  })

  /** 屏幕方向 */
  const orientation = computed<Orientation>(() => {
    return _screenWidth.value >= _screenHeight.value ? 'landscape' : 'portrait'
  })

  /** 便捷断点判断 */
  const isXs = computed(() => breakpoint.value === 'xs')
  const isSm = computed(() => breakpoint.value === 'sm')
  const isMd = computed(() => breakpoint.value === 'md')
  const isLg = computed(() => breakpoint.value === 'lg')
  const isXl = computed(() => breakpoint.value === 'xl')

  /** 小屏判断（xs 或 sm） */
  const isSmall = computed(() => _screenWidth.value < BREAKPOINTS.md)
  /** 大屏判断（lg 或 xl） */
  const isLarge = computed(() => _screenWidth.value >= BREAKPOINTS.lg)

  /**
   * 判断当前屏幕是否 >= 指定断点
   * @param bp - 断点名称
   * @returns 是否满足
   */
  function isAbove(bp: Breakpoint): boolean {
    return _screenWidth.value >= BREAKPOINTS[bp]
  }

  /**
   * 判断当前屏幕是否 < 指定断点
   * @param bp - 断点名称
   * @returns 是否满足
   */
  function isBelow(bp: Breakpoint): boolean {
    return _screenWidth.value < BREAKPOINTS[bp]
  }

  /**
   * rpx 转 px
   * @param rpx - rpx 值
   * @returns px 值
   */
  function rpx2px(rpx: number): number {
    return (rpx / 750) * _screenWidth.value
  }

  /**
   * px 转 rpx
   * @param px - px 值
   * @returns rpx 值
   */
  function px2rpx(px: number): number {
    return (px / _screenWidth.value) * 750
  }

  /**
   * 刷新屏幕信息（用于横竖屏切换后手动刷新）
   */
  function refresh(): void {
    _initialized.value = false
    _init()
  }

  return {
    // 屏幕尺寸（只读）
    screenWidth: readonly(_screenWidth),
    screenHeight: readonly(_screenHeight),
    statusBarHeight: readonly(_statusBarHeight),
    safeAreaBottom: readonly(_safeAreaBottom),
    pixelRatio: readonly(_pixelRatio),
    // 平台
    platform: readonly(_platform),
    // 断点
    breakpoint,
    orientation,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isSmall,
    isLarge,
    // 方法
    isAbove,
    isBelow,
    rpx2px,
    px2rpx,
    refresh,
    // 常量
    BREAKPOINTS,
  }
}
