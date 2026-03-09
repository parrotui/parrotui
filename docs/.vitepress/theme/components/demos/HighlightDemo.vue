<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Highlight 高亮</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">关键词</div>
        <div class="demo-tabs">
          <button v-for="k in keywords" :key="k" class="demo-tab" :class="{active:keyword===k}" @click="keyword=k">{{k}}</button>
        </div>
        <div :style="{fontSize:'13px',color:dark?'#ccc':'#444',lineHeight:'2',marginTop:'8px'}" v-html="highlightedText"></div>
      </div>
      <div class="demo-section">
        <div class="demo-label">高亮颜色</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <div :style="{fontSize:'13px',color:dark?'#ccc':'#444',lineHeight:'2',marginTop:'8px'}" v-html="highlightedText"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const dark = ref(false)
const keyword = ref('商标')
const type = ref('primary')
const keywords = ['商标', '注册', '鹦鹉', '专利']
const types = [{v:'primary',l:'蓝色'},{v:'success',l:'绿色'},{v:'warning',l:'黄色'},{v:'danger',l:'红色'}]
const bgMap = { primary:'#1a7eff22', success:'#09BE4F22', warning:'#FFB70322', danger:'#FF2B2B22' }
const colorMap = { primary:'#1a7eff', success:'#09BE4F', warning:'#d97706', danger:'#FF2B2B' }
const text = '鹦鹉知产网提供商标注册、商标查询、商标转让等服务。商标是企业的重要无形资产，及时注册商标可以保护品牌权益。'
const highlightedText = computed(() => {
  const re = new RegExp(keyword.value, 'g')
  return text.replace(re, `<mark style="background:${bgMap[type.value]};color:${colorMap[type.value]};border-radius:3px;padding:0 2px">${keyword.value}</mark>`)
})
</script>
<!-- 样式来自全局 demo-shared.css -->
