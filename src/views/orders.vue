<template>
      <h1>Orders List</h1>
      <OrdersSlot>{{ orders.length }}</OrdersSlot>
      <TableOrders :orders="orders" :headers="headers" @supp="supp" @chgSts="chgSts"/>
</template>

<script>

</script>

<style scoped>

</style>