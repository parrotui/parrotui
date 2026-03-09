<template>
  <div class="demo-phone" :class="{ 'demo-phone--dark': dark }">
    <div class="demo-phone__nav">
      <span class="demo-phone__title">Divider 分割线</span>
      <button class="demo-phone__dark-btn" @click="dark=!dark">{{ dark?'☀️':'🌙' }}</button>
    </div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">样式</div>
        <div class="demo-tabs">
          <button v-for="s in styles" :key="s.v" class="demo-tab" :class="{active:style===s.v}" @click="style=s.v">{{s.l}}</button>
        </div>
        <div :style="{height:'1px',background:dark?'#333':'#e0e0e0',margin:'12px 0',borderStyle:style,borderTopWidth:style!=='solid'?'1px':'0',borderColor:dark?'#444':'#ddd'}"></div>
      </div>
      <div class="demo-section">
        <div class="demo-label">带文字</div>
        <div class="demo-tabs">
          <button v-for="p in positions" :key="p.v" class="demo-tab" :class="{active:pos===p.v}" @click="pos=p.v">{{p.l}}</button>
        </div>
        <div :style="{display:'flex',alignItems:'center',gap:'8px',margin:'12px 0'}">
          <div v-if="pos!=='start'" :style="{flex:1,height:'1px',background:dark?'#444':'#e0e0e0'}"></div>
          <span :style="{fontSize:'12px',color:dark?'#888':'#999',whiteSpace:'nowrap',padding:'0 4px'}">分割说明</span>
          <div v-if="pos!=='end'" :style="{flex:1,height:'1px',background:dark?'#444':'#e0e0e0'}"></div>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色</div>
        <div class="demo-tabs">
          <button v-for="c in colors" :key="c.v" class="demo-tab" :class="{active:color===c.v}" @click="color=c.v">{{c.l}}</button>
        </div>
        <div :style="{height:'2px',background:colorMap[color],margin:'12px 0',borderRadius:'1px'}"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false)
const style = ref('solid')
const pos = ref('center')
const color = ref('default')
const styles = [{v:'solid',l:'实线'},{v:'dashed',l:'虚线'},{v:'dotted',l:'点线'}]
const positions = [{v:'start',l:'左对齐'},{v:'center',l:'居中'},{v:'end',l:'右对齐'}]
const colors = [{v:'default',l:'默认'},{v:'primary',l:'主要'},{v:'success',l:'成功'},{v:'danger',l:'危险'}]
const colorMap = { default:'#e0e0e0', primary:'#1a7eff', success:'#09BE4F', danger:'#FF2B2B' }
</script>
<!-- 样式来自全局 demo-shared.css -->
