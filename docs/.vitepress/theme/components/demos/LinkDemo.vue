<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Link 链接</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">颜色类型</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
          <a :style="{color:colorMap[type],fontSize:'14px',textDecoration:underline?'underline':'none',opacity:disabled?0.4:1,cursor:disabled?'not-allowed':'pointer'}">访问鹦鹉知产网</a>
          <a :style="{color:colorMap[type],fontSize:'14px',textDecoration:underline?'underline':'none',opacity:disabled?0.4:1,cursor:disabled?'not-allowed':'pointer'}">商标注册申请 →</a>
          <a :style="{color:colorMap[type],fontSize:'14px',textDecoration:underline?'underline':'none',opacity:disabled?0.4:1,cursor:disabled?'not-allowed':'pointer'}">了解更多详情</a>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">下划线 / 禁用</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:underline}" @click="underline=!underline">{{ underline?'有下划线':'无下划线' }}</button>
          <button class="demo-tab" :class="{active:disabled}" @click="disabled=!disabled">{{ disabled?'禁用中':'正常' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const type = ref('primary')
const underline = ref(true)
const disabled = ref(false)
const types = [{v:'default',l:'默认'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const colorMap = { default:'#666', primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
</script>
<!-- 样式来自全局 demo-shared.css -->
