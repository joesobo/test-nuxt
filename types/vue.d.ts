import { NuxtApp } from '@nuxt/types/app'
import { Localize, NamespaceLocalize } from '@sendoso/vue-i18n/src/plugin'

type ExtendedNuxtApp = NuxtApp & {
  $tn: NamespaceLocalize
}

declare module 'vue' {
  export default interface Vue {
    $t: Localize
    $tn: NamespaceLocalize
  }
}
