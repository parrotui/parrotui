<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Icon 图标</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">图标尺寸</div>
        <div class="demo-tabs">
          <button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:size===s.v}" @click="size=s.v">{{s.l}}</button>
        </div>
        <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin:10px 0">
          <span v-for="ic in icons" :key="ic" :style="{fontSize:sizeMap[size],color:colorMap[color]}">{{ ic }}</span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">图标颜色</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:color===t.v}" @click="color=t.v">{{t.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">旋转动画</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:spin}" @click="spin=!spin">{{ spin?'旋转中':'静止' }}</button>
        </div>
        <span :style="{fontSize:sizeMap[size],color:colorMap[color],display:'inline-block',animation:spin?'demo-spin 1s linear infinite':'none',marginTop:'8px'}">⚙️</span>
      </div>
    </div>
  </div>
</template>
<style>
@keyframes demo-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const size = ref('md')
const color = ref('primary')
const spin = ref(false)
const sizes = [{v:'xs',l:'XS'},{v:'sm',l:'SM'},{v:'md',l:'MD'},{v:'lg',l:'LG'},{v:'xl',l:'XL'}]
const types = [{v:'default',l:'默认'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const sizeMap = { xs:'14px', sm:'18px', md:'24px', lg:'32px', xl:'40px' }
const colorMap = { default:'#666', primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
const icons = ['🏠','🔍','❤️','⭐','📷','🎵','📁','✅']
</script>
<!-- 样式来自全局 demo-shared.css -->
