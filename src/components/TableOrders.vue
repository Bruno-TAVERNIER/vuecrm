<template>
  <table>
    <tr>
      <th v-for="(head, i) in headers" :key="i">{{ head }}</th>
    </tr>
    <!-- affichage des orders -->
    <tr v-for="order in orders" :key="order.id">
      <td>
        <BIconPencilSquare />
        <BIconTrashFill />
      </td>
      <td>{{ order.typePresta }}</td>
      <td>{{ order.client }}</td>
      <td>{{  order.tva }}</td>
      <td>{{ order.nbJours }}</td>
      <td>{{ order.tjmHt }}</td>
      <td>
        {{ totalHT(order.nbJours, order.tjmHt)}}
      </td>
      <td>
        {{ totalTTC(order) }}
      </td>
      <td>{{  order.comment }}</td>
      <td :class="order.state">{{  order.state }}</td>
    </tr>

  </table>
</template>

<script>
// bi-pencil-square => BIconPencilSquare
import { BIconPencilSquare, BIconTrashFill } from 'bootstrap-icons-vue';
export default({
  name: 'TableOrders',
  props: {
    orders: Object,
    headers: Object
  },
  methods: {
    totalHT(nbJours, tjmHt) {
      return nbJours * tjmHt
    },
    totalTTC({nbJours, tjmHt, tva}) {
      return (nbJours * tjmHt * (100+tva)/100);
    }
  },
  /* ne pas oublier de déclarer les composants importés */
  components: { BIconPencilSquare, BIconTrashFill }
});
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
.OPTION {
  background: var(--app-warning);
}
.CONFIRMED {
  background: var(--app-success);
}
.CANCELED {
  background: var(--app-error);
}
</style>