<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Heading 标题</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">级别切换</div>
        <div class="demo-tabs">
          <button v-for="l in [1,2,3,4,5,6]" :key="l" class="demo-tab" :class="{active:level===l}" @click="level=l">H{{l}}</button>
        </div>
        <div :style="{ fontSize: sizes[level-1], fontWeight:700, color: dark?'#e5e5e5':'#181818', lineHeight:'1.3', margin:'12px 0' }">
          {{ level }}级标题示例
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色类型</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <div :style="{ fontSize:'20px', fontWeight:700, color:typeColors[type], margin:'12px 0' }">
          颜色标题示例
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">下边框</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:border}" @click="border=!border">{{ border?'已开启':'已关闭' }}</button>
        </div>
        <div :style="{ fontSize:'18px', fontWeight:700, color:dark?'#e5e5e5':'#181818', paddingBottom:'8px', borderBottom: border ? '2px solid #1a7eff' : 'none', margin:'12px 0' }">
          带下边框标题
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const level = ref(1)
const border = ref(false)
const type = ref('default')
const sizes = ['32px','26px','22px','18px','16px','14px']
const types = [{v:'default',l:'默认'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const typeColors = { default:'#181818', primary:'#1a7eff', success:'#09BE4F', warning:'#FFB703', danger:'#FF2B2B' }
</script>
<!-- 样式来自全局 demo-shared.css -->
