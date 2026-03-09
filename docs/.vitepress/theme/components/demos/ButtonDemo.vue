<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Button 按钮</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">类型</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          <button v-for="t in types" :key="t.v" :style="btnStyle(t.color,false)" @click="activeType=t.v">{{t.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">变体（线框 / 幽灵）</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          <button :style="btnOutlineStyle('#1a7eff')">线框按钮</button>
          <button :style="{...btnOutlineStyle('#09BE4F'),background:'transparent'}">幽灵按钮</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">尺寸</div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <button v-for="s in sizes" :key="s.v" :style="{...btnStyle('#1a7eff',false),padding:s.p,fontSize:s.fs}">{{s.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">禁用状态</div>
        <div style="display:flex;gap:8px">
          <button :style="{...btnStyle('#1a7eff',true)}">主要按钮</button>
          <button :style="{...btnOutlineStyle('#1a7eff'),opacity:0.4,cursor:'not-allowed'}">线框按钮</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">形状</div>
        <div style="display:flex;gap:8px">
          <button :style="{...btnStyle('#1a7eff',false),borderRadius:'4px'}">方形</button>
          <button :style="btnStyle('#1a7eff',false)">圆角</button>
          <button :style="{...btnStyle('#1a7eff',false),borderRadius:'50px'}">胶囊</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), activeType = ref('primary')
const types = [{v:'default',l:'默认',color:'#999'},{v:'primary',l:'主要',color:'#1a7eff'},{v:'success',l:'成功',color:'#09BE4F'},{v:'warning',l:'警告',color:'#FFB703'},{v:'danger',l:'危险',color:'#FF2B2B'}]
const sizes = [{v:'xs',l:'超小',p:'2px 8px',fs:'11px'},{v:'sm',l:'小号',p:'4px 10px',fs:'12px'},{v:'md',l:'默认',p:'8px 16px',fs:'14px'},{v:'lg',l:'大号',p:'10px 20px',fs:'16px'}]
const btnStyle = (color, disabled) => ({background:color,color:'#fff',border:'none',borderRadius:'8px',padding:'8px 16px',fontSize:'14px',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.4:1,fontWeight:500})
const btnOutlineStyle = (color) => ({background:'transparent',color,border:`1px solid ${color}`,borderRadius:'8px',padding:'8px 16px',fontSize:'14px',cursor:'pointer',fontWeight:500})
</script>
