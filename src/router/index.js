/* fichier de routage pour Vue */
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'

/* définition des routes: association d'un path et d'un composant */
const routes = [
  /* page d'accueil */
  {
    path: '/', /* pour la navigation et les redirections via une url */
    name: 'home', /* pour la navigation et les redirections en se servant du nom */
    component: Home //chargement direct
  },
  {
    path: '/credits',
    name: 'credits',
    component: () => import('../views/credits.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/orders.vue')
  },
  /* autres routes: formulaire ajout/creation orders */
  {
    path: '/addorder',
    name: 'addorder',
    component: () => import('../views/orderForm.vue')
  },
  {
    path: '/editorder/:id',
    name: 'editorder',
    component: () => import('../views/orderForm.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/E404.vue') /* page erreur 404 */
  }
]
/* pause café ! */

/* historique du navigateur */
const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;