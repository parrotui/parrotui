<template>
  <div class="color-demo" :class="{ 'color-demo--dark': isDark }">
    <!-- 顶部导航 -->
    <div class="color-demo__nav">
      <span class="color-demo__nav-title">Color 色彩</span>
      <button class="color-demo__mode-btn" @click="isDark = !isDark">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>

    <div class="color-demo__body">
      <!-- 主色 -->
      <div class="color-demo__section">
        <div class="color-demo__section-title">主色</div>
        <div class="color-demo__section-desc">菜单栏、按钮、突出文字</div>
        <div class="color-demo__row">
          <div class="color-demo__swatch color-demo__swatch--lg" :style="{ background: '#1a7eff' }">
            <span class="color-demo__swatch-label">#1a7eff</span>
          </div>
        </div>
      </div>

      <!-- 辅助色 -->
      <div class="color-demo__section">
        <div class="color-demo__section-title">辅助色</div>
        <div class="color-demo__section-desc">信息提示成功、警告和失败</div>
        <div class="color-demo__grid">
          <div v-for="c in auxiliaryColors" :key="c.value" class="color-demo__swatch" :style="{ background: c.value }" @click="copy(c.value)">
            <span class="color-demo__swatch-label">{{ c.name }}</span>
            <span class="color-demo__swatch-hex">{{ c.value }}</span>
          </div>
        </div>
      </div>

      <!-- 字体颜色 -->
      <div class="color-demo__section">
        <div class="color-demo__section-title">字体颜色</div>
        <div class="color-demo__section-desc">表单标题、文章内容</div>
        <div class="color-demo__list">
          <div v-for="fc in fontColors" :key="fc.light" class="color-demo__font-row">
            <div class="color-demo__font-swatch" :style="{ background: isDark ? fc.dark : fc.light }"></div>
            <span class="color-demo__font-value">{{ isDark ? fc.dark : fc.light }}</span>
          </div>
        </div>
      </div>

      <!-- 背景色 -->
      <div class="color-demo__section">
        <div class="color-demo__section-title">背景色</div>
        <div class="color-demo__section-desc">页面背景、内容模块底色</div>
        <div class="color-demo__list">
          <div v-for="bg in bgColors" :key="bg.light" class="color-demo__bg-row">
            <div class="color-demo__bg-swatch" :style="{ background: isDark ? bg.dark : bg.light }"></div>
            <span class="color-demo__bg-value">{{ isDark ? bg.dark : bg.light }}</span>
          </div>
        </div>
      </div>

      <!-- 边框色 -->
      <div class="color-demo__section">
        <div class="color-demo__section-title">边框颜色</div>
        <div class="color-demo__row">
          <div class="color-demo__border-swatch" :style="{ borderColor: isDark ? '#242424' : '#EEEEEE' }">
            <span>{{ isDark ? '#242424' : '#EEEEEE' }}</span>
          </div>
        </div>
      </div>

      <!-- 渐变色 -->
      <div class="color-demo__section">
        <div class="color-demo__section-title">渐变色</div>
        <div class="color-demo__section-desc">按钮背景色</div>
        <div class="color-demo__list">
          <div v-for="g in gradients" :key="g.css" class="color-demo__gradient-swatch" :style="{ background: g.css }">
            <span class="color-demo__gradient-label">{{ g.name }}</span>
          </div>
        </div>
      </div>

      <!-- 底部留白 -->
      <div style="height: 32px;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const auxiliaryColors = [
  { name: '危险', value: '#FF2B2B' },
  { name: '警告', value: '#FFB703' },
  { name: '信息', value: '#6831FF' },
  { name: '成功', value: '#09BE4F' }
]

const fontColors = [
  { light: '#181818', dark: '#D1D1D1' },
  { light: '#333333', dark: '#A3A3A3' },
  { light: '#B2B2B2', dark: '#8D8D8D' },
  { light: '#CCCCCC', dark: '#5E5E5E' },
  { light: '#FFFFFF', dark: '#FFFFFF' }
]

const bgColors = [
  { light: '#F1F4FA', dark: '#111111' },
  { light: '#FFFFFF', dark: '#1B1B1B' },
  { light: '#F8F8F8', dark: '#222222' },
  { light: 'rgba(255,43,43,0.05)', dark: '#222222' },
  { light: 'rgba(255,183,3,0.1)', dark: '#222222' },
  { light: 'rgba(104,49,255,0.05)', dark: '#222222' },
  { light: 'rgba(9,190,79,0.05)', dark: '#222222' },
  { light: 'rgba(0,0,0,0.6)', dark: 'rgba(0,0,0,0.6)' },
  { light: 'rgba(0,0,0,0.2)', dark: 'rgba(255,255,255,0.2)' }
]

const gradients = [
  { name: '品牌渐变', css: 'linear-gradient(90deg, #465CFF 0%, #6831FF 100%)' },
  { name: '危险渐变', css: 'linear-gradient(90deg, #FD8C8C 0%, #FF2B2B 100%)' }
]

const copy = (val) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(val)
  }
}
</script>
