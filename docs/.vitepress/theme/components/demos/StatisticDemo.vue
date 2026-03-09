<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Statistic 统计</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">趋势方向</div>
        <div class="demo-tabs">
          <button v-for="t in trends" :key="t.v" class="demo-tab" :class="{active:trend===t.v}" @click="trend=t.v">{{t.l}}</button>
        </div>
      </div>
      <div class="demo-section">
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <div v-for="item in stats" :key="item.label" :style="{flex:'1',minWidth:'100px',background:dark?'#1e1e1e':'#fff',borderRadius:'10px',padding:'12px',border:`1px solid ${dark?'#333':'#f0f0f0'}`}">
            <div :style="{fontSize:'11px',color:dark?'#888':'#999',marginBottom:'6px'}">{{ item.label }}</div>
            <div :style="{fontSize:'22px',fontWeight:700,color:dark?'#e5e5e5':'#181818',lineHeight:'1'}">{{ item.value }}</div>
            <div v-if="trend!=='none'" :style="{fontSize:'11px',marginTop:'4px',color:trend==='up'?'#FF2B2B':'#09BE4F'}">
              {{ trend==='up' ? '▲ +12.5%' : '▼ -8.3%' }}
            </div>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">单位显示</div>
        <div class="demo-tabs">
          <button v-for="u in units" :key="u.v" class="demo-tab" :class="{active:unit===u.v}" @click="unit=u.v">{{u.l}}</button>
        </div>
        <div :style="{fontSize:'28px',fontWeight:700,color:'#1a7eff',margin:'8px 0'}">
          9,999<span :style="{fontSize:'14px',fontWeight:400,marginLeft:'4px',color:dark?'#888':'#999'}">{{ unitMap[unit] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const trend = ref('up')
const unit = ref('count')
const trends = [{v:'none',l:'无趋势'},{v:'up',l:'上涨'},{v:'down',l:'下跌'}]
const units = [{v:'count',l:'数量'},{v:'money',l:'金额'},{v:'percent',l:'百分比'},{v:'time',l:'时间'}]
const unitMap = { count:'件', money:'元', percent:'%', time:'小时' }
const stats = [
  { label:'总订单', value:'12,345' },
  { label:'今日新增', value:'256' },
  { label:'完成率', value:'89%' },
]
</script>
<!-- 样式来自全局 demo-shared.css -->
