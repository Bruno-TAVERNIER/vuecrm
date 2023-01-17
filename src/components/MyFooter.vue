<template>
  <footer>Copyright &copy; {{ annee }} {{ new Date().getFullYear() }} - Moi
    {{ cpt }} <button @click="decrement">--</button>
  </footer>
  
</template>

<script>
import OrderMixin from '../mixins/OrderMixin';
export default({
  name: 'MyFooter',
  data() {
    return {
      //créer une variable JS pour afficher l'année en dynamique
      annee: new Date().getFullYear()
    }
  },
  mixins: [OrderMixin],

})
</script>

<style scoped>
footer {
  text-align: center;
}
</style>