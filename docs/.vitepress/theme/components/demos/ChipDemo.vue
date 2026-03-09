<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Chip 标签片</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">可选中（多选）</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px">
          <span v-for="chip in chips" :key="chip.v" @click="toggleChip(chip)" :style="{padding:'5px 12px',borderRadius:'20px',fontSize:'13px',fontWeight:500,cursor:'pointer',border:`1px solid ${chip.selected?'#1a7eff':'#e0e0e0'}`,background:chip.selected?'rgba(26,126,255,0.1)':'transparent',color:chip.selected?'#1a7eff':(dark?'#aaa':'#666'),transition:'all 0.15s'}">
            {{chip.icon?chip.icon+' ':''}}{{chip.l}}
          </span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">可关闭</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px">
          <span v-for="(c,i) in closeChips" :key="i" :style="{padding:'4px 8px 4px 12px',borderRadius:'20px',fontSize:'13px',border:'1px solid #e0e0e0',display:'flex',alignItems:'center',gap:'4px',color:dark?'#ccc':'#555'}">
            {{c}}<span @click="closeChips.splice(i,1)" style="cursor:pointer;opacity:0.6;font-size:11px">✕</span>
          </span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">已选：{{chips.filter(c=>c.selected).map(c=>c.l).join('、')||'无'}}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const chips = ref([{v:'vue',l:'Vue',icon:'💚',selected:true},{v:'react',l:'React',icon:'⚛️',selected:false},{v:'ts',l:'TypeScript',icon:'',selected:true},{v:'vite',l:'Vite',icon:'⚡',selected:false},{v:'uni',l:'uni-app',icon:'',selected:false}])
const closeChips = ref(['前端开发','UI设计','TypeScript','移动端'])
const toggleChip = (chip) => chip.selected = !chip.selected
</script>
