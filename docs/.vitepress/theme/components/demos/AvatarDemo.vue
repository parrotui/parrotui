<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Avatar 头像</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">形状</div>
        <div class="demo-tabs"><button v-for="s in ['圆形','方形']" :key="s" class="demo-tab" :class="{active:shape===(s==='圆形'?'circle':'square')}" @click="shape=s==='圆形'?'circle':'square'">{{s}}</button></div>
        <div style="display:flex;gap:12px;margin-top:10px;align-items:center">
          <div v-for="size in ['32px','44px','56px','72px']" :key="size" :style="{width:size,height:size,borderRadius:shape==='circle'?'50%':'8px',background:'#1a7eff',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700,fontSize:parseInt(size)*0.36+'px',flexShrink:0}">王</div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">图片头像</div>
        <div style="display:flex;gap:12px;margin-top:8px">
          <div v-for="(bg,i) in ['#1a7eff','#09BE4F','#FF2B2B','#FFB703']" :key="i" :style="{width:'44px',height:'44px',borderRadius:shape==='circle'?'50%':'8px',background:bg,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700,fontSize:'16px'}">{{['王','李','张','赵'][i]}}</div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">头像组</div>
        <div style="display:flex;margin-top:8px">
          <div v-for="(bg,i) in ['#1a7eff','#09BE4F','#FF2B2B','#FFB703']" :key="i" :style="{width:'40px',height:'40px',borderRadius:'50%',background:bg,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700,fontSize:'15px',marginLeft:i===0?0:'-10px',border:'2px solid white',zIndex:4-i}">{{['A','B','C','+3'][i]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), shape = ref('circle')
</script>
