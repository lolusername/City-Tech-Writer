<template>
  <figure class="inline-image my-5">
    <img class="w-100" :src="getURL(asset)" :alt="alts" />
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
    getURL(block) {
      return builder.image(block)
    },
    build({ _ref }) {
      const a = _ref.split('-')
      const id = a[1]
      const fileType = a[2]

      return `https://cdn.sanity.io/images/vnoqhn6d/production/${id}.${fileType}?dl`
    }
  },
  props: {
    alt: {
      alt: String,
      default: () => ''
    },
    asset: {
      asset: Object,
      default: () => ''
    },
    caption: {
      caption: String,
      default: () => ''
    }
  }
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
