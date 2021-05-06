<template>
  <section class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="row justify-content-center">
      <div class="col-8">
        <div>
          <BlockContent :blocks="prose_content" :serializers="serializers" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sanityClient from '../../sanityClient'
import mp3 from '../../components/mp3'
import mainImage from '../../components/mainImage'

import BlockContent from 'sanity-blocks-vue-component'

const query = slug => {
  console.log(slug)
  return `

    *[slug.current == "${slug}"] {
      ...,
      prose_content
    }

`
}

export default {
  components: { BlockContent },
  data() {
    return {
      program: this.$store.getters.getProgram,
      data: null,
      serializers: {
        types: {
          mp3: mp3,
          mainImage: mainImage
        }
      }
    }
  },
  async asyncData({ route }) {
    console.log(route)
    const b = await route.params.slug
    const a = await sanityClient.fetch(query(b))
    return a[0]
  },
  computed: {
    sessionsWithoutBreak: data => {
      if (data.program && data.program.schedule) {
        return data.program.schedule.filter(
          i => i.session.sessionType !== 'break'
        )
      }
    }
  }
}
</script>

<style scoped>
@import '../../styles/custom-properties.css';

.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.title {
  text-align: center;
  margin-bottom: 4rem;
}

.sessionGridContainer {
  max-width: var(--width-medium);
  padding: 0 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
