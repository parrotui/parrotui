<template>
  <div class="demo-phone" :class="{'demo-phone--dark':dark}">
    <div class="demo-phone__nav"><span class="demo-phone__title">Rating 评分</span><button class="demo-phone__dark-btn" @click="dark=!dark">{{dark?'☀️':'🌙'}}</button></div>
    <div class="demo-phone__body">
      <div class="demo-section">
        <div class="demo-label">点击评分（当前：{{score}}星）</div>
        <div style="display:flex;gap:6px;margin-top:8px">
          <span v-for="n in 5" :key="n" @click="readonly?null:score=n" :style="{fontSize:'28px',cursor:readonly?'default':'pointer',filter:n<=score?'none':'grayscale(1)',opacity:n<=score?1:0.25,transition:'all 0.15s'}">⭐</span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">只读模式</div>
        <div class="demo-tabs"><button class="demo-tab" :class="{active:readonly}" @click="readonly=!readonly">{{readonly?'只读':'可编辑'}}</button></div>
      </div>
      <div class="demo-section">
        <div class="demo-label">颜色自定义</div>
        <div class="demo-tabs"><button v-for="c in colors" :key="c.v" class="demo-tab" :class="{active:starColor===c.v}" @click="starColor=c.v">{{c.l}}</button></div>
        <div style="display:flex;gap:6px;margin-top:8px">
          <span v-for="n in 5" :key="n" @click="score=n" :style="{fontSize:'26px',cursor:'pointer',color:n<=score?starColor:'#ddd',transition:'color 0.15s'}">★</span>
        </div>
      </div>
      <div class="demo-section">
        <div class="demo-label">场景示例</div>
        <div v-for="item in reviews" :key="item.name" class="demo-row" style="flex-direction:column;align-items:flex-start;gap:4px">
          <div style="display:flex;justify-content:space-between;width:100%">
            <span :style="{color:dark?'#e5e5e5':'#333',fontSize:'13px',fontWeight:600}">{{item.name}}</span>
            <span style="font-size:12px">{{Array(item.score+1).join('⭐')}}</span>
          </div>
          <span :style="{color:dark?'#aaa':'#999',fontSize:'12px'}">{{item.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dark = ref(false), score = ref(4), readonly = ref(false), starColor = ref('#FFB703')
const colors = [{v:'#FFB703',l:'金色'},{v:'#FF2B2B',l:'红色'},{v:'#1a7eff',l:'蓝色'}]
const reviews = [{name:'张三',score:5,text:'非常好用，强烈推荐！'},{name:'李四',score:4,text:'挺好的，细节待优化'},{name:'王五',score:3,text:'一般般，有待改进'}]
</script>
