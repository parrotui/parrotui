<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, watch } from 'vue'

const { Layout } = DefaultTheme

// 布局模式：'full'=全屏，'centered'=1440px居中；默认全屏
const layoutMode = ref('full')

// 应用布局模式到 body class
function applyMode(mode) {
  if (typeof document === 'undefined') return
  if (mode === 'centered') {
    document.documentElement.classList.add('layout-centered')
    document.documentElement.classList.remove('layout-full')
  } else {
    document.documentElement.classList.add('layout-full')
    document.documentElement.classList.remove('layout-centered')
  }
}

// 切换布局模式
function toggleLayout() {
  layoutMode.value = layoutMode.value === 'full' ? 'centered' : 'full'
  localStorage.setItem('parrot-layout-mode', layoutMode.value)
  applyMode(layoutMode.value)
}

// 初始化：读取用户偏好，默认 full
onMounted(() => {
  const saved = localStorage.getItem('parrot-layout-mode')
  layoutMode.value = saved === 'centered' ? 'centered' : 'full'
  applyMode(layoutMode.value)
})
</script>

<template>
  <Layout>
    <!--
      注入高度为 0 的 layout-top slot。
      VitePress 内部通过 ResizeObserver 监测 #layout-top 元素的高度，
      动态更新 --vp-layout-top-height CSS 变量。
      注入一个 0 高度的空 div，让变量真正变成 0px，消除 VPContent 的顶部空白。
    -->
    <template #layout-top>
      <div style="height:0;overflow:hidden;visibility:hidden;" aria-hidden="true"></div>
    </template>

    <!-- 在导航栏右侧插入布局切换按钮 -->
    <template #nav-bar-content-after>
      <button
        class="parrot-layout-toggle"
        :title="layoutMode === 'full' ? '切换为居中显示' : '切换为全屏显示'"
        :aria-label="layoutMode === 'full' ? '切换为居中显示' : '切换为全屏显示'"
        @click="toggleLayout"
      >
        <span v-if="layoutMode === 'full'" class="parrot-layout-toggle__icon">
          <!-- 居中/小屏图标 -->
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
            <line x1="5" y1="5.5" x2="11" y2="5.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="5" y1="8" x2="11" y2="8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="5" y1="10.5" x2="9" y2="10.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </span>
        <span v-else class="parrot-layout-toggle__icon">
          <!-- 全屏图标 -->
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="14" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
            <line x1="1" y1="5.5" x2="15" y2="5.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="4" y1="9" x2="12" y2="9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="parrot-layout-toggle__label">
          {{ layoutMode === 'full' ? '居中' : '全屏' }}
        </span>
      </button>
    </template>
  </Layout>
</template>

<style scoped>
.parrot-layout-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  margin-right: 8px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  white-space: nowrap;
  line-height: 1;
  height: 32px;
}

.parrot-layout-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.parrot-layout-toggle__icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
</style>
