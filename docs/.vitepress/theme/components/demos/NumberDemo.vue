<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Number 数字</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">千分位格式</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:comma}" @click="comma=!comma">{{ comma?'已开启':'已关闭' }}</button>
        </div>
        <div :style="{fontSize:'28px',fontWeight:700,color:dark?'#e5e5e5':'#181818',margin:'10px 0',fontVariantNumeric:'tabular-nums'}">
          {{ comma ? '1,234,567.89' : '1234567.89' }}
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">前后缀</div>
        <div class="demo-tabs">
          <button v-for="m in modes" :key="m.v" class="demo-tab" :class="{active:mode===m.v}" @click="mode=m.v">{{m.l}}</button>
        </div>
        <div :style="{fontSize:'24px',fontWeight:600,color:'#1a7eff',margin:'10px 0'}">
          {{ prefixMap[mode] }}<span>9,999</span>{{ suffixMap[mode] }}
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">小数精度</div>
        <div class="demo-tabs">
          <button v-for="d in [0,1,2,4]" :key="d" class="demo-tab" :class="{active:decimals===d}" @click="decimals=d">{{d}}位</button>
        </div>
        <div :style="{fontSize:'22px',color:dark?'#e5e5e5':'#333',margin:'10px 0'}">
          {{ (12345.6789).toFixed(decimals) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const comma = ref(true)
const decimals = ref(2)
const mode = ref('none')
const modes = [{v:'none',l:'无'},{v:'unit',l:'单位'},{v:'currency',l:'货币'},{v:'percent',l:'百分比'}]
const prefixMap = { none:'', unit:'', currency:'¥', percent:'' }
const suffixMap = { none:'', unit:'件', currency:'', percent:'%' }
</script>
<!-- 样式来自全局 demo-shared.css -->
