<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">VisuallyHidden 无障碍</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">可视化对比</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:visible}" @click="visible=!visible">{{ visible?'隐藏辅助文字':'显示辅助文字' }}</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin:10px 0">
          <div v-for="item in items" :key="item.label" :style="{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',background:dark?'#1e1e1e':'#fff',borderRadius:'10px',border:`1px solid ${dark?'#333':'#f0f0f0'}`}">
            <button :style="{width:'36px',height:'36px',borderRadius:'50%',border:'none',background:'#1a7eff',cursor:'pointer',fontSize:'18px',display:'flex',alignItems:'center',justifyContent:'center'}">{{ item.icon }}</button>
            <span v-if="visible" :style="{fontSize:'12px',color:'#1a7eff',background:'#1a7eff11',borderRadius:'4px',padding:'2px 6px',border:'1px dashed #1a7eff44'}">{{ item.label }}</span>
            <span v-else :style="{fontSize:'12px',color:dark?'#666':'#ccc',fontStyle:'italic'}">（辅助文字已隐藏）</span>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">无障碍说明</div>
        <div :style="{padding:'10px 12px',background:dark?'#1a7eff11':'#1a7eff08',borderRadius:'8px',border:'1px solid #1a7eff22',fontSize:'12px',color:dark?'#ccc':'#555',lineHeight:'1.7'}">
          VisuallyHidden 组件将辅助文字在视觉上隐藏，但屏幕阅读器仍可读取，提升无障碍体验。
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const visible = ref(true)
const items = [
  { icon:'❤️', label:'收藏此商标' },
  { icon:'📤', label:'分享给好友' },
  { icon:'🔍', label:'查询详情' },
  { icon:'🗑️', label:'删除记录' },
]
</script>
<!-- 样式来自全局 demo-shared.css -->
