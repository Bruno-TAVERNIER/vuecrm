<template>
  <footer>Copyright &copy; {{ annee }} {{ new Date().getFullYear() }} - Moi</footer>
</template>

<script>
export default({
  name: 'MyFooter',
  data() {
    return {
      //créer une variable JS pour afficher l'année en dynamique
      annee: new Date().getFullYear()
    }
  }
})
</script>

<style scoped>
footer {
  text-align: center;
}
</style>