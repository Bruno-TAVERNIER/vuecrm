<template>
  <h1>{{ title }}</h1>
  <pre>{{ order }}</pre>
  <form>
    <p>
      <label>Client:</label>
      <!-- v-model bidirectionnel sur saisie (change) 
           v-model.lazy bidirectionnel sur perte de focus du champs (blur) 
           v-model.trim supprime les espaces avant et après le texte saisi 
           v-model.number pour la saisie des nombres -->
      <input v-model="order.client" placeholder="nom du client" />
    </p>
    <!-- order => formulaire 
    state => select 
    comment =>textarea -->

  </form>
</template>

<script>
import OrderMixin from '../mixins/OrderMixin';
export default({
  name: 'orderForm',
  data() {
    return {
      title: 'Add an Order',
      nom: '',
      order: {
          tjmHt: '',
          nbJours: '',
          tva: 20,
          state: 'OPTION',
          typePresta: '',
          client: '',
          comment: '',
        },
    }
  },
  /* surveillance des variables de data(): controle saisie (nombres, etc), valeurs négatives, ... */
  watch: {
    /* fonction pour le champs nom qui recoit la nouvelle valeur et l'ancienne valeur à chaque changement */
    nom(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      /* si plus de 4 caractères => appel API */
    } 
  },
  mounted() {
    // $route pour accéder aux paramètres de la route
    if(this.$route.params.id) {
       this.title = 'Edit an order';
       this.order = this.recupOrder(this.$route.params.id);
      }
  },
  mixins: [OrderMixin]
})
</script>

<style scoped>
  label {
    display: block;
    width: 90%;
    margin: 0 auto;
    font-size: 1.5em;
  }
  input {
    width: 90%;
    margin: 0 auto;
    font-size: 1.5em;
  }
</style>