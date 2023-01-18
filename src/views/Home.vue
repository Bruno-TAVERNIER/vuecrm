<template>
  <h1>{{ $translate('accueil.titre') }}</h1>
  <p>{{ $translate('accueil.hello') }}</p>
  <p>{{  hello  }}</p>
  <p>{{  $translate('accueil.content') }}</p>
  <p>{{  $maFonction() }}</p>
  <p>{{  $double(5) }}</p>
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
  <!-- transitions -->
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">Hello le monde !</p>
  </Transition>
  <Transition name="slide">
    <p v-if="show">Hello le monde !</p>
  </Transition>

  <button @click="tableau.pop()">Oups</button>
  <TransitionGroup name="shift" tag="ul">
    <li v-for="(nb, i) in tableau" :key="i">{{ nb }}</li>
  </TransitionGroup>
</template>

<script>
export default({
  name: 'Home',
  data() {
    return {
      ok: false,
      show: false,
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
.v-enter-active, .v-leave-active {
  transition: opacity 1.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s linear;
}
.slide-enter-from, .slide-leave-to {
 opacity: 0;
}
.shift-enter-active, .shift-leave-active {
  transition: margin .5s linear;
}
.shift-enter-from, .shift-leave-to {
 margin-left: -500px;
}
</style>