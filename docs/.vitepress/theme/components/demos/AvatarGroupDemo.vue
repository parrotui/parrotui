<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">AvatarGroup 头像组</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">显示数量</div>
        <div class="demo-tabs">
          <button v-for="n in [3,5,8]" :key="n" class="demo-tab" :class="{active:maxCount===n}" @click="maxCount=n">{{ n }}个</button>
        </div>
        <div :style="{display:'flex',alignItems:'center',margin:'12px 0'}">
          <div v-for="(a,i) in avatars.slice(0,maxCount)" :key="i" :style="{width:'38px',height:'38px',borderRadius:'50%',background:a.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',marginLeft:i>0?'-10px':'0',border:`2px solid ${dark?'#111':'#fff'}`,zIndex:avatars.length-i}">
            {{ a.icon }}
          </div>
          <div v-if="avatars.length>maxCount" :style="{width:'38px',height:'38px',borderRadius:'50%',background:dark?'#333':'#e0e0e0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:600,marginLeft:'-10px',border:`2px solid ${dark?'#111':'#fff'}`,color:dark?'#ccc':'#666'}">
            +{{ avatars.length-maxCount }}
          </div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">间距</div>
        <div class="demo-tabs">
          <button v-for="g in gaps" :key="g.v" class="demo-tab" :class="{active:gap===g.v}" @click="gap=g.v">{{g.l}}</button>
        </div>
        <div :style="{display:'flex',alignItems:'center',margin:'12px 0'}">
          <div v-for="(a,i) in avatars.slice(0,4)" :key="i" :style="{width:'36px',height:'36px',borderRadius:'50%',background:a.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',marginLeft:i>0?gapMap[gap]:'0',border:`2px solid ${dark?'#111':'#fff'}`}">
            {{ a.icon }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const maxCount = ref(5)
const gap = ref('overlap')
const gaps = [{v:'overlap',l:'重叠'},{v:'tight',l:'紧密'},{v:'normal',l:'正常'}]
const gapMap = { overlap:'-10px', tight:'4px', normal:'8px' }
const avatars = [
  {icon:'👤',color:'#1a7eff22'},{icon:'👩',color:'#09BE4F22'},{icon:'👦',color:'#FFB70322'},
  {icon:'👧',color:'#FF2B2B22'},{icon:'🧑',color:'#9C5CFF22'},{icon:'👨',color:'#FF6B0022'},
  {icon:'🧒',color:'#00BCD422'},{icon:'👶',color:'#E91E6322'},
]
</script>
<!-- 样式来自全局 demo-shared.css -->
