<template>
  <section class="container">
    <div
      v-for="(doc, i) in sortedDocs"
      :key="i"
      class="row py-2"
      :class="{ 'justify-content-end': i % 2 }"
    >
      <div class="col-10">
        <div class="row p-3 doc m-1">
          <section v-if="extractImage(doc.prose_content)" class="col-4 py-2">
            <img :src="extractImage(doc.prose_content)" class="w-100" alt="" />
          </section>
          <section class="col d-flex justify-content-between">
            <div>
              <h5>{{ doc.title }}</h5>
              <div v-for="(author, i) in doc.authors" :key="i" class="h6">
                {{ author.name }}
              </div>
            </div>
            <div class="sponsor col-5 text-right pr-0">
              <h6>FACULTY SPONSOR(S)</h6>
              <div>
                {{ doc.facultySponsor }}
              </div>
            </div>
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
    "prose": *[_type in ["prose"]] | order(order asc) {
      ...,
       authors[]->,
       facultySponsor
    }
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
    this.sortedDocs.splice(34, 0, ...this.imageGalleries)
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
@import url('https://use.typekit.net/fmp2wuw.css');
.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  font-family: adobe-garamond-pro, serif;

  font-weight: 400;

  font-style: normal;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}
.header {
  padding: 0 1.5rem;
  text-align: center;
}
.sponsor h6 {
  font-size: 0.67rem;
}
.doc {
  border: 1px solid #000;
}
.doc img {
  border: 0.5px solid #000;
  border-radius: 4px;
}
</style>
