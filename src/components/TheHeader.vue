<template>
  <div class="nav">
    <div class="container">
      <router-link to="/" class="nav__link">Blog</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  padding: 1rem 0rem;
  text-align: left;
  background: #f0f0f0;
  margin-bottom: 3rem;

  &__link{
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-transform: uppercase;
    letter-spacing: 3px;

    &.router-link-exact-active {
      color: #d02053;
    }
  }
}
</style>