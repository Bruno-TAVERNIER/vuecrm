<template>
  <MyHeader />
  <div class="container">
    <MyNav />
    <main>Contenu de la page</main>
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
  components: { MyHeader, MyNav, MyFooter}
});
</script>

<style scoped>


</style>