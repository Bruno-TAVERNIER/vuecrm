<template>
  <header>
    <h1 :style="monStyle">{{ titre }}</h1>
  </header>
</template>

<script>

export default({
  name: 'MyHeader',
  data() {
    return {
      titre: 'Mon CRM',
      monStyle: {color: 'red'}
    }
  },
  beforeCreate() {
    console.log('avant la création du composant');
  },
  created() {
    console.log('composant créé');
  },
  beforeMount() {
    console.log('composant créé mais pas encore chargé');
  },
  mounted() { //le plus utilisé
    console.log('composant chargé dans le navigateur et pret');
    //this.titre = 'Nouveau titre';
    //this.monStyle.color = 'blue';
  },
  beforeUpdate() {
    console.log('le composant va être mis à jour');
  },
  updated() {
    console.log('le composant a été mis à jour');
  },
  beforeUnmount() {
    console.log('le composant va être détruit');
  }
})
</script>

<style scoped>
h1 {
  font-size: 2em;
}
</style>