<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Image 图片</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">圆角</div>
        <div class="demo-tabs">
          <button v-for="r in radii" :key="r.v" class="demo-tab" :class="{active:radius===r.v}" @click="radius=r.v">{{r.l}}</button>
        </div>
        <div :style="{width:'100%',height:'120px',background:`linear-gradient(135deg,#1a7eff,#09BE4F)`,borderRadius:radiusMap[radius],margin:'8px 0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'32px'}">🖼️</div>
      </div>
      <div class="demo-section">
        <div class="demo-label">加载占位</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:loading}" @click="loading=!loading">{{ loading?'加载中':'已加载' }}</button>
        </div>
        <div v-if="loading" :style="{width:'100%',height:'100px',background:dark?'#333':'#f0f0f0',borderRadius:'8px',margin:'8px 0',overflow:'hidden',position:'relative'}">
          <div :style="{position:'absolute',inset:'0',background:`linear-gradient(90deg,transparent,${dark?'rgba(255,255,255,0.05)':'rgba(255,255,255,0.6)'},transparent)`,animation:'demo-shimmer 1.5s infinite'}"></div>
        </div>
        <div v-else :style="{width:'100%',height:'100px',background:`linear-gradient(135deg,#9C5CFF,#1a7eff)`,borderRadius:'8px',margin:'8px 0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'28px'}">📸</div>
      </div>
    </div>
  </div>
</template>
<style>
@keyframes demo-shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
</style>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const radius = ref('md')
const loading = ref(false)
const radii = [{v:'none',l:'无'},{v:'sm',l:'小'},{v:'md',l:'中'},{v:'lg',l:'大'},{v:'full',l:'圆形'}]
const radiusMap = { none:'0', sm:'4px', md:'8px', lg:'16px', full:'50%' }
</script>
<!-- 样式来自全局 demo-shared.css -->
