<template>
  <div class="video-container my-5">
    <iframe
      :src="`https://www.youtube.com/embed/${videoId}`"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video"
    ></iframe>
  </div>
</template>
<script>
import getId from 'get-youtube-id'
import VueYoutube from 'vue-youtube'

export default {
  data() {
    return {
      videoId: getId(this.url)
    }
  },
  component: {
    VueYoutube
  },
  props: {
    url: {
      type: String,
      default: () => ''
    }
  }
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
