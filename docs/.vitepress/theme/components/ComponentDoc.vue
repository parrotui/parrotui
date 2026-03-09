<template>
  <div class="component-doc-layout">
    <div class="component-doc-layout__content">
      <slot />
    </div>
    <div class="component-doc-layout__preview">
      <PhonePreview :title="title">
        <component :is="demoComponent" />
      </PhonePreview>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
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
  const loader = demoRegistry[props.demo]
  if (loader) {
    return defineAsyncComponent(loader)
  }
  return Placeholder
})
</script>
