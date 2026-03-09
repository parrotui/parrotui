<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Caption 说明</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">颜色 & 尺寸</div>
        <div class="demo-tabs"><button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button></div>
        <div class="demo-tabs"><button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:size===s.v}" @click="size=s.v">{{s.l}}</button></div>
        <div :style="{fontSize:size,color:typeColors[type],marginTop:'8px'}">这是一段说明文字，通常用于表单辅助描述</div>
      </div>
      <div class="demo-section">
        <div class="demo-label">实际场景</div>
        <div class="demo-card">
          <div :style="{fontSize:'15px',fontWeight:600,color:dark?'#e5e5e5':'#181818'}">用户名</div>
          <div :style="{fontSize:'12px',color:'#999',marginTop:'4px'}">仅支持字母、数字和下划线，2-20位</div>
          <div :style="{height:'36px',borderRadius:'8px',border:'1px solid #e0e0e0',marginTop:'8px',background:dark?'#222':'#fff'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), type = ref('secondary'), size = ref('12px')
const types = [{v:'default',l:'默认'},{v:'secondary',l:'次要'},{v:'danger',l:'错误'}]
const sizes = [{v:'11px',l:'XS'},{v:'12px',l:'SM'},{v:'13px',l:'MD'}]
const typeColors = {default:'#333',secondary:'#999',danger:'#FF2B2B'}
</script>
