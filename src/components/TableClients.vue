<template>
  <table>
    <tr>
      <th v-for="(head, i) in headers" :key="i">{{ head }}</th>
    </tr>
    <tr v-for="client in clients" :key="client.id">
      <td>
        <BIconPencilSquare @click="go(client.id)"/>
        <!-- pour la suppression un demande au parent de supprimer l'élément du tableau orders -->
        <BIconTrashFill @click="$emit('supp', client.id)" class="iconSupp"/>
      </td>
      <td>{{ client.nom }}</td>
      <td>{{  client.totalCaHt }}</td>
      <td>{{  client.tva }}</td>
      <td>{{  totalTTC(client) }}</td>
      <td>{{  client.comment }}</td>
      <td :class="client.state">
        <select v-model="client.state" @change="$emit('chgSts', client)" :class="client.state">
          <option class="ACTIVE">ACTIVE</option>
          <option class="INACTIVE">INACTIVE</option>
        </select>  
      </td>
    </tr>
  </table>
</template>

<script>
import { BIconPencilSquare, BIconTrashFill } from 'bootstrap-icons-vue';

export default({
  name: 'TableClients',
  methods: {
    totalTTC({totalCaHt, tva}) {
      return (totalCaHt * (100 + tva)/100);
    },
    go(id) {
      this.$router.push({name: 'editclient', params: {id: id}});
    }
  },
  props: {
    clients: Object,
    headers: Object
  },
  components: { BIconPencilSquare, BIconTrashFill }
})
</script>

<style scoped>
table {
  width: 90%;
  margin: 20px auto;
  border: 1px solid silver;
  border-collapse: collapse;
  font-size: 1.4em;
}
th {
  background: var(--app-dark);
  color: var(--app-light);
}
th, td {
  padding: 10px 0px;
}
tr:nth-child(odd) {
  background: var(--app-dark);
  color: var(--app-light);
}
select {
  width: 100%;
  font-size: 1em;
  text-align: center;
}
.ACTIVE {
  background: var(--app-success);
}
.INACTIVE {
  background: var(--app-error);
}
.iconSupp:hover {
  cursor: pointer;
}
</style>