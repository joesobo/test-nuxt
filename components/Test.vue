<template>
  <div>
    <!-- Should result in `Hello World!` -->
    <div>{{ $t('common.welcome') }}</div>
    <!-- Should result in `Another one!` -->
    <div>{{ $t('.test') }}</div>
    <!-- Should result in `car` -->
    <div>{{ $t('common.car', 1) }}</div>
    <!-- Should result in `cars` -->
    <div>{{ $t('common.car', 2) }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  i18nNamespace: 'Test.nested',
  mounted() {
    // Should result in `This is a test`
    console.log(this.$t('Test.componentTest'))
    // Should result in `Another one!`
    console.log(this.$t('.test'))
    // Should result in `cars`
    console.log(this.$t('common.car', 2))
  },
})
</script>
