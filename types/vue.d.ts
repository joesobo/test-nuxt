/* eslint-disable @typescript-eslint/no-unused-vars */
// This is disabled so that we can properly extend the ComponentOptions interface by ensuring we have all
// declarations of 'ComponentOptions' with identical type parameters
import { NuxtApp } from '@nuxt/types/app'
import { Localize, t, tc } from '@sendoso/vue-i18n'
import {
  DefaultComputed,
  DefaultData,
  DefaultMethods,
  DefaultProps,
  PropsDefinition,
} from 'vue/types/options'

type ExtendedNuxtApp = NuxtApp & {
  $tn: Localize
}

declare module 'vue' {
  export default interface Vue {
    $t: t
    $tc: tc
    $tn: Localize
  }
}

declare module 'vue' {
  export interface ComponentOptions<
    V extends Vue,
    Data = DefaultData<V>,
    Methods = DefaultMethods<V>,
    Computed = DefaultComputed,
    PropsDef = PropsDefinition<DefaultProps>,
    Props = DefaultProps
  > {
    i18nNamespace?: string
  }
}
