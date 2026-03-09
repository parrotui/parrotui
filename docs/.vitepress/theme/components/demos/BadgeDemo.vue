<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Badge 徽标</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">颜色类型</div>
        <div class="demo-tabs"><button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button></div>
        <div style="display:flex;gap:20px;margin-top:10px">
          <div v-for="icon in ['🔔','💬','📧']" :key="icon" style="position:relative;display:inline-flex">
            <span style="font-size:28px">{{icon}}</span>
            <span :style="{position:'absolute',top:'-4px',right:'-8px',background:typeColors[type],color:'#fff',borderRadius:'10px',padding:'1px 5px',fontSize:'11px',fontWeight:700,minWidth:'18px',textAlign:'center'}">{{count}}</span>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">数量</div>
        <div class="demo-tabs">
          <button v-for="n in [0,1,9,99,999]" :key="n" class="demo-tab" :class="{active:count===(n>99?'99+':n)}" @click="count=n>99?'99+':n">{{n===0?'清零':n}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">纯圆点</div>
        <div style="display:flex;gap:20px;margin-top:6px">
          <div v-for="icon in ['🔔','💬','📧']" :key="icon" style="position:relative;display:inline-flex">
            <span style="font-size:28px">{{icon}}</span>
            <span :style="{position:'absolute',top:'0',right:'0',width:'8px',height:'8px',background:typeColors[type],borderRadius:'50%',border:'1.5px solid #fff'}"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), type = ref('danger'), count = ref(9)
const types = [{v:'danger',l:'危险'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'}]
const typeColors = {danger:'#FF2B2B',primary:'#1a7eff',success:'#09BE4F',warning:'#FFB703'}
</script>
