<template>
  <div class="video-container my-5">
    <iframe
      v-if="videoService === 'vimeo'"
      title="vimeo-player"
      :src="`https://player.vimeo.com/video/${getVimeoId(url)}?h=04d712d8b4`"
      width="640"
      height="360"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <div v-else>
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}`"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
    </div>
  </div>
</template>
<script>
import getId from 'get-youtube-id'
import VueYoutube from 'vue-youtube'

export default {
  data() {
    return {
      videoId: getId(this.url),
    }
  },
  component: {
    VueYoutube,
  },
  methods: {
    getVimeoId(url) {
      // Look for a string with 'vimeo', then whatever, then a
      // forward slash and a group of digits.
      var match = /vimeo.*\/(\d+)/i.exec(url)

      // If the match isn't null (i.e. it matched)
      if (match) {
        // The grouped/matched digits from the regex
        return match[1]
      }
    },
  },
  props: {
    url: {
      type: String,
      default: () => '',
    },
    videoService: String,
    default: () => 'youtube',
  },
}
</script>
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
