<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Spinner 加载</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">颜色 & 尺寸</div>
        <div class="demo-tabs"><button v-for="t in typeList" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button></div>
        <div class="demo-tabs"><button v-for="s in sizes" :key="s.v" class="demo-tab" :class="{active:size===s.v}" @click="size=s.v">{{s.l}}</button></div>
        <div style="display:flex;gap:20px;align-items:center;margin-top:12px">
          <div class="spinner" :style="{width:size,height:size,borderColor:`${typeColors[type]}20`,borderTopColor:typeColors[type]}"></div>
          <span :style="{color:dark?'#aaa':'#666',fontSize:'13px'}">加载中...</span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">场景展示</div>
        <div class="demo-card" style="display:flex;align-items:center;gap:10px">
          <div class="spinner" :style="{width:'20px',height:'20px',borderColor:`${typeColors[type]}20`,borderTopColor:typeColors[type],flexShrink:0}"></div>
          <span :style="{color:dark?'#e5e5e5':'#333',fontSize:'14px'}">数据加载中，请稍候...</span>
        </div>
        <div class="demo-card" style="text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:8px">
            <div class="spinner" :style="{width:'32px',height:'32px',borderColor:`${typeColors[type]}20`,borderTopColor:typeColors[type]}"></div>
          </div>
          <div :style="{color:dark?'#aaa':'#666',fontSize:'13px'}">页面加载中</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), type = ref('primary'), size = ref('28px')
const typeList = [{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const typeColors = {primary:'#1a7eff',success:'#09BE4F',warning:'#FFB703',danger:'#FF2B2B'}
const sizes = [{v:'18px',l:'小'},{v:'28px',l:'中'},{v:'40px',l:'大'}]
</script>
<style>
.spinner{border-width:3px;border-style:solid;border-radius:50%;animation:spin 0.8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
</style>
