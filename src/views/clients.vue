<template>
  <h1>Clients List</h1>
  <ClientsSlot v-show="haveClients">{{ nombreClients }}</ClientsSlot>
  <p v-show="!haveClients" class="noClient">Aucun client à afficher</p>
  <TableClients v-show="haveClients" :clients="clients" :headers="headers" @supp="supp" @chgSts="chgSts" />
  <router-link to="/addclient">Ajouter</router-link>
</template>

<script>
import ClientsSlot from '../components/ClientsSlot.vue';
import TableClients from '../components/TableClients.vue';
import ClientMixin from '../mixins/ClientMixin';
export default({
  name: 'Clients',
  data() {
    return {
      headers: [
        'Actions',
        'Client',
        'CA Total HT',
        'TVA',
        'CA Total TTC',
        'Commentaire',
        'Statut'
      ],
    }
  },
  computed: {
    nombreClients() {
      return this.clients.length;
    },
    haveClients() {
      return this.clients.length > 0 ? true : false; 
    }
  },
  components: {ClientsSlot, TableClients},
  mixins: [ClientMixin]
});

</script>

<style scoped>
a {
  font-size: 1.5em;
  text-decoration: none;
  border: 1px solid blue;
  padding: 2px;
  margin-left: 80px;
}
.noClient {
  background: var(--app-dark);
  color: var(--app-light);
  font-size: 2em;
  height: 40px;
  line-height: 40px;
  width: 350px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 5px 5px 2px rgba(50,50,50, .5);
}
</style>