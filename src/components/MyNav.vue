<template>
  <nav :class="{open: statut, close: !statut}">
    <ul>
      <li>Orders</li>
      <li>Clients</li>
    </ul>
    <button>Changer le titre</button>
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