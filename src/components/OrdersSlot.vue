<template>
  <div>
    <slot></slot> Orders
  </div>
</template>

<style scoped>
/* le Slot est un composant graphique qui permet de personnaliser un affichage comme on a envie
  pas de code ni d'intelligence */
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