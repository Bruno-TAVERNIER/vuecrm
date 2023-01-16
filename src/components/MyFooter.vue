<template>
  <footer>Copyright &copy; {{ annee }} - Moi</footer>
</template>

<script>
export default({
  name: 'MyFooter',
  data() {
    return {
      //créer une variable JS pour afficher l'année en dynamique
    }
  }
})
</script>

<style scoped>
footer {
  text-align: center;
}
</style>