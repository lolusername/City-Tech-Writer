<template>
  <section class="container">
    <div class="row">
      <div v-for="(doc, i) in sortedDocs" :key="i" class="col-6 my-4 doc">
        <div class="row p-4">
          <section v-if="extractImage(doc.prose_content)" class="col-5 px-0">
            <img :src="extractImage(doc.prose_content)" class="w-100" alt="" />
          </section>
          <section class="col-7">
            <h6>{{ doc.title }}</h6>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { dateFilter } from 'vue-date-fns'

import sanityClient from '../sanityClient'

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

const proseQuery = `
  {
    "prose": *[_type in ["prose"]] | order(order asc) 
  }
`
const imageGalleryQuery = `
  {
    "imageGalleries": *[_type in ["imageGallery"]] | order(order asc) 
  }
`

export default {
  filters: {
    dateFilter
  },
  data() {
    return {
      program: this.$store.getters.getProgram,
      sortedDocs: []
    }
  },
  computed: {},
  async asyncData() {
    const prose = await sanityClient.fetch(proseQuery)
    const imageGalleries = await sanityClient.fetch(imageGalleryQuery)

    return { ...prose, ...imageGalleries }
  },
  methods: {
    extractImage(blocks = []) {
      const imgObject = blocks.find(block => {
        return block._type == 'mainImage'
      })
      if (imgObject === undefined) return
      console.log(imgObject.asset)

      return builder.image(imgObject)
    }
  },
  mounted() {
    this.sortedDocs = this.prose.slice()
    this.sortedDocs.splice(33, 0, ...this.imageGalleries)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: this.info.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.keywords.join(',')
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.header {
  padding: 0 1.5rem;
  text-align: center;
}
.doc {
  border: 2px solid #000;
}
.title + p + .dates {
  margin-bottom: 0;
  font-weight: 600;
}

.title + p + .dates + .venue {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin-bottom: 5rem;
}

figure {
  margin: 0 0 3em;
}

figcaption {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  padding: 0.25rem 1.5rem;
}

.mainImage {
  width: 100%;
  vertical-align: top;
}

.sessionListTitle {
  text-align: center;
  font-weight: 600;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 0 0 3rem;

  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}

.sessionListContainer {
  max-width: var(--width-small);
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
}
</style>
