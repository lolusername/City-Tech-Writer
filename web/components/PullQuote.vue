<template>
  <div class="pull_quote"><slot name="default"></slot></div>
</template>

<script>
export default {
  props: {
    pull_quote: {
      type: String,
    },
  },
}
</script>

<style>
.pull_quote {
  border: solid black;
  border-width: 0.34rem 0;
  font-family: monospace;
  font-size: 2.67rem;
  margin: 2rem 0;
}
</style>