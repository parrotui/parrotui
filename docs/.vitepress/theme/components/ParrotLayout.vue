<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!--
      注入高度为 0 的 layout-top slot。
      VitePress 内部通过 ResizeObserver 监测 #layout-top 元素的高度，
      动态更新 --vp-layout-top-height CSS 变量。
      注入一个 0 高度的空 div，让变量真正变成 0px，消除 VPContent 的顶部空白。
    -->
    <template #layout-top>
      <div style="height:0;overflow:hidden;visibility:hidden;" aria-hidden="true"></div>
    </template>
  </Layout>
</template>
