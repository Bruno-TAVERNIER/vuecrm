<template>
  <MyHeader v-bind:titre="titre" :statut="open" @ouvrir="ouvrir" />
  <div class="page">
    <MyNav :statut="open" @chgTitre="chgTitre" />
    <main>
      Contenu de la page
      <p v-if="ok">Contenu affiché si ok est vraie</p>
      <p v-else>Contenu affiché si ok est fausse</p>
      <p v-show="ok">Contenu affiché si ok est vraie, sinon display: none</p>
      <p v-show="!ok">Contenu afiché si ok est fausse, sinon display: none</p>
      <ul>
        <li v-for="i in 10" :key="i">{{ i }}</li>
      </ul>
      <span v-for="(i, j) in [3,5,7,9,2,8,3]" :key="j">
        Valeur de i: {{ i }} ayant l'index: {{ j }}<br />
      </span>
      <span v-for="(i, j) in tableau" :key="j">
        Valeur de i: {{ i }} ayant l'index: {{ j }}<br />
      </span>
      <button v-on:click.once="maFonction">Cliquez ici</button>
      <button @click="maFonction">ou cliquez là</button>
      <div @click.left="lclic" @click.prevent.right="rclic">Une souris verte</div>

      <OrdersSlot>{{ orders.length }}</OrdersSlot>
      <TableOrders :orders="orders" :headers="headers" @supp="supp" @chgSts="chgSts"/>
    </main>
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
import OrdersSlot from './components/OrdersSlot.vue';
import TableOrders from './components/TableOrders.vue';
// import du mixin 
import OrderMixin from './mixins/OrderMixin';

export default({
  name: 'UI',
  data() {
    return {
      ok: false,
      open: true,
      titre: 'Mon CRM',
      tableau: [3,5,7,9,2,8,6,0],
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
  // methods contient nos propres fonctions
  methods: {
    maFonction() {
      alert('ok');
    },
    lclic() {
      console.log('clic gauche');
    },
    rclic() {
      //utilisation de prevent pour éviter l'affichage du menu contextuel
      console.log('clic droit');
    },
    ouvrir() {
      this.open = !this.open;
    },
    // la demande de changement de titre vient du composant enfant <MyNav />
    chgTitre() {
      this.titre = "Mon nouveau titre";
    },
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
      } */     

    },
    
  },
  // déclaration des composants affichés sur la page
  components: { MyHeader, MyNav, MyFooter, OrdersSlot, TableOrders },
  mixins: [OrderMixin]
});
</script>

<style scoped>


</style>