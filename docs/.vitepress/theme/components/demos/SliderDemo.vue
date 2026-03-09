<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Slider 滑块</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">当前值：{{ value }}</div>
        <div :style="{position:'relative',height:'20px',display:'flex',alignItems:'center',margin:'8px 0',userSelect:'none'}" @click="onTrackClick">
          <div :style="{position:'absolute',left:'0',right:'0',height:'4px',background:dark?'#333':'#eee',borderRadius:'2px'}"></div>
          <div :style="{position:'absolute',left:'0',width:value+'%',height:'4px',background:colorMap[type],borderRadius:'2px',transition:'width 0.1s'}"></div>
          <div :style="{position:'absolute',left:value+'%',top:'50%',transform:'translate(-50%,-50%)',width:'18px',height:'18px',borderRadius:'50%',background:colorMap[type],boxShadow:'0 2px 6px rgba(0,0,0,0.2)',cursor:'pointer',transition:'left 0.1s'}"></div>
        </div>
        <div class="demo-tabs">
          <button v-for="v in presets" :key="v" class="demo-tab" :class="{active:value===v}" @click="value=v">{{v}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">步长</div>
        <div class="demo-tabs">
          <button v-for="s in steps" :key="s" class="demo-tab" :class="{active:step===s}" @click="step=s">{{s}}</button>
        </div>
        <div :style="{fontSize:'12px',color:dark?'#888':'#aaa',marginTop:'6px'}">当前步长 {{ step }}，值 {{ snapValue }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const dark = ref(false)
const value = ref(40)
const type = ref('primary')
const step = ref(1)
const presets = [0, 25, 50, 75, 100]
const types = [{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const steps = [1, 5, 10, 25]
const snapValue = computed(() => Math.round(value.value / step.value) * step.value)
const colorMap = { primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
function onTrackClick(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100)
  value.value = Math.max(0, Math.min(100, pct))
}
</script>
<!-- 样式来自全局 demo-shared.css -->
