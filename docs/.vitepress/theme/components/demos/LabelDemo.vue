<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Label 标签</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">基础样式</div>
        <div class="demo-row"><span :style="{color:dark?'#e5e5e5':'#333',fontSize:'15px'}">用户名</span></div>
        <div class="demo-row"><span :style="{color:'#FF2B2B',fontSize:'12px',marginRight:'2px'}">*</span><span :style="{color:dark?'#e5e5e5':'#333',fontSize:'15px'}">密码（必填）</span></div>
        <div class="demo-row"><span :style="{color:'#FF2B2B',fontSize:'12px',marginRight:'2px'}">*</span><span :style="{color:dark?'#e5e5e5':'#333',fontSize:'15px'}">姓名：（必填+冒号）</span></div>
      </div>
      <div class="demo-section">
        <div class="demo-label">必填标记</div>
        <div class="demo-tabs">
          <button class="demo-tab" :class="{active:required}" @click="required=!required">{{required?'显示':'隐藏'}}</button>
          <button class="demo-tab" :class="{active:colon}" @click="colon=!colon">冒号{{colon?'开':'关'}}</button>
        </div>
        <div class="demo-row">
          <span v-if="required" style="color:#FF2B2B;font-size:12px;margin-right:2px">*</span>
          <span :style="{color:dark?'#e5e5e5':'#333',fontSize:'15px'}">手机号{{colon?'：':''}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), required = ref(true), colon = ref(false)
</script>
