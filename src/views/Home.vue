<template>
  <h1>Accueil</h1>
  {{ $translate('accueil.hello') }}
  {{  hello  }}
  {{  $maFonction() }}
  {{  $double(5) }}
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
</template>

<script>
export default({
  name: 'Home',
  data() {
    return {
      ok: false,
      hello: this.$translate('accueil.hello'),
      tableau: [3,5,7,9,2,8,6,0],
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
    }    
  },
})
</script>

<style scoped>

</style>