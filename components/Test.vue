<template>
  <div>
    <div>{{ $t('common.welcome') }}</div>
    <div>{{ $tn('common.welcome') }}</div>
    <div>{{ $tn('.test') }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  i18nNamespace: 'Test.nested',
  mounted() {
    console.log(this.$t('Test.componentTest'))
    console.log(this.$t('Test.nested.test'))
    console.log(this.$tn('.test'))
  },
})
</script>
