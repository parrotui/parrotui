<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Tag 标签</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">颜色类型</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
          <span v-for="t in types" :key="t.v" :style="{background:t.bg,color:t.color,padding:'3px 10px',borderRadius:'4px',fontSize:'13px',fontWeight:500}">{{t.l}}</span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">尺寸</div>
        <div class="demo-tabs"><button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:size===s.v}" @click="size=s.v">{{s.l}}</button></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
          <span v-for="t in types.slice(0,3)" :key="t.v" :style="{background:t.bg,color:t.color,padding:sizePad[size],borderRadius:'4px',fontSize:sizeFontSize[size],fontWeight:500}">{{t.l}}</span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">可关闭</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
          <span v-for="(tag,i) in closableTags" :key="i" :style="{background:'rgba(26,126,255,0.1)',color:'#1a7eff',padding:'3px 8px',borderRadius:'4px',fontSize:'13px',display:'flex',alignItems:'center',gap:'4px'}">
            {{tag}}<span @click="closableTags.splice(i,1)" style="cursor:pointer;font-size:12px;opacity:0.7">✕</span>
          </span>
          <span v-if="closableTags.length===0" style="color:#999;font-size:13px">全部关闭</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), size = ref('md')
const types = [{v:'primary',l:'主要',bg:'rgba(26,126,255,0.1)',color:'#1a7eff'},{v:'success',l:'成功',bg:'rgba(9,190,79,0.1)',color:'#09BE4F'},{v:'warning',l:'警告',bg:'rgba(255,183,3,0.1)',color:'#FFB703'},{v:'danger',l:'危险',bg:'rgba(255,43,43,0.1)',color:'#FF2B2B'},{v:'gray',l:'默认',bg:'#f0f0f0',color:'#666'}]
const sizes = [{v:'sm',l:'小'},{v:'md',l:'中'},{v:'lg',l:'大'}]
const sizePad = {sm:'2px 6px',md:'3px 10px',lg:'5px 14px'}
const sizeFontSize = {sm:'11px',md:'13px',lg:'15px'}
const closableTags = ref(['Vue','React','uni-app','TypeScript','Vite'])
</script>
