<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Progress 进度条</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">进度值 {{progress}}%</div>
        <div class="demo-tabs">
          <button v-for="n in [0,25,50,75,100]" :key="n" class="demo-tab" :class="{active:progress===n}" @click="progress=n">{{n}}%</button>
        </div>
        <div :style="{height:'10px',background:dark?'#333':'#eee',borderRadius:'5px',overflow:'hidden',marginTop:'8px'}">
          <div :style="{height:'100%',width:progress+'%',background:typeColors[type],borderRadius:'5px',transition:'width 0.4s'}"></div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色类型</div>
        <div class="demo-tabs"><button v-for="t in typeList" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button></div>
      </div>
      <div class="demo-section">
        <div class="demo-label">粗细</div>
        <div class="demo-tabs"><button v-for="h in heights" :key="h.v" class="demo-tab" :class="{active:height===h.v}" @click="height=h.v">{{h.l}}</button></div>
        <div :style="{height:height,background:dark?'#333':'#eee',borderRadius:'10px',overflow:'hidden',marginTop:'8px'}">
          <div :style="{height:'100%',width:progress+'%',background:typeColors[type],borderRadius:'10px',transition:'width 0.4s'}"></div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">带文字</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="flex:1" :style="{height:'10px',background:dark?'#333':'#eee',borderRadius:'5px',overflow:'hidden'}">
            <div :style="{height:'100%',width:progress+'%',background:typeColors[type],borderRadius:'5px',transition:'width 0.4s'}"></div>
          </div>
          <span :style="{color:typeColors[type],fontSize:'13px',fontWeight:600,flexShrink:0}">{{progress}}%</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), progress = ref(60), type = ref('primary'), height = ref('10px')
const typeList = [{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const typeColors = {primary:'#1a7eff',success:'#09BE4F',warning:'#FFB703',danger:'#FF2B2B'}
const heights = [{v:'6px',l:'细'},{v:'10px',l:'中'},{v:'16px',l:'粗'}]
</script>
