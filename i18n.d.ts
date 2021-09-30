/* eslint-disable @typescript-eslint/no-unused-vars */
// This is disabled so that we can properly extend the ComponentOptions interface by ensuring we have all
// declarations of 'ComponentOptions' with identical type parameters
import { Localize, t, tc } from '@sendoso/nuxt-i18n/src'
import {
  DefaultComputed,
  DefaultData,
  DefaultMethods,
  DefaultProps,
  PropsDefinition,
} from 'vue/types/options'

declare module 'vue' {
  export default interface Vue {
    $t: t
    $tc: tc
    $tn: Localize
  }

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
