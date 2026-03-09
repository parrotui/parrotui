<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">ButtonGroup 按钮组</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">单选模式</div>
        <div :style="{display:'flex',borderRadius:'8px',overflow:'hidden',border:`1px solid ${dark?'#444':'#e0e0e0'}`,margin:'8px 0'}">
          <button v-for="(item,i) in options" :key="item.v" @click="selected=item.v" :style="{flex:1,padding:'8px',border:'none',borderRight:i<options.length-1?`1px solid ${dark?'#444':'#e0e0e0'}`:'none',background:selected===item.v?'#1a7eff':(dark?'#1e1e1e':'#fff'),color:selected===item.v?'#fff':(dark?'#ccc':'#333'),cursor:'pointer',fontSize:'13px',transition:'all 0.2s'}">{{item.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">多选模式</div>
        <div :style="{display:'flex',borderRadius:'8px',overflow:'hidden',border:`1px solid ${dark?'#444':'#e0e0e0'}`,margin:'8px 0'}">
          <button v-for="(item,i) in multiOptions" :key="item.v" @click="toggleMulti(item.v)" :style="{flex:1,padding:'8px',border:'none',borderRight:i<multiOptions.length-1?`1px solid ${dark?'#444':'#e0e0e0'}`:'none',background:multiSelected.includes(item.v)?'#1a7eff':(dark?'#1e1e1e':'#fff'),color:multiSelected.includes(item.v)?'#fff':(dark?'#ccc':'#333'),cursor:'pointer',fontSize:'13px',transition:'all 0.2s'}">{{item.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">排列方向</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:direction==='row'}" @click="direction='row'">横向</button>
          <button class="demo-tab" :class="{active:direction==='column'}" @click="direction='column'">纵向</button>
        </div>
        <div :style="{display:'flex',flexDirection:direction,gap:'0',borderRadius:'8px',overflow:'hidden',border:`1px solid ${dark?'#444':'#e0e0e0'}`,marginTop:'8px',width:direction==='column'?'100%':'auto'}">
          <button v-for="(item,i) in options" :key="item.v" @click="selected2=item.v" :style="{padding:'8px 12px',border:'none',borderBottom:direction==='column'&&i<options.length-1?`1px solid ${dark?'#444':'#e0e0e0'}`:'none',borderRight:direction==='row'&&i<options.length-1?`1px solid ${dark?'#444':'#e0e0e0'}`:'none',background:selected2===item.v?'#1a7eff':(dark?'#1e1e1e':'#fff'),color:selected2===item.v?'#fff':(dark?'#ccc':'#333'),cursor:'pointer',fontSize:'13px'}">{{item.l}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const selected = ref('day')
const selected2 = ref('day')
const multiSelected = ref(['bold'])
const direction = ref('row')
const options = [{v:'day',l:'日'},{v:'week',l:'周'},{v:'month',l:'月'},{v:'year',l:'年'}]
const multiOptions = [{v:'bold',l:'粗体'},{v:'italic',l:'斜体'},{v:'underline',l:'下划'}]
function toggleMulti(v) {
  const idx = multiSelected.value.indexOf(v)
  if (idx > -1) multiSelected.value.splice(idx, 1)
  else multiSelected.value.push(v)
}
</script>
<!-- 样式来自全局 demo-shared.css -->
