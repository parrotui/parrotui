<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Paragraph 段落</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">颜色类型</div>
        <div class="demo-tabs">
          <button v-for="t in types" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button>
        </div>
        <p :style="{color:typeColors[type],lineHeight:'1.8',margin:'8px 0',fontSize:'14px'}">这是一段正文内容，用于展示段落组件的基础用法，可设置颜色类型、行高等属性。</p>
      </div>
      <div class="demo-section">
        <div class="demo-label">行数省略</div>
        <div class="demo-tabs">
          <button v-for="n in [0,1,2,3]" :key="n" class="demo-tab" :class="{active:lines===n}" @click="lines=n">{{n===0?'不限':n+'行'}}</button>
        </div>
        <p :style="{color:dark?'#ccc':'#333',lineHeight:'1.7',margin:'8px 0',fontSize:'14px',overflow:'hidden',display:'-webkit-box',WebkitBoxOrient:'vertical',WebkitLineClamp:lines||999}">这是一段很长的文本内容，用于测试段落省略功能。当超出指定行数时会自动截断并显示省略号，这个功能在展示文章摘要、商品描述等场景中非常实用。</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), type = ref('default'), lines = ref(0)
const types = [{v:'default',l:'默认'},{v:'secondary',l:'次要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const typeColors = {default:'#333',secondary:'#666',success:'#09BE4F',warning:'#FFB703',danger:'#FF2B2B'}
</script>
