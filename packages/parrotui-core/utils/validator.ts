/**
 * Parrot UI 表单验证工具
 *
 * 提供常用的表单验证规则和验证器
 * 适用于中国互联网场景（手机号、身份证、统一社会信用代码等）
 *
 * 用法：
 *   import { validate, rules, isPhone, isEmail } from '@parrotui/core/utils/validator'
 *
 *   // 单个验证
 *   isPhone('13800138000') // true
 *
 *   // 规则验证
 *   const result = validate('', [rules.required('请输入'), rules.phone()])
 *   // { valid: false, message: '请输入' }
 */

// ─── 类型定义 ─────────────────────────────────────────────────

export interface ValidationRule {
  /** 验证函数，返回 true 表示通过 */
  validator: (value: string) => boolean
  /** 验证失败时的提示信息 */
  message: string
}

export interface ValidationResult {
  /** 是否通过验证 */
  valid: boolean
  /** 第一个失败的提示信息（通过时为空） */
  message: string
}

// ─── 验证器 ──────────────────────────────────────────────────

/** 是否为手机号（中国大陆） */
export function isPhone(value: string): boolean {
  return /^1[3-9]\d{9}$/.test(value)
}

/** 是否为邮箱 */
export function isEmail(value: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
}

/** 是否为身份证号（18 位） */
export function isIdCard(value: string): boolean {
  return /^\d{17}[\dXx]$/.test(value)
}

/** 是否为 URL */
export function isUrl(value: string): boolean {
  return /^https?:\/\/.+/.test(value)
}

/** 是否为纯数字 */
export function isNumeric(value: string): boolean {
  return /^\d+$/.test(value)
}

/** 是否为金额（最多两位小数） */
export function isAmount(value: string): boolean {
  return /^\d+(\.\d{1,2})?$/.test(value)
}

/** 是否为中文 */
export function isChinese(value: string): boolean {
  return /^[\u4e00-\u9fa5]+$/.test(value)
}

/** 是否为统一社会信用代码 */
export function isCreditCode(value: string): boolean {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(value)
}

/** 是否为邮政编码 */
export function isPostCode(value: string): boolean {
  return /^\d{6}$/.test(value)
}

/** 是否非空（去除首尾空格后判断） */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0
}

// ─── 规则工厂 ─────────────────────────────────────────────────

export const rules = {
  /** 必填规则 */
  required(message: string = '此项为必填项'): ValidationRule {
    return {
      validator: (value: string) => isNotEmpty(value),
      message,
    }
  },

  /** 手机号规则 */
  phone(message: string = '请输入正确的手机号'): ValidationRule {
    return {
      validator: (value: string) => value === '' || isPhone(value),
      message,
    }
  },

  /** 邮箱规则 */
  email(message: string = '请输入正确的邮箱地址'): ValidationRule {
    return {
      validator: (value: string) => value === '' || isEmail(value),
      message,
    }
  },

  /** 身份证号规则 */
  idCard(message: string = '请输入正确的身份证号'): ValidationRule {
    return {
      validator: (value: string) => value === '' || isIdCard(value),
      message,
    }
  },

  /** 最小长度规则 */
  minLength(min: number, message?: string): ValidationRule {
    return {
      validator: (value: string) => value.length >= min,
      message: message ?? '最少输入' + min + '个字符',
    }
  },

  /** 最大长度规则 */
  maxLength(max: number, message?: string): ValidationRule {
    return {
      validator: (value: string) => value.length <= max,
      message: message ?? '最多输入' + max + '个字符',
    }
  },

  /** 正则规则 */
  pattern(regex: RegExp, message: string = '格式不正确'): ValidationRule {
    return {
      validator: (value: string) => value === '' || regex.test(value),
      message,
    }
  },

  /** 金额规则 */
  amount(message: string = '请输入正确的金额'): ValidationRule {
    return {
      validator: (value: string) => value === '' || isAmount(value),
      message,
    }
  },

  /** 统一社会信用代码规则 */
  creditCode(message: string = '请输入正确的统一社会信用代码'): ValidationRule {
    return {
      validator: (value: string) => value === '' || isCreditCode(value),
      message,
    }
  },

  /** 自定义验证规则 */
  custom(validator: (value: string) => boolean, message: string): ValidationRule {
    return { validator, message }
  },
}

// ─── 验证执行 ─────────────────────────────────────────────────

/**
 * 执行一组验证规则
 * @param value    - 要验证的值
 * @param ruleList - 验证规则数组
 * @returns 验证结果（遇到第一个失败即返回）
 */
export function validate(value: string, ruleList: ValidationRule[]): ValidationResult {
  for (let i = 0; i < ruleList.length; i++) {
    const rule = ruleList[i]
    if (!rule.validator(value)) {
      return { valid: false, message: rule.message }
    }
  }
  return { valid: true, message: '' }
}

/**
 * 批量验证多个字段
 * @param fields - { 字段名: { value, rules } } 映射
 * @returns { valid, errors } —— errors 为 { 字段名: 错误信息 } 映射
 */
export function validateFields(
  fields: Record<string, { value: string; rules: ValidationRule[] }>
): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  let valid = true
  const keys = Object.keys(fields)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const field = fields[key]
    const result = validate(field.value, field.rules)
    if (!result.valid) {
      valid = false
      errors[key] = result.message
    }
  }
  return { valid, errors }
}
