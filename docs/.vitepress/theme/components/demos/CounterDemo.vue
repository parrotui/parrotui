<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Counter 数字动画</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">目标值</div>
        <div class="demo-tabs">
          <button v-for="t in targets" :key="t" class="demo-tab" :class="{active:target===t}" @click="startCount(t)">{{t.toLocaleString()}}</button>
        </div>
        <div :style="{fontSize:'36px',fontWeight:700,color:'#1a7eff',margin:'10px 0',fontVariantNumeric:'tabular-nums',letterSpacing:'-1px'}">
          {{ current.toLocaleString() }}
        </div>
        <button class="demo-tab" style="background:#1a7eff;color:#fff;border-color:#1a7eff" @click="startCount(target)">重新动画</button>
      </div>
      <div class="demo-section">
        <div class="demo-label">步长速度</div>
        <div class="demo-tabs">
          <button v-for="s in speeds" :key="s.v" class="demo-tab" :class="{active:speed===s.v}" @click="speed=s.v">{{s.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">格式化</div>
        <div class="demo-tabs">
          <button v-for="f in formats" :key="f.v" class="demo-tab" :class="{active:fmt===f.v}" @click="fmt=f.v">{{f.l}}</button>
        </div>
        <div :style="{fontSize:'24px',fontWeight:600,color:dark?'#e5e5e5':'#333',margin:'8px 0'}">
          {{ formatVal(current) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const targets = [1000, 9999, 100000]
const target = ref(9999)
const current = ref(0)
const speed = ref('normal')
const fmt = ref('none')
const speeds = [{v:'slow',l:'慢速'},{v:'normal',l:'正常'},{v:'fast',l:'快速'}]
const formats = [{v:'none',l:'无'},{v:'comma',l:'千分位'},{v:'unit',l:'加单位'},{v:'currency',l:'货币'}]
let timer = null
function startCount(t) {
  target.value = t
  current.value = 0
  clearInterval(timer)
  const steps = speed.value === 'slow' ? 80 : speed.value === 'fast' ? 20 : 40
  const increment = Math.ceil(t / steps)
  timer = setInterval(() => {
    current.value = Math.min(current.value + increment, t)
    if (current.value >= t) clearInterval(timer)
  }, 30)
}
function formatVal(v) {
  if (fmt.value === 'comma') return v.toLocaleString()
  if (fmt.value === 'unit') return v.toLocaleString() + '件'
  if (fmt.value === 'currency') return '¥' + v.toLocaleString()
  return v.toString()
}
startCount(9999)
</script>
<!-- 样式来自全局 demo-shared.css -->
