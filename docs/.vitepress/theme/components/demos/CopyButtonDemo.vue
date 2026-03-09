<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">CopyButton 复制按钮</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">按钮样式</div>
        <div class="demo-tabs">
          <button v-for="s in styles" :key="s.v" class="demo-tab" :class="{active:style===s.v}" @click="style=s.v">{{s.l}}</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin:10px 0">
          <div v-for="item in items" :key="item.label" :style="{padding:'10px 12px',background:dark?'#1e1e1e':'#fff',borderRadius:'10px',border:`1px solid ${dark?'#333':'#f0f0f0'}`}">
            <div :style="{fontSize:'11px',color:dark?'#888':'#999',marginBottom:'4px'}">{{ item.label }}</div>
            <div style="display:flex;align-items:center;gap:8px">
              <code :style="{flex:1,fontSize:'12px',color:dark?'#ccc':'#555',fontFamily:'monospace'}">{{ item.text }}</code>
              <button @click="doCopy(item.text)" :style="{padding:style==='text'?'2px 6px':'4px 10px',borderRadius:'6px',border:style==='outline'?`1px solid ${copied===item.text?'#09BE4F':'#1a7eff'}`:'none',background:style==='filled'?(copied===item.text?'#09BE4F':'#1a7eff'):'transparent',color:style==='filled'?'#fff':(copied===item.text?'#09BE4F':'#1a7eff'),fontSize:'12px',cursor:'pointer',flexShrink:0,fontWeight:style==='text'?600:400}">
                {{ copied===item.text ? '✓ 已复制' : '📋 复制' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const style = ref('filled')
const copied = ref('')
const styles = [{v:'filled',l:'实心'},{v:'outline',l:'描边'},{v:'text',l:'文字'}]
const items = [
  { label:'安装命令', text:'npm install parrot-ui' },
  { label:'引入组件', text:"import ParrotUI from 'parrot-ui'" },
  { label:'文档地址', text:'https://doc.parrotui.com' },
]
function doCopy(text) {
  copied.value = text
  setTimeout(() => { if (copied.value === text) copied.value = '' }, 2000)
}
</script>
<!-- 样式来自全局 demo-shared.css -->
