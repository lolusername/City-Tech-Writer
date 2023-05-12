<template>
  <header class="header d-flex justify-content-center">
    <nuxt-link to="/" :class="{ thin: $route.path == '/' }" class="home">{{
      title
    }}</nuxt-link>
    <div class="relative group inline-block">
      <nuxt-link
        to="/previous"
        :class="{ thin: $route.path == '/previous' }"
        class="home px-3 hidden"
      >
        previous
      </nuxt-link>
      <div
        class="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white text-black ring-1 ring-black ring-opacity-5 transition ease-in-out duration-150 opacity-0 group-hover:opacity-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <nuxt-link
          to="/previous/v16"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Volume 16
        </nuxt-link>
        <nuxt-link
          to="/previous/v17"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Volume 17
        </nuxt-link>
      </div>
    </div>
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
  /* font-family: 'bc-figural-petit', sans-serif; */
}
header {
  padding: 0.5rem;
  /* max-width: 60em; */
  box-sizing: border-box;
  /* margin: 0 auto; */
  font-size: 1.25rem;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  background-position-x: 300px;
  height: 52px;
  background: var(--color-black);

  /* border-radius: 1000px; */
  /* margin-top: 1rem; */
  z-index: 99999;
  /* border: 0.4px solid #214971; */
  color: #fff;
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
.header a a {
  display: block;
  color: inherit;
  text-decoration: inherit;
}

.home {
  font-weight: 100;
}
</style>
