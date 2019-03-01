<template>
  <nav class="menu">
    <router-link :to="{ name: 'home'}" exact>Home page</router-link>
    <router-link :to="{ name: 'faq'}">Faq</router-link>
  </nav>
</template>

<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>
