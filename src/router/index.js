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
    component: () => import('../views/credits.vue') //lazy loading: chargement uniquement à la demande
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
    path: '/editorder/:id', /*paramètre dynamique dans l'url qui sera dans $route.params.id */
    name: 'editorder',
    component: () => import('../views/orderForm.vue')
  },
  /* clients */
  {
    path: '/clients',
    name: 'clients',
    component: () => import('../views/clients.vue')
  },
  /* autres routes: formulaire ajout/creation orders */
  {
    path: '/addclient',
    name: 'addclient',
    component: () => import('../views/clientForm.vue')
  },
  {
    path: '/editclient/:id', /*paramètre dynamique dans l'url qui sera dans $route.params.id */
    name: 'editclient',
    component: () => import('../views/clientForm.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/E404.vue') /* page erreur 404 */
  }
]

/* historique du navigateur */
const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;