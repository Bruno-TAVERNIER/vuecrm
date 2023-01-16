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
      <TableOrders :orders="orders" :headers="headers" />
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
      orders: [
        {
          tjmHt: 1200,
          nbJours: 100,
          tva: 20,
          state: 'CONFIRMED',
          typePresta: 'Formation',
          client: 'M2I',
          comment: 'Merci pour la commande',
          id: 1
        },
        {
          tjmHt: 1000,
          nbJours: 20,
          tva: 20,
          state: 'CANCELED',
          typePresta: 'Coaching',
          client: 'MI2',
          comment: 'Oups',
          id: 2
        },
        {
          tjmHt: 1300,
          nbJours: 10,
          tva: 20,
          state: 'OPTION',
          typePresta: 'Formation',
          client: 'MI6',
          comment: 'En attente de la commande',
          id: 3
        }
      ]
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
    }
  },
  // déclaration des composants affichés sur la page
  components: { MyHeader, MyNav, MyFooter, OrdersSlot, TableOrders }
});
</script>

<style scoped>


</style>