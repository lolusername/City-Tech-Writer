<template>
  <section class="container work">
    <h1 class="title">{{ title }}</h1>
    <h4 class="text-center">by</h4>
    <h4 class="text-center" v-for="(author, i) in authors" :key="i">
      {{ author.name }}
    </h4>
    <div class="justify-content-center d-flex">
      <div class="col-12 col-md-8">
        <div>
          <BlockContent :blocks="prose_content" :serializers="serializers" />
        </div>

        <section class="bio" v-for="(author, i) in authors" :key="i">
          <h4 class="text-center">Author Bio(s)</h4>
          <BlockContent
            v-if="author.bio"
            :blocks="author.bio"
            :serializers="serializers"
          />
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import sanityClient from '../../sanityClient'
import mp3 from '../../components/mp3'
import mainImage from '../../components/mainImage'
import longLineBreak from '../../components/longLineBreak'
import pull_quote from '../../components/PullQuote'

import BlockContent from 'sanity-blocks-vue-component'
import youtube from '../../components/youtube.vue'
import AutoPlayVid from '../../components/AutoPlayVid.vue'

const query = (slug) => {
  console.log(slug)
  return `

    *[slug.current == "${slug}"] {
      ...,
      prose_content,
      authors[]->
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
          mainImage: mainImage,
          youtubeLink: youtube,
          longLineBreak: longLineBreak,
          vid: AutoPlayVid,
        },
        marks: { pull_quote: pull_quote },
      },
    }
  },
  async asyncData({ route }) {
    console.log(route)
    const b = await route.params.slug
    const a = await sanityClient.fetch(query(b))
    return a[0]
  },
  computed: {
    sessionsWithoutBreak: (data) => {
      if (data.program && data.program.schedule) {
        return data.program.schedule.filter(
          (i) => i.session.sessionType !== 'break'
        )
      }
    },
  },
}
</script>

<style>
@import '../../styles/custom-properties.css';
a {
  white-space: pre-line;
}
.bio {
  font-weight: 700;
  padding: 1rem;
  border-top: 2px solid #000;
  text-align: left;
}
.authors {
  border-bottom: 2px solid #000;
}
.container.work {
  padding-top: 8rem !important;
}
.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  font-family: adobe-garamond-pro, serif;
  font-size: 1.5rem;
}
a,
* {
  overflow-wrap: break-word;
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
.bio {
  background: #000;
  color: #f1f1f1;
  border-radius: 0.5rem;
  margin: 2rem 0 3rem 0;
}
</style>
