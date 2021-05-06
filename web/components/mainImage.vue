<template>
  <img class="w-100 my-5" :src="getURL(asset)" :alt="alt" />
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
    }
  }
}
</script>
<style>
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: #000;
}
</style>
