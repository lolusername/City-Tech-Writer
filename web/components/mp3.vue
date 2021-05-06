<template>
  <div>
    <a :href="build(mp3.asset)">Generated MP3 for '{{ mp3Name }}'</a>
  </div>
</template>
<script>
import sanityClient from '../sanityClient'

import imageUrlBuilder from '@sanity/image-url'

export default {
  data() {
    return {
      // videoId: getId(this.url)
    }
  },
  methods: {
    getURL(block) {
      console.log(sanityClient)
      const builder = imageUrlBuilder(sanityClient)
      return builder.image(block)
    },
    build({ _ref }) {
      const a = _ref.split('-')
      const id = a[1]
      const fileType = a[2]

      return `https://cdn.sanity.io/files/vnoqhn6d/production/${id}.${fileType}?dl`
    }
  },
  props: {
    mp3: {
      mp3: String,
      default: () => ''
    },
    mp3Name: {
      mp3: String,
      default: () => ''
    }
  }
}
</script>
