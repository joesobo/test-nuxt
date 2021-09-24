<template>
  <div>{{ $tt('.accountBalance') }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  i18nNamespace: 'components.layouts.appSidebar',
  mounted() {
    console.log(this.$tt('.touches'))
  },
})
</script>
