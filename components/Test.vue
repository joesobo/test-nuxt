<template>
  <div>{{ $test('.accountBalance') }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  i18nNamespace: 'components.layouts.appSidebar',
  mounted() {
    // console.log(this.$options.i18nNamespace)
    console.log(Vue.prototype)
    // console.log(Vue.prototype.$test)
    // console.log(Vue.prototype.$test)
    // console.log(this.$test)
    console.log(this.$test('.touches'))
  },
})
</script>
