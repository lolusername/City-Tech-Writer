<template>
  <section class="container-fluid">
    <h1 class="title">{{ title }}</h1>
    <div class="d-flex justify-content-center p-2">
      <div class="">
        <h4 class="mt-4">FACULTY SPONSOR(S)</h4>
        <h4>{{ facultySponsor }}</h4>
      </div>
    </div>
    <div class="">
      <div class="row justify-content-between px-md-5">
        <figure
          class=" h-100 flex-column flex-md-row d-flex align-items-center"
          v-for="(img, i) in images"
          :key="i"
          :class="{ fig: i % 2 }"
        >
          <img
            class="w-100 p-3 col-12 col-md-7"
            :src="URLbuilder(img.imageForCaption)"
            :alt="img.caption"
          />
          <figcaption class="p-5 col">
            <h3>{{ img.caption }}</h3>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import sanityClient from '../../sanityClient'
import mp3 from '../../components/mp3'
import mainImage from '../../components/mainImage'

// import BlockContent from 'sanity-blocks-vue-component'
import youtube from '../../components/youtube.vue'

import imageUrlBuilder from '@sanity/image-url'

// import BlockContent from 'sanity-blocks-vue-component'

const builder = imageUrlBuilder(sanityClient)

const query = slug => {
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
  // components: { BlockContent },
  data() {
    return {
      program: this.$store.getters.getProgram,
      data: null,
      serializers: {
        types: {
          mp3: mp3,
          mainImage: mainImage,
          youtubeLink: youtube
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
  methods: {
    URLbuilder(img) {
      return builder.image(img)
    }
  },
  head() {
    return {
      title: 'City Tech Writer'
    }
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
@import url('https://use.typekit.net/fmp2wuw.css');

.container-fluid {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  font-family: adobe-garamond-pro, serif;
  font-size: 1.5rem;
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
figure {
  margin: 10vh 0;
  padding: 2rem;
  background: #fff;
}
.fig {
  background: #214971;
  color: #fff;
}
figure img {
  padding: 1rem;
  border: 1px solid #000;
  background: #214971;
}
.fig img {
  background: #fff;
}
</style>
