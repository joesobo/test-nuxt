/* eslint-disable @typescript-eslint/no-unused-vars */
import { Localize, t, tc } from '@sendoso/nuxt-i18n/dist/types'
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
