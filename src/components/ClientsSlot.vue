<template>
  <div>
    <slot></slot> Clients
  </div>
</template>

<style scoped>
div {
  background: var(--app-dark);
  color: var(--app-light);
  font-size: 2em;
  height: 40px;
  line-height: 40px;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 5px 5px 2px rgba(50,50,50, .5);
}
</style>