<template>
  <div class="platform-table-wrapper">
    <table class="platform-table">
      <thead>
        <tr>
          <th v-for="p in platforms" :key="p.name">{{ p.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="p in platforms" :key="p.name">
            <span v-if="p.supported" class="platform-table__check">&#10003;</span>
            <span v-else class="platform-table__cross">&#10005;</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  support: {
    type: Object,
    default: () => ({})
  }
})

const defaultPlatforms = [
  'App-Vue', 'App-Nvue', 'App-Android', 'App-iOS', 'App-HarmonyOS',
  '微信小程序', '支付宝小程序', '百度小程序', '字节小程序',
  'QQ小程序', 'H5', 'PC', '快手小程序', '钉钉小程序'
]

const platforms = defaultPlatforms.map(name => ({
  name,
  supported: props.support[name] !== false
}))
</script>
