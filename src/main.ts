import './assets/main.css'
import { translate, lang, dir, transNumbers } from './mixins/Translate';
import { SnackbarService } from "vue3-snackbar";
import "vue3-snackbar/styles";
import  VueGtag  from 'vue-gtag';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueReCaptcha } from 'vue-recaptcha-v3';

import App from './App.vue'
import router from './router'

const app = createApp(App)

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

app.use(createPinia())
app.use(router)

app.use(VueGtag, {
    appName: 'PtOfTheCity',
    // pageTrackerScreenviewEnabled: true,
    config: { id: "G-93CT249TES" }
},router);

app.use(VueReCaptcha, {
    siteKey: '6Ld5qCsqAAAAACIGSGtxSkE8wtI2c6i9bGfI3xqp',
    loaderOptions: {
        // autoHideBadge:true
    }
  });
  

// site key 6Ld5qCsqAAAAACIGSGtxSkE8wtI2c6i9bGfI3xqp
// secret key 6Ld5qCsqAAAAALVZojnrolW26hqAHw-54TK406JD
app.use(SnackbarService);
app.mount('#app')
