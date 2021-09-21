<template>
  <div class="nav">
    <nuxt-link to="Kevin">Kevin</nuxt-link>
    <nuxt-link to="malo">malo</nuxt-link>
    <nuxt-link to="tom">tom</nuxt-link>
  </div>
</template>

<style scoped>
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 70px;
    background: rgb(216, 216, 216);
  }

  a {
    color: black;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
  }
</style>