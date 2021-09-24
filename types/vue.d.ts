import { NuxtApp } from '@nuxt/types/app'
import VueI18n from 'vue-i18n'
import { Localize } from '@sendoso/vue-i18n/src/plugin'

type ExtendedNuxtApp = NuxtApp & {
  $t: typeof VueI18n.prototype.t
  $tt: Localize
}

declare module 'vue' {
  export default interface Vue {
    $tt: Localize
  }
}
