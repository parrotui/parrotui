<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Code 代码</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">语言切换</div>
        <div class="demo-tabs">
          <button v-for="l in langs" :key="l.v" class="demo-tab" :class="{active:lang===l.v}" @click="lang=l.v">{{l.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div :style="{background:dark?'#1e1e2e':'#f6f8fa',borderRadius:'8px',padding:'12px',fontSize:'12px',fontFamily:'monospace',color:dark?'#cdd6f4':'#24292e',lineHeight:'1.6',overflowX:'auto'}">
          <div v-html="codeMap[lang]"></div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">复制反馈</div>
        <button class="demo-tab" :class="{active:copied}" :style="{background:copied?'#09BE4F':'',color:copied?'#fff':''}" @click="doCopy">
          {{ copied ? '✓ 已复制' : '复制代码' }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const dark = ref(false)
const lang = ref('vue')
const copied = ref(false)
const langs = [{v:'vue',l:'Vue'},{v:'ts',l:'TS'},{v:'css',l:'CSS'}]
const codeMap = {
  vue: `&lt;parrot-code lang="vue"&gt;<br>&nbsp;&nbsp;const msg = 'hello'<br>&lt;/parrot-code&gt;`,
  ts: `import { ref } from 'vue'<br>const count = ref(0)<br>count.value++`,
  css: `.btn { color: #1a7eff;<br>&nbsp;&nbsp;border-radius: 8px; }`
}
function doCopy() {
  copied.value = true
  setTimeout(() => copied.value = false, 1500)
}
</script>
<!-- 样式来自全局 demo-shared.css -->
