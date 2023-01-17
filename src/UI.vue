<template>
  <MyHeader v-bind:titre="titre" :statut="open" @ouvrir="ouvrir" />
  <div class="page">
    <MyNav :statut="open" @chgTitre="chgTitre" />
    <main>
    <router-view />
    </main>
  </div>
  <MyFooter />
</template>

<script>
// le template => interface affichée dans le navigateur 
// script => variables, évènements, hooks, ...
//style => mise en forme CSS. Si "scoped" uniquement le composant 
//import des composants + déclaration dans 'components'
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyNav from './components/MyNav.vue';

export default({
  name: 'UI',
  data() {
    return {
      open: true,
      titre: 'Mon CRM'      
    }
  },
  // methods contient nos propres fonctions
  methods: {
    ouvrir() {
      this.open = !this.open;
    },
    // la demande de changement de titre vient du composant enfant <MyNav />
    chgTitre() {
      this.titre = "Mon nouveau titre";
    }    
  },
  // déclaration des composants affichés sur la page
  components: { MyHeader, MyNav, MyFooter },
});
</script>

<style scoped>

</style>