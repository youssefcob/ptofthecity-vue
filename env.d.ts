/// <reference types="vite/client" />
declare module 'vue3-snackbar';

import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $translate: (key: string|undefined) => string; // Adjust the type as needed
    $lang:() => string;
    $dir:() => string;
    $transNumber: (num: number|string|undefined) => string;
  }
}