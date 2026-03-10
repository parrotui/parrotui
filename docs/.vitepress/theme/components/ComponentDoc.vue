<template>
  <div class="component-doc-layout">
    <div class="component-doc-layout__content">
      <slot />
    </div>
    <div class="component-doc-layout__preview">
      <PhonePreview :title="title">
        <ClientOnly>
          <component :is="demoComponent" />
          <template #fallback>
            <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:14px;">加载中...</div>
          </template>
        </ClientOnly>
      </PhonePreview>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PhonePreview from './PhonePreview.vue'
import { demoRegistry } from './demos/index'

const props = defineProps({
  demo: { type: String, required: true },
  title: { type: String, default: 'Preview' }
})

const Placeholder = {
  template: '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:14px;">暂无预览</div>'
}

const demoComponent = computed(() => {
  return demoRegistry[props.demo] || Placeholder
})
</script>
