<template>
  <h1>{{ title }}</h1>
  <!--<pre>{{ order }}</pre> vue permet d'afficher du json directement -->
  <div>
    <p>
      <label>Client</label>
      <!-- v-model bidirectionnel sur saisie (change) 
           v-model.lazy bidirectionnel sur perte de focus du champs (blur) 
           v-model.trim supprime les espaces avant et après le texte saisi 
           v-model.number pour la saisie des nombres -->
      <input v-model="order.client" placeholder="nom du client" />
    </p>
    <p>
      <label>Type de prestation</label>
      <input v-model="order.typePresta" placeholder="type de prestation" />
    </p>
    <p>
      <label>Nombre de jours</label>
      <input v-model.number="order.nbJours" placeholder="nombre de jours" />
    </p>
    <p>
      <label>Taux Journalier HT</label>
      <input v-model.number="order.tjmHt" placeholder="taux journalier HT" />
    </p>
    <p>
      <label>Taux de TVA</label>
      <input v-model.number="order.tva" placeholder="taux de TVA" />
    </p>
    <p>
      <label>Statut</label>
      <select v-model="order.state">
        <option selected disabled>Sélectionnez un statut</option>
        <option>CONFIRMED</option>
        <option>OPTION</option>
        <option>CANCELED</option>
      </select>
    </p>
    <p>
      <label>Commentaire</label>
      <textarea v-model="order.comment" rows="10" maxlength="300"></textarea>
    </p>
    <p class="center">
      <button @click="save">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>
    </p>
    <!-- order => formulaire 
    state => select 
    comment =>textarea -->

  </div>
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
  p {
    margin: 20px 0px;
  }
  label {
    display: block;
    width: 90%;
    margin: 5px auto;
    font-size: 1.5em;
  }
  input, textarea, select {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
    font-size: 1.5em;
    border-radius: 5px;
  }
  .center {
    text-align: center;
  }
  button {
    margin: 0 auto;
    padding: 5px;
    font-size: 1.5em;
    border-radius: 5px;
    background: var(--app-dark);
    color: var(--app-light);
  }
</style>