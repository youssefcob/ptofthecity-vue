/// <reference types="vite/client" />
declare module 'vue3-snackbar';

import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string; // Adjust the type as needed
    $lang:() => string;
    $dir:() => string;
  }
}