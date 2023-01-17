<template>
  <h1>{{ title }}</h1>
  <pre>{{ order }}</pre>
</template>

<script>
import OrderMixin from '../mixins/OrderMixin';
export default({
  name: 'orderForm',
  data() {
    return {
      title: 'Add an Order',
      order: {
          tjmHt: '',
          nbJours: '',
          tva: 20,
          state: 'OPTION',
          typePresta: '',
          client: '',
          comment: '',
        },
    }
  },
  mounted() {
    // $route pour accéder aux paramètres de la route
    if(this.$route.params.id) {
       this.title = 'Edit an order';
       this.order = this.recupOrder(this.$route.params.id);
      }
  },
  mixins: [OrderMixin]
})
</script>

<style scoped>

</style>