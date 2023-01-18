<template>
  <h1>{{ titre }}</h1>
  <div>
    <p>
      <label>Client</label>
      <input v-model="client.nom" placeholder="nom du client" />
    </p>
    <p>
      <label>Total CA HT</label>
      <input v-model.number="client.totalCaHt" placeholder="Chiffre d'affaire total HT" />
    </p>
    <p>
      <label>Taux TVA</label>
      <input v-model.number="client.tva" placeholder="Taux de TVA" />
    </p>
    <p>
      <label>Statut</label>
      <select v-model="client.state">
        <option selected disabled>Sélectionnez un statut</option>
        <option>ACTIVE</option>
        <option>INACTIVE</option>
      </select>
    </p>
    <p>
      <label>Commentaire</label>
      <textarea v-model="client.comment" rows="10" maxlength="300"></textarea>
    </p>
    <p class="center">
      <button @click="save">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>
    </p>
  </div>
</template>

<script>
import ClientMixin from '../mixins/ClientMixin';
export default({
  name: 'ClientForm',
  data() {
    return {
      titre: 'Add a client',
      client: {
        nom: '',
        totalCaHt: 0,
        tva: 20,
        state: 'INACTIVE',
        comment: ''
      }
    }
  },
  mounted() {
    if(this.$route.params.id) {
      this.titre = 'Edit a client',
      this.client = this.readClient(this.$route.params.id);
    }
  },
  mixins: [ClientMixin]
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