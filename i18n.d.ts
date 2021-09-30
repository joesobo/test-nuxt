/* eslint-disable @typescript-eslint/no-unused-vars */
// This is disabled so that we can properly extend the ComponentOptions interface by ensuring we have all
// declarations of 'ComponentOptions' with identical type parameters
import {
  DefaultComputed,
  DefaultData,
  DefaultMethods,
  DefaultProps,
  PropsDefinition,
} from 'vue/types/options'

declare module 'vue/types/vue' {
  export default interface Vue {
    $t: (key: string, values?: any) => string
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<
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
