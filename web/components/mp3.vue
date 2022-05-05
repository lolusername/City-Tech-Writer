<template>
  <div class="d-flex justify-content-center mb-3">
    <div class="d-flex flex-column align-items-center">
      <audio controls>
        <source :src="build(mp3.asset)" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h6 class="audio-caption">
        Audio for <span class="mp3-link">{{ mp3Name }}</span>
      </h6>
    </div>
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

      return `https://cdn.sanity.io/files/vnoqhn6d/production/${id}.${fileType}`
    },
  },
  props: {
    mp3: {
      mp3: String,
      default: () => '',
    },
    mp3Name: {
      mp3: String,
      default: () => '',
    },
  },
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
.mp3-link {
  font-style: italic;
}
.audio-caption {
  margin-top: 1rem;
}
</style>
