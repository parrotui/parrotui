<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Spacer 间隔</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">水平间隔</div>
        <div class="demo-tabs">
          <button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:hSize===s.v}" @click="hSize=s.v">{{s.l}}</button>
        </div>
        <div :style="{display:'flex',alignItems:'center',margin:'8px 0'}">
          <div :style="{width:'40px',height:'24px',background:'#1a7eff22',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',color:'#1a7eff'}">A</div>
          <div :style="{width:sizeMap[hSize],height:'24px',background:dark?'rgba(255,120,120,0.15)':'rgba(255,120,120,0.12)',position:'relative'}">
            <div :style="{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',fontSize:'10px',color:'#FF2B2B',whiteSpace:'nowrap'}">{{sizeMap[hSize]}}</div>
          </div>
          <div :style="{width:'40px',height:'24px',background:'#09BE4F22',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',color:'#09BE4F'}">B</div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">垂直间隔</div>
        <div class="demo-tabs">
          <button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:vSize===s.v}" @click="vSize=s.v">{{s.l}}</button>
        </div>
        <div :style="{display:'flex',flexDirection:'column',alignItems:'flex-start',margin:'8px 0',gap:'0'}">
          <div :style="{width:'80px',height:'20px',background:'#1a7eff22',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',color:'#1a7eff'}">内容A</div>
          <div :style="{width:'100%',height:sizeMap[vSize],background:dark?'rgba(255,120,120,0.1)':'rgba(255,120,120,0.08)',position:'relative'}">
            <div :style="{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',fontSize:'10px',color:'#FF2B2B'}">{{sizeMap[vSize]}}</div>
          </div>
          <div :style="{width:'80px',height:'20px',background:'#09BE4F22',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',color:'#09BE4F'}">内容B</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const hSize = ref('md')
const vSize = ref('md')
const sizes = [{v:'xs',l:'XS'},{v:'sm',l:'SM'},{v:'md',l:'MD'},{v:'lg',l:'LG'},{v:'xl',l:'XL'}]
const sizeMap = { xs:'4px', sm:'8px', md:'16px', lg:'24px', xl:'32px' }
</script>
<!-- 样式来自全局 demo-shared.css -->
