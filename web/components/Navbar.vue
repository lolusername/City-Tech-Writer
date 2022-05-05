<template>
  <header class="header d-flex justify-content-center">
    <nuxt-link to="/" :class="{ thin: $route.path == '/' }" class="home">{{
      title
    }}</nuxt-link>
    <nuxt-link
      to="/previous"
      :class="{ thin: $route.path == '/previous' }"
      class="home px-3"
      >previous</nuxt-link
    >
    <nav></nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set',
    },
    ticketLink: {
      type: String,
      default: undefined,
    },
  },
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
  padding: 0.5rem;
  max-width: var(--width-medium);
  box-sizing: border-box;
  margin: 0 auto;
  font-size: 1.25rem;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #e2e2e2,
    #c9d6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #e2e2e2,
    #c9d6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 1000px;
  margin-top: 1rem;
  z-index: 99999;
  /* border: 1px solid #c9d6ff;
  outline: 1px solid #e2e2e2; */
  border: 0.4px solid #214971;
  color: #214971;
}
.home {
  text-decoration: underline !important;
}
@media screen and (max-width: 520px) {
  .header {
    display: flex;
    justify-content: space-between;
    margin: 0;
    border-radius: 0;
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
