declare module 'vue-slicksort' {
  import Vue, { DirectiveOptions, VueConstructor } from 'vue';

  export const ContainerMixin: VueConstructor<Vue>;
  export const ElementMixin: VueConstructor<Vue>;

  export const SlickList: VueConstructor<Vue>;
  export const SlickItem: VueConstructor<Vue>;

  export const HandleDirective: DirectiveOptions;

  export function arrayMove<T>(
    arr: Array<T>,
    prevIndex: number,
    newIndex: number
  ): Array<T>;
}
