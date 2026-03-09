<template>
  <div class="phone-preview" :class="{ 'phone-preview--dark': isDark }">
    <!-- 外框 -->
    <div class="phone-preview__frame">
      <!-- 灵动岛 -->
      <div class="phone-preview__dynamic-island"></div>
      <!-- 状态栏 -->
      <div class="phone-preview__status-bar">
        <span class="phone-preview__time">9:41</span>
        <span class="phone-preview__status-icons">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
            <rect x="0" y="4" width="3" height="8" rx="0.5" opacity="0.4"/>
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" opacity="0.6"/>
            <rect x="9" y="1" width="3" height="11" rx="0.5" opacity="0.8"/>
            <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <path d="M8 2.4C5.6 2.4 3.4 3.4 1.8 5l1.2 1.2C4.2 4.8 6 4.2 8 4.2s3.8.6 5 1.8L14.2 5C12.6 3.4 10.4 2.4 8 2.4zM8 6c-1.4 0-2.8.6-3.8 1.4L5.4 8.8C6.2 8 7 7.6 8 7.6s1.8.4 2.6 1.2L11.8 7.4C10.8 6.6 9.4 6 8 6zM8 9.6c-.6 0-1.2.4-1.4.8L8 12l1.4-1.6C9.2 10 8.6 9.6 8 9.6z"/>
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
            <rect x="0" y="1" width="21" height="10" rx="2" stroke="currentColor" stroke-width="1" fill="none"/>
            <rect x="22" y="4" width="2" height="4" rx="0.5" opacity="0.4"/>
            <rect x="1.5" y="2.5" width="17" height="7" rx="1" fill="currentColor"/>
          </svg>
        </span>
      </div>
      <!-- 内容区域 -->
      <div class="phone-preview__content">
        <slot />
      </div>
      <!-- Home Indicator -->
      <div class="phone-preview__home-indicator">
        <div class="phone-preview__home-bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Preview' },
  dark: { type: Boolean, default: false }
})

const siteIsDark = ref(false)

const checkDark = () => {
  if (typeof document !== 'undefined') {
    siteIsDark.value = document.documentElement.classList.contains('dark')
  }
}

let observer = null

onMounted(() => {
  checkDark()
  if (typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const isDark = computed(() => props.dark || siteIsDark.value)
</script>
