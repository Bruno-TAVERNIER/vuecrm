<template>
   <h1>{{ $translate('credits.titre') }}</h1>

  <ul>
    <li v-for="(credit, i) in credits" :key="i">
      <a :href="credit.url" target="_blank">{{ credit.name }}</a>
    </li>
  </ul>
</template>

<script>
/* sert à citer et remercier tous les composants externes, plugins, libs, etc */
export default({
  name: 'Credits',
  data() {
    return {
      credits: [
        {url: 'https://vuejs.org', name: 'Vue JS'},
        {url: 'https://router.vuejs.org', name: 'Vue Router'},
        {url: 'https://bootstrap-vue.org/docs/icons', name: 'Vue Bootstrap Icons'},
        {url: 'https://axios-http.com/fr/docs/intro', name: 'Axios'},
        {url: 'https://www.npmjs.com/package/vue-axios', name: 'Vue-Axios'},
      ]
    }
  }
})
</script>

<style scoped>
ul {
  display: block;
  width: 400px;
  margin: 0 auto;
  font-size: 1.5em;
  text-align: center;
}
li {
  margin: 10px;
  padding: 5px;
  background: var(--app-dark);
  border-radius: 5px;
}
a {
  color: var(--app-light);
}
li:hover {
  background: var(--app-darklight2);
}
</style>