<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Quote 引用</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">颜色类型</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <div :style="{borderLeft:`4px solid ${colors[type]}`,background:dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.03)',padding:'10px 14px',borderRadius:'0 8px 8px 0',margin:'10px 0',color:dark?'#ccc':'#555',fontSize:'13px',lineHeight:'1.7'}">
          知识是人类进步的阶梯，学习是永不停歇的旅程。保持好奇心，坚持探索未知的世界。
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">带标题引用</div>
        <div :style="{borderLeft:`4px solid ${colors[type]}`,background:dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.03)',padding:'10px 14px',borderRadius:'0 8px 8px 0',margin:'10px 0'}">
          <div :style="{fontWeight:600,fontSize:'13px',color:colors[type],marginBottom:'6px'}">引用来源</div>
          <div :style="{color:dark?'#ccc':'#555',fontSize:'13px',lineHeight:'1.7'}">这是带来源说明的引用内容，可以注明引用出处。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const type = ref('primary')
const types = [{v:'default',l:'默认'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const colors = { default:'#aaa', primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
</script>
<!-- 样式来自全局 demo-shared.css -->
