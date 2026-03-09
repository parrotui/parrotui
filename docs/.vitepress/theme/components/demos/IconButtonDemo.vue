<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">IconButton 图标按钮</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">类型</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <div style="display:flex;gap:10px;align-items:center;margin:10px 0;flex-wrap:wrap">
          <button v-for="ic in icons" :key="ic.label" :style="{width:sizeMap[size],height:sizeMap[size],borderRadius:shape==='circle'?'50%':'8px',border:'none',background:bgMap[type],cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontSize:iconSizeMap[size],opacity:disabled?0.4:1}" :disabled="disabled">
            {{ ic.icon }}
          </button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">尺寸</div>
        <div class="demo-tabs">
          <button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:size===s.v}" @click="size=s.v">{{s.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">形状 / 禁用</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:shape==='circle'}" @click="shape=shape==='circle'?'square':'circle'">{{ shape==='circle'?'圆形':'方形' }}</button>
          <button class="demo-tab" :class="{active:disabled}" @click="disabled=!disabled">{{ disabled?'禁用中':'正常' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const type = ref('primary')
const size = ref('md')
const shape = ref('circle')
const disabled = ref(false)
const types = [{v:'default',l:'默认'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const sizes = [{v:'sm',l:'小'},{v:'md',l:'中'},{v:'lg',l:'大'}]
const bgMap = { default:'#f0f0f0', primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
const sizeMap = { sm:'32px', md:'44px', lg:'56px' }
const iconSizeMap = { sm:'16px', md:'22px', lg:'28px' }
const icons = [{icon:'🔍',label:'搜索'},{icon:'❤️',label:'收藏'},{icon:'📷',label:'拍照'},{icon:'📤',label:'分享'},{icon:'⚙️',label:'设置'}]
</script>
<!-- 样式来自全局 demo-shared.css -->
