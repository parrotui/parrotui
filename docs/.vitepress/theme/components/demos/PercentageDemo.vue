<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Percentage 百分比</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">数值</div>
        <div class="demo-tabs">
          <button v-for="v in [25,50,75,99.9]" :key="v" class="demo-tab" :class="{active:value===v}" @click="value=v">{{v}}%</button>
        </div>
        <div :style="{fontSize:'40px',fontWeight:700,color:colorMap[type],margin:'10px 0',letterSpacing:'-1px'}">
          {{ value.toFixed(precision) }}<span :style="{fontSize:'20px',fontWeight:400}">%</span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">精度</div>
        <div class="demo-tabs">
          <button v-for="p in [0,1,2]" :key="p" class="demo-tab" :class="{active:precision===p}" @click="precision=p">{{p}}位</button>
        </div>
        <div :style="{height:'6px',background:dark?'#333':'#eee',borderRadius:'3px',margin:'8px 0',overflow:'hidden'}">
          <div :style="{width:value+'%',height:'100%',background:colorMap[type],borderRadius:'3px',transition:'width 0.3s'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const value = ref(75)
const type = ref('primary')
const precision = ref(1)
const types = [{v:'default',l:'默认'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const colorMap = { default:'#aaa', primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
</script>
<!-- 样式来自全局 demo-shared.css -->
