<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Countdown 倒计时</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">显示格式</div>
        <div class="demo-tabs">
          <button v-for="f in formats" :key="f.v" class="demo-tab" :class="{active:fmt===f.v}" @click="fmt=f.v">{{f.l}}</button>
        </div>
        <div :style="{display:'flex',gap:'6px',alignItems:'center',margin:'12px 0',justifyContent:'center'}">
          <template v-if="fmt==='block'">
            <div v-for="(seg,i) in segs" :key="i" style="display:flex;align-items:center;gap:6px">
              <div :style="{background:dark?'#1a7eff':'#1a7eff',color:'#fff',borderRadius:'8px',padding:'8px 12px',fontSize:'22px',fontWeight:700,minWidth:'44px',textAlign:'center'}">{{ seg.v }}</div>
              <span v-if="i<segs.length-1" :style="{color:dark?'#e5e5e5':'#333',fontSize:'20px',fontWeight:700}">:</span>
            </div>
          </template>
          <template v-else>
            <span :style="{fontSize:'32px',fontWeight:700,color:'#1a7eff',letterSpacing:'2px'}">{{ plainTime }}</span>
          </template>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">控制</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:running}" @click="toggleRun">{{ running?'暂停':'继续' }}</button>
          <button class="demo-tab" @click="reset">重置</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">时间范围</div>
        <div class="demo-tabs">
          <button v-for="d in durations" :key="d.v" class="demo-tab" :class="{active:initSec===d.v}" @click="setDuration(d.v)">{{d.l}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onUnmounted } from 'vue'
const dark = ref(false)
const fmt = ref('block')
const formats = [{v:'block',l:'方块'},{v:'plain',l:'纯文字'}]
const durations = [{v:60,l:'1分钟'},{v:300,l:'5分钟'},{v:3600,l:'1小时'}]
const initSec = ref(300)
const remaining = ref(300)
const running = ref(true)
const segs = computed(() => [
  { v: String(Math.floor(remaining.value/3600)).padStart(2,'0'), label:'时' },
  { v: String(Math.floor(remaining.value%3600/60)).padStart(2,'0'), label:'分' },
  { v: String(remaining.value%60).padStart(2,'0'), label:'秒' },
])
const plainTime = computed(() => segs.value.map(s=>s.v).join(':'))
let timer = setInterval(() => { if (running.value && remaining.value > 0) remaining.value-- }, 1000)
function toggleRun() { running.value = !running.value }
function reset() { remaining.value = initSec.value; running.value = true }
function setDuration(v) { initSec.value = v; remaining.value = v; running.value = true }
onUnmounted(() => clearInterval(timer))
</script>
<!-- 样式来自全局 demo-shared.css -->
