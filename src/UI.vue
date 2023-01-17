<template>
  <MyHeader v-bind:titre="titre" :statut="open" @ouvrir="ouvrir" />
  <div class="page">
    <MyNav :statut="open" @chgTitre="chgTitre" />
    <main>
    <router-view />
    
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

export default({
  name: 'UI',
  data() {
    return {
      ok: false,
      open: true,
      titre: 'Mon CRM',
      hello: this.$translate('accueil.hello'),
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
  components: { MyHeader, MyNav, MyFooter },
});
</script>

<style scoped>


</style>