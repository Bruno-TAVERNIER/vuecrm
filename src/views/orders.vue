<template>
  <h1>Orders List</h1>
  <!-- la fonction nombreOrders est mise en cache donc pas de recalcul à chaque mise à jour -->
  <OrdersSlot>{{ nombreOrders }}</OrdersSlot>
  <TableOrders :orders="orders" :headers="headers" @supp="supp" @chgSts="chgSts"/>
  <router-link to="/addorder">Ajouter</router-link>
</template>

<script>
import OrdersSlot from '../components/OrdersSlot.vue';
import TableOrders from '../components/TableOrders.vue';
import OrderMixin from '../mixins/OrderMixin';
export default({
  name: 'Orders',
  data() {
    return {
      headers: [
        'Actions',
        'Type',
        'Client',
        'Taux TVA',
        'Nb Jours',
        'TJM HT',
        'Total HT',
        'Total TTC',
        'Commentaire',
        'Statut'
      ],
    }
  },
  computed: {
    /* computed = fonction mise en cache, pas de paramètres et retour obligatoire */
    nombreOrders() {
      return this.orders.length;
    }
  },
 /*methods: {
    supp(id){
      //console.log(id);
      //trouver l'élément via son id et le supprimer du tableau
      
      // créer un nouveau tableau sans l'id recherché
      let nouveauTableau = this.orders.filter((order) => order.id !== id);
      //console.log(nouveauTableau);
      this.orders = nouveauTableau;
      // trouver l'index dans le tableau et le supprimer (slice)
      //boucle sur tous les éléments du tableau
      /*for(let i=0; i<this.orders.length; i++) {
        // si id trouvé on supprime l'élément dans le tableau
        // splice(index, nombre)
        //supprimer le premier this.orders.shift()
        //supprimer le dernier this.orders.pop()
        //delete this.orders[0] supprime l'élément mais ne réindexe pas le tableau
        if(this.orders[i].id === id) this.orders.splice(i, 1);
      }      

    },
  },*/
  components: {
    OrdersSlot, TableOrders
  },
  mixins: [OrderMixin]
})
</script>

<style scoped>
a {
  font-size: 1.5em;
  text-decoration: none;
  border: 1px solid blue;
  padding: 2px;
  margin-left: 60px;
}
</style>