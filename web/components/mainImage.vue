<template>
  <figure class="inline-image my-1">
    <img class="w-100" :src="getURL(asset)" :alt="alt" />
    <figcaption class="text-center px-5 py-2">{{ caption }}</figcaption>
  </figure>
</template>
<script>
import sanityClient from '../sanityClient'

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

export default {
  data() {
    return {
      // videoId: getId(this.url)
    }
  },
  methods: {
    getURL(imgObject) {
      return builder.image(imgObject).width(1660).url()
    },
  },
  props: {
    alt: {
      alt: String,
      default: () => '',
    },
    asset: {
      asset: Object,
      default: () => '',
    },
    caption: {
      caption: String,
      default: () => '',
    },
  },
}
</script>
<style>
@import url('https://use.typekit.net/rbh5reg.css');
a {
  color: #000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #000;
}
.inline-image figcaption {
  font-family: gopher;
  font-size: 0.8rem;
}
</style>
