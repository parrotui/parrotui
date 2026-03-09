<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Skeleton 骨架屏</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">加载状态</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:loading}" @click="loading=!loading">{{ loading?'加载中':'已加载' }}</button>
        </div>
      </div>
      <div v-if="loading" class="demo-section">
        <!-- 骨架屏 -->
        <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px">
          <div :style="skeletonStyle('40px','40px','50%')"></div>
          <div style="flex:1;display:flex;flex-direction:column;gap:6px">
            <div :style="skeletonStyle('60%','14px','4px')"></div>
            <div :style="skeletonStyle('80%','12px','4px')"></div>
          </div>
        </div>
        <div :style="skeletonStyle('100%','12px','4px','0 0 8px')"></div>
        <div :style="skeletonStyle('90%','12px','4px','4px 0 8px')"></div>
        <div :style="skeletonStyle('70%','12px','4px','4px 0')"></div>
        <div :style="skeletonStyle('100%','80px','8px','12px 0 0')"></div>
      </div>
      <div v-else class="demo-section">
        <!-- 真实内容 -->
        <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px">
          <div :style="{width:'40px',height:'40px',borderRadius:'50%',background:'linear-gradient(135deg,#1a7eff,#09BE4F)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',flexShrink:0}">🦜</div>
          <div style="flex:1">
            <div :style="{fontWeight:600,fontSize:'14px',color:dark?'#e5e5e5':'#333',marginBottom:'4px'}">鹦鹉知产网</div>
            <div :style="{fontSize:'12px',color:dark?'#888':'#999'}">parrotui.com</div>
          </div>
        </div>
        <div :style="{fontSize:'13px',color:dark?'#ccc':'#555',lineHeight:'1.7'}">ParrotUI 是专为 uni-app X 设计的跨端组件库，支持 Android / iOS / 鸿蒙等多平台。</div>
        <div :style="{width:'100%',height:'80px',background:'linear-gradient(135deg,#9C5CFF33,#1a7eff33)',borderRadius:'8px',marginTop:'12px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'24px'}">🖼️</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const loading = ref(true)
function skeletonStyle(w, h, r, m = '0 0 6px') {
  return {
    width: w, height: h, borderRadius: r, margin: m,
    background: dark.value ? '#2a2a2a' : '#ebebeb',
    backgroundImage: `linear-gradient(90deg, transparent, ${dark.value ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)'}, transparent)`,
    backgroundSize: '200% 100%',
    animation: 'demo-shimmer 1.5s infinite',
    flexShrink: 0
  }
}
</script>
<!-- 样式来自全局 demo-shared.css -->
