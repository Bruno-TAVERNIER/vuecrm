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
      ]
    }
  }
})
</script>

<style scoped>

</style>