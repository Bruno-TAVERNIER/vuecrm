<template>
  <table>
    <tr>
      <th v-for="(head, i) in headers" :key="i">{{ head }}</th>
    </tr>
    <!-- pause café -->
    <!-- affichage des orders -->
  </table>
</template>

<script>
export default({
  name: 'TableOrders',
  props: {
    orders: Object,
    headers: Object
  }
});
</script>

<style scoped>
table {
  width: 90%;
  margin: 20px auto;
  border: 1px solid silver;
  border-collapse: collapse;
}
</style>