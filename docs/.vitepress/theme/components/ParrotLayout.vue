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
          <!-- 缩小/居中图标（当前全屏，点击可缩小） -->
          <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M928 128H96a53.393333 53.393333 0 0 0-53.333333 53.333333v661.333334a53.393333 53.393333 0 0 0 53.333333 53.333333h832a53.393333 53.393333 0 0 0 53.333333-53.333333V181.333333a53.393333 53.393333 0 0 0-53.333333-53.333333z m10.666667 714.666667a10.666667 10.666667 0 0 1-10.666667 10.666666H96a10.666667 10.666667 0 0 1-10.666667-10.666666V181.333333a10.666667 10.666667 0 0 1 10.666667-10.666666h832a10.666667 10.666667 0 0 1 10.666667 10.666666zM377.753333 560.913333a21.333333 21.333333 0 0 1 0 30.173334L200.833333 768H320a21.333333 21.333333 0 0 1 0 42.666667H149.206667a21.333333 21.333333 0 0 1-21.206667-21.206667V618.666667a21.333333 21.333333 0 0 1 42.666667 0v119.166666l176.913333-176.92a21.333333 21.333333 0 0 1 30.173333 0zM896 234.54V405.333333a21.333333 21.333333 0 0 1-42.666667 0V286.166667l-176.913333 176.92a21.333333 21.333333 0 0 1-30.173333-30.173334L823.166667 256H704a21.333333 21.333333 0 0 1 0-42.666667h170.793333a21.333333 21.333333 0 0 1 21.206667 21.206667z" fill="currentColor"/>
          </svg>
        </span>
        <span v-else class="parrot-layout-toggle__icon">
          <!-- 全屏/展开图标（当前居中，点击可全屏） -->
          <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M938.666667 411.306667H638.293333c-13.653333 0-25.6-11.946667-25.6-25.6V85.333333c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v276.48H938.666667c13.653333 0 25.6 11.946667 25.6 25.6s-10.24 23.893333-25.6 23.893334zM59.733333 387.413333c-13.653333 0-25.6-11.946667-25.6-25.6V59.733333C34.133333 46.08 46.08 34.133333 59.733333 34.133333h302.08c13.653333 0 25.6 11.946667 25.6 25.6S375.466667 85.333333 361.813333 85.333333H85.333333v276.48c0 13.653333-11.946667 25.6-25.6 25.6zM964.266667 989.866667H662.186667c-13.653333 0-25.6-11.946667-25.6-25.6S648.533333 938.666667 662.186667 938.666667H938.666667V662.186667c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v302.08c0 13.653333-11.946667 25.6-25.6 25.6zM385.706667 964.266667c-13.653333 0-25.6-11.946667-25.6-25.6V663.893333H85.333333c-13.653333 0-25.6-11.946667-25.6-25.6s11.946667-25.6 25.6-25.6h302.08c13.653333 0 25.6 11.946667 25.6 25.6V938.666667c-1.706667 15.36-11.946667 25.6-27.306666 25.6z" fill="currentColor"/>
            <path d="M638.293333 411.306667c-6.826667 0-13.653333-1.706667-18.773333-6.826667-10.24-10.24-10.24-25.6 0-35.84L945.493333 40.96c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84L655.36 404.48c-5.12 5.12-11.946667 6.826667-17.066667 6.826667zM59.733333 989.866667c-6.826667 0-13.653333-1.706667-18.773333-6.826667-10.24-10.24-10.24-25.6 0-35.84l325.973333-325.973333c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84l-324.266666 325.973333c-5.12 5.12-11.946667 6.826667-18.773334 6.826667z" fill="currentColor"/>
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
