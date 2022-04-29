<template>
  <div>
    <video width="100%" height="100%" muted autoplay>
      <source :src="build(vid.asset)" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    vid: {
      type: String,
    },
  },
  methods: {
    build({ _ref }) {
      const a = _ref.split('-')
      const id = a[1]
      const fileType = a[2]

      return `https://cdn.sanity.io/files/vnoqhn6d/production/${id}.${fileType}`
    },
  },
}
</script>

<style>
</style>