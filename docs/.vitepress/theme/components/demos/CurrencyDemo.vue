<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Currency 货币</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">货币符号</div>
        <div class="demo-tabs">
          <button v-for="c in currencies" :key="c.v" class="demo-tab" :class="{active:currency===c.v}" @click="currency=c.v">{{c.l}}</button>
        </div>
        <div :style="{fontSize:'32px',fontWeight:700,color:'#1a7eff',margin:'10px 0'}">
          <span :style="{fontSize:'18px',fontWeight:400,verticalAlign:'super',marginRight:'2px'}">{{ currency }}</span>{{ amount.toFixed(decimals) }}
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">小数位</div>
        <div class="demo-tabs">
          <button v-for="d in [0,1,2,4]" :key="d" class="demo-tab" :class="{active:decimals===d}" @click="decimals=d">{{d}}位</button>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">金额示例</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div v-for="item in items" :key="item.label" :style="{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 12px',background:dark?'#1e1e1e':'#fff',borderRadius:'8px',border:`1px solid ${dark?'#333':'#f0f0f0'}`}">
            <span :style="{fontSize:'13px',color:dark?'#999':'#666'}">{{ item.label }}</span>
            <span :style="{fontWeight:600,color:item.type==='out'?'#FF2B2B':'#09BE4F'}">
              {{ item.type==='out'?'-':'+' }}{{ currency }}{{ item.val.toFixed(decimals) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const currency = ref('¥')
const decimals = ref(2)
const amount = ref(1234.56)
const currencies = [{v:'¥',l:'人民币'},{v:'$',l:'美元'},{v:'€',l:'欧元'},{v:'£',l:'英镑'}]
const items = [
  { label:'商标注册费', val: 300.00, type:'out' },
  { label:'退款返还', val: 150.50, type:'in' },
  { label:'年费缴纳', val: 1000.00, type:'out' },
]
</script>
<!-- 样式来自全局 demo-shared.css -->
