import './assets/main.css'
import {translate,lang,dir} from './mixins/Translate';
import { SnackbarService } from "vue3-snackbar";
import "vue3-snackbar/styles";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SnackbarService);
app.config.globalProperties.$translate = translate;
app.config.globalProperties.$lang = lang;
app.config.globalProperties.$dir = dir;

app.mount('#app')
