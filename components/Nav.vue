<template>
  <div class="nav">
    <nuxt-link to="/" class="text-green-500 hover:underline">Accueil</nuxt-link>
    <nuxt-link to="Kevin" class="text-green-500 hover:underline">Kevin</nuxt-link>
    <nuxt-link to="malo" class="text-green-500 hover:underline">Malo</nuxt-link>
    <nuxt-link to="tom" class="text-green-500 hover:underline">Tom</nuxt-link>
    <nuxt-link to="mathilde" class="text-green-500 hover:underline">Mathilde</nuxt-link>
    <nuxt-link to="ayoub" class="text-green-500 hover:underline">Ayoub</nuxt-link>
  </div>
</template>

<style scoped>
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 70px;
    background: rgb(207, 191, 193);
  }

  a {
    color: black;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
  }
</style>