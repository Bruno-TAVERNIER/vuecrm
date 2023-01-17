import { createApp } from 'vue'
import ui from './UI.vue';
import './assets/main.css'
// plugin de traduction
import i18n from './plugins/i18n';
//le dictionnaire est lié à la langue définie dans le navigateur
import dico from './plugins/dico-fr-FR';

// pour le routage
import router from './router';

// use permet d'injecter un plugin
createApp(ui).use(router).use(i18n, dico).mount('#app')
