<template>
  <nav :class="{open: statut, close: !statut}">
    <ul>
      <li>Orders</li>
      <li>Clients</li>
    </ul>
    <button @click="chgTitre">Changer le titre</button>
  </nav>
</template>

<script>
export default({
  name: 'MyNav',
  props: {
    statut: Boolean
  },
  mounted() {
    console.log(this.statut);
  },
  methods: {
    chgTitre() {
      //j'envoie un évènement au composant parent (UI) pour lui demander de changer le titre
      this.$emit('chgTitre');
    }
  }
})
</script>

<style scoped>
.close {
  display: none;
}
.open {
  display: block;
}
</style>