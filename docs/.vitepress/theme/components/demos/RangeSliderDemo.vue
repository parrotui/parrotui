<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">RangeSlider 区间滑块</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">当前区间：{{ low }} ~ {{ high }}</div>
        <div :style="{position:'relative',height:'20px',display:'flex',alignItems:'center',margin:'12px 0',userSelect:'none'}" @click="onTrackClick">
          <div :style="{position:'absolute',left:'0',right:'0',height:'4px',background:dark?'#333':'#eee',borderRadius:'2px'}"></div>
          <div :style="{position:'absolute',left:low+'%',width:(high-low)+'%',height:'4px',background:'#1a7eff',borderRadius:'2px'}"></div>
          <div :style="{position:'absolute',left:low+'%',top:'50%',transform:'translate(-50%,-50%)',width:'18px',height:'18px',borderRadius:'50%',background:'#1a7eff',boxShadow:'0 2px 6px rgba(0,0,0,0.2)',cursor:'pointer'}">
            <div :style="{position:'absolute',bottom:'22px',left:'50%',transform:'translateX(-50%)',background:'#1a7eff',color:'#fff',fontSize:'10px',padding:'1px 4px',borderRadius:'4px',whiteSpace:'nowrap'}">{{low}}</div>
          </div>
          <div :style="{position:'absolute',left:high+'%',top:'50%',transform:'translate(-50%,-50%)',width:'18px',height:'18px',borderRadius:'50%',background:'#1a7eff',boxShadow:'0 2px 6px rgba(0,0,0,0.2)',cursor:'pointer'}">
            <div :style="{position:'absolute',bottom:'22px',left:'50%',transform:'translateX(-50%)',background:'#1a7eff',color:'#fff',fontSize:'10px',padding:'1px 4px',borderRadius:'4px',whiteSpace:'nowrap'}">{{high}}</div>
          </div>
        </div>
        <div class="demo-tabs">
          <button v-for="p in presets" :key="p.l" class="demo-tab" @click="low=p.low;high=p.high">{{p.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <div :style="{position:'relative',height:'16px',display:'flex',alignItems:'center',marginTop:'8px'}">
          <div :style="{position:'absolute',left:'0',right:'0',height:'4px',background:dark?'#333':'#eee',borderRadius:'2px'}"></div>
          <div :style="{position:'absolute',left:'20%',width:'60%',height:'4px',background:colorMap[type],borderRadius:'2px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const low = ref(20)
const high = ref(80)
const type = ref('primary')
const types = [{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const colorMap = { primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
const presets = [{l:'全选',low:0,high:100},{l:'前半段',low:0,high:50},{l:'中间段',low:25,high:75},{l:'后半段',low:50,high:100}]
function onTrackClick(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100)
  const midpoint = (low.value + high.value) / 2
  if (pct < midpoint) low.value = Math.max(0, Math.min(pct, high.value - 5))
  else high.value = Math.min(100, Math.max(pct, low.value + 5))
}
</script>
<!-- 样式来自全局 demo-shared.css -->
