<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Clipboard 剪贴板</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">复制文本</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin:8px 0">
          <div v-for="item in items" :key="item.text" :style="{display:'flex',alignItems:'center',gap:'8px',padding:'10px 12px',background:dark?'#1e1e1e':'#fff',borderRadius:'10px',border:`1px solid ${dark?'#333':'#f0f0f0'}`}">
            <div :style="{flex:1,fontSize:'13px',color:dark?'#ccc':'#444',fontFamily:'monospace',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}">{{ item.text }}</div>
            <button @click="doCopy(item.text)" :style="{padding:'4px 10px',borderRadius:'6px',border:'none',background:copied===item.text?'#09BE4F':'#1a7eff',color:'#fff',fontSize:'12px',cursor:'pointer',flexShrink:0,transition:'all 0.2s'}">
              {{ copied===item.text ? '✓ 已复制' : '复制' }}
            </button>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">复制后提示</div>
        <div v-if="copied" :style="{padding:'8px 12px',background:'#09BE4F22',borderRadius:'8px',border:'1px solid #09BE4F44',fontSize:'12px',color:'#09BE4F'}">
          ✓ 已复制：{{ copied.substring(0,20) }}{{ copied.length>20?'...':'' }}
        </div>
        <div v-else :style="{padding:'8px 12px',background:dark?'#1e1e1e':'#f5f7fa',borderRadius:'8px',fontSize:'12px',color:dark?'#888':'#aaa'}">等待复制操作…</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const copied = ref('')
const items = [
  { text: 'https://doc.parrotui.com' },
  { text: 'npm install parrot-ui' },
  { text: 'parrot-heading parrot-button parrot-badge' },
]
function doCopy(text) {
  copied.value = text
  setTimeout(() => { if (copied.value === text) copied.value = '' }, 2000)
}
</script>
<!-- 样式来自全局 demo-shared.css -->
