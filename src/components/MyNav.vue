<template>
  <nav :class="{open: statut, close: !statut}">
    <ul>
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/orders">Orders</router-link>
      </li>
      <li>
        <router-link to="/clients">Clients</router-link>
      </li>
      <li>
        <router-link to="/credits">Crédits</router-link>
      </li>
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
li, li a {
  display: block;
  text-align: center;
  font-size: 1.2em;
  width: 200px;
  margin: 3px auto;
  background: var(--app-dark);
  color: var(--app-light);
  text-decoration: none;
  cursor: pointer
}
li:hover, li a:hover {
  color: var(--app-darklight2)
}
li a.router-link-active {
  background: var(--app-light);
  color: var(--app-dark);
}
</style>