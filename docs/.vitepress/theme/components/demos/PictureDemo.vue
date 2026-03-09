<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Picture 图片展示</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">填充模式</div>
        <div class="demo-tabs">
          <button v-for="m in modes" :key="m.v" class="demo-tab" :class="{active:mode===m.v}" @click="mode=m.v">{{m.l}}</button>
        </div>
        <div :style="{width:'100%',height:'120px',background:dark?'#1e1e1e':'#f0f4f8',borderRadius:'8px',margin:'8px 0',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}">
          <div :style="{fontSize:'48px',objectFit:mode,transform:mode==='fill'?'scale(1.2)':mode==='none'?'scale(0.7)':'scale(1)',transition:'transform 0.3s'}">🌄</div>
          <div :style="{position:'absolute',bottom:'4px',right:'6px',fontSize:'10px',color:dark?'#888':'#aaa',background:dark?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.8)',padding:'1px 5px',borderRadius:'4px'}">{{ mode }}</div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">宽高比</div>
        <div class="demo-tabs">
          <button v-for="r in ratios" :key="r.v" class="demo-tab" :class="{active:ratio===r.v}" @click="ratio=r.v">{{r.l}}</button>
        </div>
        <div :style="{width:'100%',aspectRatio:ratioMap[ratio],background:`linear-gradient(135deg,#1a7eff55,#09BE4F55)`,borderRadius:'8px',margin:'8px 0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'24px',transition:'aspect-ratio 0.3s'}">
          📷 {{ ratioMap[ratio] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const mode = ref('cover')
const ratio = ref('16/9')
const modes = [{v:'cover',l:'cover'},{v:'contain',l:'contain'},{v:'fill',l:'fill'},{v:'none',l:'none'}]
const ratios = [{v:'16/9',l:'16:9'},{v:'4/3',l:'4:3'},{v:'1/1',l:'1:1'},{v:'3/4',l:'3:4'}]
const ratioMap = { '16/9':'16/9', '4/3':'4/3', '1/1':'1/1', '3/4':'3/4' }
</script>
<!-- 样式来自全局 demo-shared.css -->
