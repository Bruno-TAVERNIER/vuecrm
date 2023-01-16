<template>
  <header>
    <BIconList class="x3" v-show="!statut"  @click="$emit('ouvrir')"/>
    <BIconXSquare class="x3" v-show="statut" @click="ouvrir"/>
    <h1 :style="monStyle">{{ titre }}</h1>
  </header>
</template>

<script>
import { BIconList, BIconXSquare } from 'bootstrap-icons-vue'; //pour bi-list
export default({
  name: 'MyHeader',
  data() {
    return {
      /*titre: 'Mon CRM',*/
      monStyle: {color: 'red'}
    }
  },
  // propriétés venant du composant parent 
  props: {
    titre: String,
    statut: Boolean
  },
  // déclaration des composants de la page 
  components: {
    BIconList, BIconXSquare
  },
  // dans methods on place nos fonctions perso
  methods: {
    ouvrir() {
      //console.log('ouvrir');
      this.$emit('ouvrir'); //émission d'un évènement vers le composant parent
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
header {
  display: flex;
}
h1 {
  font-size: 2em;
}
.x3 {
  font-size: 2em;
  margin-right: 5px;
}
</style>