<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">CircularProgress 环形进度</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">进度值</div>
        <div class="demo-tabs">
          <button v-for="v in [25,50,75,100]" :key="v" class="demo-tab" :class="{active:value===v}" @click="value=v">{{v}}%</button>
        </div>
        <div style="display:flex;justify-content:center;margin:12px 0">
          <svg :width="size" :height="size" viewBox="0 0 120 120">
            <circle cx="60" cy="60" :r="radius" fill="none" :stroke="dark?'#333':'#eee'" :stroke-width="strokeWidth"/>
            <circle cx="60" cy="60" :r="radius" fill="none" :stroke="colorMap[type]" :stroke-width="strokeWidth"
              stroke-linecap="round"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference*(1-value/100)"
              transform="rotate(-90 60 60)"
              style="transition:stroke-dashoffset 0.5s ease"
            />
            <text x="60" y="65" text-anchor="middle" :fill="dark?'#e5e5e5':'#333'" font-size="18" font-weight="700">{{ value }}%</text>
          </svg>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色 / 尺寸</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <div class="demo-tabs" style="margin-top:6px">
          <button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:size===s.v}" @click="size=s.v">{{s.l}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const dark = ref(false)
const value = ref(75)
const type = ref('primary')
const size = ref(100)
const strokeWidth = 10
const radius = 50
const circumference = computed(() => 2 * Math.PI * radius)
const types = [{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const sizes = [{v:80,l:'小'},{v:100,l:'中'},{v:130,l:'大'}]
const colorMap = { primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
</script>
<!-- 样式来自全局 demo-shared.css -->
