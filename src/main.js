import { createApp } from 'vue'
import UI from './UI.vue';
import './assets/main.css'
// plugin de traduction
import i18n from './plugins/i18n';
//le ditionnaire est lié à la langue définie dans le navigateur
import dico from './plugins/dico-fr-FR';

// use permet d'injecter un plugin
createApp(UI).use(i18n, dico).mount('#app')
