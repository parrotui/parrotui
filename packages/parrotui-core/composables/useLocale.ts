/**
 * Parrot UI 国际化组合式 API
 *
 * 提供多语言切换、翻译函数、消息注册、日期/数字格式化
 * 内置 zh-CN 中文语言包，支持自定义扩展
 *
 * 用法：
 *   import { useLocale } from '@parrotui/core/composables/useLocale'
 *   const { t, setLang, currentLang } = useLocale()
 *   t('button.confirm') // → '确认'
 */

import { ref, readonly, computed } from 'vue'

// ─── 类型定义 ─────────────────────────────────────────────────

/** 语言包结构（扁平化键值对） */
export type Messages = Record<string, string>

/** 支持的语言代码 */
export type LangCode = 'zh-CN' | 'en-US' | string

// ─── 内置中文语言包 ──────────────────────────────────────────

const zhCN: Messages = {
  // 通用
  'common.confirm': '确认',
  'common.cancel': '取消',
  'common.ok': '确定',
  'common.close': '关闭',
  'common.save': '保存',
  'common.delete': '删除',
  'common.edit': '编辑',
  'common.add': '添加',
  'common.search': '搜索',
  'common.reset': '重置',
  'common.loading': '加载中...',
  'common.noData': '暂无数据',
  'common.noMore': '没有更多了',
  'common.retry': '重试',
  'common.back': '返回',
  'common.success': '操作成功',
  'common.fail': '操作失败',
  'common.tip': '提示',
  'common.warning': '警告',
  // 表单
  'form.required': '此项为必填项',
  'form.placeholder': '请输入',
  'form.select': '请选择',
  'form.upload': '上传',
  'form.maxLength': '最多输入{max}个字符',
  'form.minLength': '最少输入{min}个字符',
  'form.invalid': '格式不正确',
  'form.phone': '请输入正确的手机号',
  'form.email': '请输入正确的邮箱地址',
  'form.idCard': '请输入正确的身份证号',
  // 按钮
  'button.submit': '提交',
  'button.confirm': '确认',
  'button.cancel': '取消',
  'button.more': '更多',
  // 列表
  'list.pullDown': '下拉刷新',
  'list.release': '释放刷新',
  'list.refreshing': '正在刷新...',
  'list.loadMore': '加载更多',
  'list.loading': '加载中...',
  'list.noMore': '— 没有更多了 —',
  'list.empty': '暂无数据',
  // 对话框
  'dialog.title': '提示',
  'dialog.confirmText': '确定',
  'dialog.cancelText': '取消',
  // 图片
  'image.loadFail': '图片加载失败',
  'image.preview': '预览图片',
  // 复制
  'copy.success': '已复制到剪贴板',
  'copy.fail': '复制失败',
  // 权限
  'permission.denied': '权限不足',
  'permission.camera': '需要相机权限',
  'permission.album': '需要相册权限',
  'permission.storage': '需要存储权限',
  // 日期
  'date.year': '年',
  'date.month': '月',
  'date.day': '日',
  'date.hour': '时',
  'date.minute': '分',
  'date.second': '秒',
  'date.today': '今天',
  'date.yesterday': '昨天',
  'date.tomorrow': '明天',
  // 分页
  'pagination.total': '共{total}条',
  'pagination.page': '第{page}页',
  'pagination.prev': '上一页',
  'pagination.next': '下一页',
}

/** 内置英文语言包 */
const enUS: Messages = {
  'common.confirm': 'Confirm',
  'common.cancel': 'Cancel',
  'common.ok': 'OK',
  'common.close': 'Close',
  'common.save': 'Save',
  'common.delete': 'Delete',
  'common.edit': 'Edit',
  'common.add': 'Add',
  'common.search': 'Search',
  'common.reset': 'Reset',
  'common.loading': 'Loading...',
  'common.noData': 'No Data',
  'common.noMore': 'No More',
  'common.retry': 'Retry',
  'common.back': 'Back',
  'common.success': 'Success',
  'common.fail': 'Failed',
  'common.tip': 'Tip',
  'common.warning': 'Warning',
  'form.required': 'This field is required',
  'form.placeholder': 'Please enter',
  'form.select': 'Please select',
  'form.upload': 'Upload',
  'form.maxLength': 'Max {max} characters',
  'form.minLength': 'Min {min} characters',
  'form.invalid': 'Invalid format',
  'form.phone': 'Invalid phone number',
  'form.email': 'Invalid email address',
  'form.idCard': 'Invalid ID number',
  'button.submit': 'Submit',
  'button.confirm': 'Confirm',
  'button.cancel': 'Cancel',
  'button.more': 'More',
  'list.pullDown': 'Pull down to refresh',
  'list.release': 'Release to refresh',
  'list.refreshing': 'Refreshing...',
  'list.loadMore': 'Load More',
  'list.loading': 'Loading...',
  'list.noMore': '— No More —',
  'list.empty': 'No Data',
  'dialog.title': 'Tip',
  'dialog.confirmText': 'OK',
  'dialog.cancelText': 'Cancel',
  'image.loadFail': 'Image load failed',
  'image.preview': 'Preview',
  'copy.success': 'Copied to clipboard',
  'copy.fail': 'Copy failed',
  'permission.denied': 'Permission denied',
  'permission.camera': 'Camera permission required',
  'permission.album': 'Album permission required',
  'permission.storage': 'Storage permission required',
  'date.year': 'Year',
  'date.month': 'Month',
  'date.day': 'Day',
  'date.hour': 'Hour',
  'date.minute': 'Minute',
  'date.second': 'Second',
  'date.today': 'Today',
  'date.yesterday': 'Yesterday',
  'date.tomorrow': 'Tomorrow',
  'pagination.total': 'Total {total}',
  'pagination.page': 'Page {page}',
  'pagination.prev': 'Previous',
  'pagination.next': 'Next',
}

// ─── 内部状态（模块级单例） ─────────────────────────────────────

/** 已注册的语言包集合 */
const _messages: Record<string, Messages> = {
  'zh-CN': { ...zhCN },
  'en-US': { ...enUS },
}

/** 当前语言 */
const _currentLang = ref<LangCode>('zh-CN')

/** 存储键 */
const STORAGE_KEY = 'pui_locale'

// ─── Composable ───────────────────────────────────────────────

export function useLocale() {

  /**
   * 翻译函数
   * 支持参数插值：t('form.maxLength', { max: 10 }) → '最多输入10个字符'
   * @param key    - 消息键，如 'common.confirm'
   * @param params - 插值参数
   * @returns 翻译后的字符串；未找到则返回 key 本身
   */
  function t(key: string, params?: Record<string, string | number>): string {
    const lang = _currentLang.value
    const msgs = _messages[lang]
    let text = (msgs != null ? msgs[key] : null) ?? key

    // 参数插值 {xxx} → 实际值
    if (params != null) {
      const paramKeys = Object.keys(params)
      for (let i = 0; i < paramKeys.length; i++) {
        const pk = paramKeys[i]
        text = text.replace('{' + pk + '}', String(params[pk]))
      }
    }
    return text
  }

  /**
   * 切换当前语言
   * @param lang    - 语言代码
   * @param persist - 是否持久化（默认 true）
   */
  function setLang(lang: LangCode, persist: boolean = true): void {
    _currentLang.value = lang
    if (persist) {
      try {
        if (typeof uni !== 'undefined') {
          uni.setStorageSync(STORAGE_KEY, lang)
        }
      } catch { /* 忽略 */ }
    }
  }

  /**
   * 注册/合并语言包
   * @param lang - 语言代码
   * @param msgs - 消息键值对
   */
  function registerMessages(lang: LangCode, msgs: Messages): void {
    if (_messages[lang] != null) {
      // 合并
      const existing = _messages[lang]
      const keys = Object.keys(msgs)
      for (let i = 0; i < keys.length; i++) {
        existing[keys[i]] = msgs[keys[i]]
      }
    } else {
      _messages[lang] = { ...msgs }
    }
  }

  /**
   * 获取所有已注册的语言代码列表
   */
  function getAvailableLangs(): string[] {
    return Object.keys(_messages)
  }

  /**
   * 从持久化存储恢复语言设置
   * 建议在 App.uvue onLaunch 中调用
   */
  function restoreLocale(): void {
    try {
      if (typeof uni !== 'undefined') {
        const saved = uni.getStorageSync(STORAGE_KEY)
        if (saved) {
          _currentLang.value = String(saved) as LangCode
        }
      }
    } catch { /* 忽略 */ }
  }

  /** 当前语言是否为中文 */
  const isChinese = computed(() => _currentLang.value.startsWith('zh'))

  return {
    /** 翻译函数 */
    t,
    /** 切换语言 */
    setLang,
    /** 注册语言包 */
    registerMessages,
    /** 获取可用语言列表 */
    getAvailableLangs,
    /** 恢复持久化语言设置 */
    restoreLocale,
    /** 当前语言代码（只读响应式） */
    currentLang: readonly(_currentLang),
    /** 是否中文 */
    isChinese,
  }
}
