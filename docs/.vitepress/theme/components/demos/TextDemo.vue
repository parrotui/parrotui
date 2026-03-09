<template>
  <div class="text-demo" :class="{ 'text-demo--dark': isDark }">
    <!-- 顶部导航 -->
    <div class="text-demo__nav">
      <span class="text-demo__nav-title">Text 文本</span>
      <button class="text-demo__mode-btn" @click="isDark = !isDark">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>

    <div class="text-demo__body">
      <!-- 基础用法 -->
      <div class="text-demo__section">
        <div class="text-demo__section-title">基础用法</div>
        <div class="text-demo__rows">
          <div v-for="item in basicItems" :key="item.label" class="text-demo__row">
            <span class="text-demo__text" :style="{ color: item.color }">{{ item.label }}</span>
            <span class="text-demo__tag">{{ item.type }}</span>
          </div>
        </div>
      </div>

      <!-- 粗体 / 尺寸 -->
      <div class="text-demo__section">
        <div class="text-demo__section-title">粗体 / 尺寸</div>
        <div class="text-demo__rows">
          <div class="text-demo__row">
            <span class="text-demo__text" style="font-weight:700;">粗体文本 Bold</span>
          </div>
          <div class="text-demo__row">
            <span class="text-demo__text" style="font-size:12px;">小号文本 sm</span>
          </div>
          <div class="text-demo__row">
            <span class="text-demo__text" style="font-size:18px;">大号文本 lg</span>
          </div>
        </div>
      </div>

      <!-- 可复制 -->
      <div class="text-demo__section">
        <div class="text-demo__section-title">可复制</div>
        <div class="text-demo__copy-row" @click="handleCopy">
          <span class="text-demo__text">点击复制此文本</span>
          <svg class="text-demo__copy-icon" :class="{ copied }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span v-if="copied" class="text-demo__copied-tip">已复制！</span>
        </div>
      </div>

      <!-- 删除线 / 下划线 -->
      <div class="text-demo__section">
        <div class="text-demo__section-title">删除线 / 下划线</div>
        <div class="text-demo__rows">
          <div class="text-demo__row">
            <span class="text-demo__text" style="text-decoration:line-through;">删除线文本</span>
          </div>
          <div class="text-demo__row">
            <span class="text-demo__text" style="text-decoration:underline;">下划线文本</span>
          </div>
        </div>
      </div>

      <!-- 省略 -->
      <div class="text-demo__section">
        <div class="text-demo__section-title">省略截断</div>
        <div class="text-demo__ellipsis">
          这是一段很长很长的文本，超出宽度后会自动省略显示，避免撑破布局。
        </div>
      </div>

      <div style="height:24px;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)
const copied = ref(false)

const basicItems = [
  { label: '默认文本', type: 'default', color: '' },
  { label: '主要文本', type: 'primary', color: '#1a7eff' },
  { label: '成功文本', type: 'success', color: '#09BE4F' },
  { label: '警告文本', type: 'warning', color: '#FFB703' },
  { label: '危险文本', type: 'danger', color: '#FF2B2B' },
]

const handleCopy = () => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText('点击复制此文本')
  }
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}
</script>

<style scoped>
.text-demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.text-demo--dark {
  background: #111111;
}

/* 顶部导航 */
.text-demo__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #ffffff;
  border-bottom: 1px solid #eee;
  flex-shrink: 0;
}
.text-demo--dark .text-demo__nav {
  background: #1b1b1b;
  border-bottom-color: #333;
}
.text-demo__nav-title {
  font-size: 17px;
  font-weight: 700;
  color: #181818;
}
.text-demo--dark .text-demo__nav-title {
  color: #e5e5e5;
}
.text-demo__mode-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #eee;
  background: #f5f5f5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
}
.text-demo--dark .text-demo__mode-btn {
  border-color: #444;
  background: #333;
}

/* 主体 */
.text-demo__body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 20px;
  scrollbar-width: none;
}
.text-demo__body::-webkit-scrollbar { display: none; }

/* 分区 */
.text-demo__section {
  margin-bottom: 20px;
}
.text-demo__section-title {
  font-size: 13px;
  font-weight: 700;
  color: #b0b0b0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.text-demo--dark .text-demo__section-title {
  color: #666;
}

/* 文本行 */
.text-demo__rows {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.text-demo__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
}
.text-demo--dark .text-demo__row {
  background: #1b1b1b;
  border-color: #2a2a2a;
}
.text-demo__text {
  font-size: 15px;
  color: #181818;
}
.text-demo--dark .text-demo__text {
  color: #e5e5e5;
}
.text-demo__tag {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  background: #f0f0f0;
  color: #888;
  font-family: monospace;
}
.text-demo--dark .text-demo__tag {
  background: #2a2a2a;
  color: #666;
}

/* 可复制行 */
.text-demo__copy-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  position: relative;
  transition: border-color 0.2s;
}
.text-demo__copy-row:active {
  border-color: #1a7eff;
}
.text-demo--dark .text-demo__copy-row {
  background: #1b1b1b;
  border-color: #2a2a2a;
}
.text-demo__copy-icon {
  flex-shrink: 0;
  color: #999;
  transition: color 0.2s;
}
.text-demo__copy-icon.copied {
  color: #09BE4F;
}
.text-demo__copied-tip {
  font-size: 12px;
  color: #09BE4F;
  margin-left: auto;
}

/* 省略 */
.text-demo__ellipsis {
  padding: 12px 14px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-demo--dark .text-demo__ellipsis {
  background: #1b1b1b;
  border-color: #2a2a2a;
  color: #aaa;
}
</style>
