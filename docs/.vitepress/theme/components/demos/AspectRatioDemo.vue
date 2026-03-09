<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">AspectRatio 宽高比</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">比例切换</div>
        <div class="demo-tabs">
          <button v-for="r in ratios" :key="r.v" class="demo-tab" :class="{active:ratio===r.v}" @click="ratio=r.v">{{r.l}}</button>
        </div>
        <div :style="{width:'100%',paddingTop:paddingMap[ratio],position:'relative',background:`linear-gradient(135deg,#1a7eff33,#9C5CFF33)`,borderRadius:'10px',overflow:'hidden',margin:'8px 0',transition:'padding-top 0.3s'}">
          <div :style="{position:'absolute',inset:'0',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'6px'}">
            <span style="font-size:28px">📐</span>
            <span :style="{fontSize:'13px',fontWeight:600,color:dark?'#ccc':'#555'}">{{ ratio }}</span>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">内容填充示例</div>
        <div style="display:flex;gap:8px">
          <div v-for="r in ratios.slice(0,3)" :key="r.v" :style="{flex:1,paddingTop:paddingMap[r.v],position:'relative',background:dark?'#1e1e1e':'#f5f7fa',borderRadius:'8px',overflow:'hidden',border:`1px solid ${dark?'#333':'#eee'}`}">
            <div :style="{position:'absolute',inset:'0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',color:dark?'#888':'#999'}">{{r.l}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const ratio = ref('16/9')
const ratios = [{v:'16/9',l:'16:9'},{v:'4/3',l:'4:3'},{v:'1/1',l:'1:1'},{v:'9/16',l:'9:16'},{v:'3/4',l:'3:4'}]
const paddingMap = { '16/9':'56.25%', '4/3':'75%', '1/1':'100%', '9/16':'177.78%', '3/4':'133.33%' }
</script>
<!-- 样式来自全局 demo-shared.css -->
