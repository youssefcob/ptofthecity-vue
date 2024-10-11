import './assets/main.css'
import { translate, lang, dir, transNumbers } from './mixins/Translate';
import { SnackbarService } from "vue3-snackbar";
import "vue3-snackbar/styles";
import  VueGtag  from 'vue-gtag';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { useScriptTag } from '@vueuse/core';
import { createHead } from '@vueuse/head';

import App from './App.vue'
import router from './router'

const head = createHead()
const app = createApp(App)

const recaptcha_key = import.meta.env.VITE_RECAPTCHA_KEY;
// const recaptcha_key = "6LetOkcqAAAAAJgBkAuqklddwYBcBWdnG3m-kn6_";
useScriptTag(`https://www.google.com/recaptcha/api.js?render=${recaptcha_key}`);

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $translate: (key: string | undefined) => string; // Adjust the type as needed
        $lang: () => string;
        $dir: () => string;
        $transNumber: (num: number | string | undefined) => string;
    }
}

app.config.globalProperties.$translate = translate;
app.config.globalProperties.$lang = lang;
app.config.globalProperties.$dir = dir;
app.config.globalProperties.$transNumber = transNumbers;

app.use(head)
app.use(createPinia())
app.use(router)
app.use(VueGtag, {
    appName: 'PtOfTheCity',
    // pageTrackerScreenviewEnabled: true,
    config: { id: "G-93CT249TES" }
},router);

app.use(VueReCaptcha, {
    siteKey: recaptcha_key,
    loaderOptions: {
        // autoHideBadge:true
    }
  });
  

// site key 6Ld5qCsqAAAAACIGSGtxSkE8wtI2c6i9bGfI3xqp
// secret key 6Ld5qCsqAAAAALVZojnrolW26hqAHw-54TK406JD
app.use(SnackbarService);
app.mount('#app')
