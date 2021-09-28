<template>
  <div>
    <!-- Should result in `Hello World!` -->
    <div>{{ $t('common.welcome') }}</div>
    <!-- Should result in `Error` -->
    <div>{{ $tn('common.welcome') }}</div>
    <!-- Should result in `Another one!` -->
    <div>{{ $tn('.test') }}</div>
    <!-- Should result in `car` -->
    <div>{{ $tc('common.car', 1) }}</div>
    <!-- Should result in `cars` -->
    <div>{{ $tc('common.car', 2) }}</div>
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
    console.log(this.$t('Test.nested.test'))
    // Should result in `cars`
    console.log(this.$tc('common.car', 2))
    // Should result in `Another one!`
    console.log(this.$tn('.test'))
  },
})
</script>
