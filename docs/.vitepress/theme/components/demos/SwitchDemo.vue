<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Switch 开关</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">基础开关</div>
        <div v-for="item in switchItems" :key="item.label" class="demo-row" style="justify-content:space-between">
          <span :style="{color:dark?'#e5e5e5':'#333',fontSize:'14px'}">{{item.label}}</span>
          <div @click="item.disabled?null:item.value=!item.value" :style="{width:'44px',height:'26px',borderRadius:'13px',background:item.value?typeColors[type]:'#ccc',position:'relative',cursor:item.disabled?'not-allowed':'pointer',opacity:item.disabled?0.5:1,transition:'background 0.2s',flexShrink:0}">
            <div :style="{width:'20px',height:'20px',borderRadius:'50%',background:'#fff',position:'absolute',top:'3px',left:item.value?'21px':'3px',transition:'left 0.2s',boxShadow:'0 1px 3px rgba(0,0,0,0.2)'}"></div>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色</div>
        <div class="demo-tabs"><button v-for="t in typeList" :key="t.v" class="demo-tab" :class="{active:type===t.v}" @click="type=t.v">{{t.l}}</button></div>
        <div style="margin-top:8px">
          <div @click="mainSwitch=!mainSwitch" :style="{width:'52px',height:'30px',borderRadius:'15px',background:mainSwitch?typeColors[type]:'#ccc',position:'relative',cursor:'pointer',transition:'background 0.2s'}">
            <div :style="{width:'24px',height:'24px',borderRadius:'50%',background:'#fff',position:'absolute',top:'3px',left:mainSwitch?'25px':'3px',transition:'left 0.2s',boxShadow:'0 1px 3px rgba(0,0,0,0.2)'}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), type = ref('primary'), mainSwitch = ref(true)
const typeList = [{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'warning',l:'警告'},{v:'danger',l:'危险'}]
const typeColors = {primary:'#1a7eff',success:'#09BE4F',warning:'#FFB703',danger:'#FF2B2B'}
const switchItems = ref([{label:'接受通知',value:true,disabled:false},{label:'自动更新',value:false,disabled:false},{label:'深色模式',value:true,disabled:false},{label:'已禁用',value:false,disabled:true}])
</script>
