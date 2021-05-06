<template>
  <header class="header d-flex justify-content-center">
    <nuxt-link to="/" :class="{ thin: $route.path == '/' }" class="home">{{
      title
    }}</nuxt-link>
    <nav></nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    },
    ticketLink: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';
@import url('https://use.typekit.net/fmp2wuw.css');
@import url('https://use.typekit.net/rbh5reg.css');
header {
  font-family: gopher, adobe-garamond-pro, serif;
}
.header {
  padding: 0.7rem;
  max-width: var(--width-medium);
  box-sizing: border-box;
  margin: 0 auto;
  font-size: 1.34rem;
}
.home {
  text-decoration: underline !important;
}
@media screen and (max-width: 520px) {
  .header {
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 520px) {
  nav {
    display: flex;
    justify-content: flex-end;
  }
  nav a {
    margin-left: 2rem;
  }
}
.thin {
  font-weight: 600 !important;
}
.header a {
  display: block;
  color: inherit;
  text-decoration: inherit;
}

.home {
  font-weight: 100;
}
</style>
