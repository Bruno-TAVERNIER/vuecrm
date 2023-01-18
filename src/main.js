import { createApp } from 'vue'
import ui from './UI.vue';
import './assets/main.css';

// plugin de traduction
import i18n from './plugins/i18n';
import dico from './plugins/dico-fr-FR';

// pour le routage
import router from './router';

//pour les appels d'API
import axios from 'axios';
import VueAxios from 'vue-axios';

// use permet d'injecter un plugin
createApp(ui).use(router).use(VueAxios, axios).use(i18n, dico).mount('#app')
