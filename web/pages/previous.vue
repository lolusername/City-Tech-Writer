<template>
  <div>
    <section class="container header-2">
      <div
        v-for="(doc, i) in sortedDocs"
        :key="i"
        class="row m-0 py-2"
        :class="{ 'justify-content-end': !(i % 2) }"
      >
        <div class="col-10">
          <div class="row p-3 doc m-1">
            <section v-if="doc.main_image" class="col-12 col-md-4 py-2">
              <img
                :src="`${URLbuilder(doc.main_image)}`"
                class="w-100"
                :alt="doc.main_image.alt"
              />
            </section>
            <section
              v-else-if="extractImage(doc.prose_content) && doc.main_image"
              class="col-12 col-md-4 py-2"
            >
              <img
                :src="extractImage(doc.prose_content)"
                class="w-100"
                :alt="doc.main_image.alt"
              />
            </section>
            <section
              class="col d-flex justify-content-between flex-column flex-md-row"
            >
              <div>
                <NuxtLink
                  v-if="doc._type == 'prose'"
                  :to="`work/${getSlug(doc)}`"
                  ><h5>{{ doc.title }}</h5></NuxtLink
                >
                <NuxtLink
                  v-if="doc._type == 'imageGallery'"
                  :to="`images/${getSlug(doc)}`"
                  ><h5>{{ doc.title }}</h5></NuxtLink
                >

                <div v-for="(author, i) in doc.authors" :key="i" class="h6">
                  {{ author.name }}
                </div>
              </div>
              <div
                v-if="doc.facultySponsor"
                class="sponsor col col-md-5 text-md-right p-0 pr-md-0"
              >
                <h6>FACULTY SPONSOR(S)</h6>
                <div>
                  {{ doc.facultySponsor }}
                </div>
              </div>
            </section>
          </div>
          <section v-if="doc.tags" class="d-flex justify-content-end">
            <span
              class="d-inline-block d-flex align-items-center mr-2 tag-header"
            >
              Tags:
            </span>
            <span
              class="d-inline-block tag"
              v-for="(tag, i) in doc.tags"
              :key="i"
            >
              {{ mapTag(tag) }}
            </span>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { dateFilter } from 'vue-date-fns'

import sanityClient from '../sanityClient'

import imageUrlBuilder from '@sanity/image-url'

import BlockContent from 'sanity-blocks-vue-component'

const builder = imageUrlBuilder(sanityClient)

const proseQuery = `
  {
    "prose": *[_type in ["prose"] && volume != 'v17'] | order(order asc) {
      ...,
       authors[]->,
       facultySponsor,
       tags,
       slug
    }
  }
`
const imageGalleryQuery = `
  {
    "imageGalleries": *[_type in ["imageGallery"]  && volume != 'v17'] | order(order asc) {
      ...,
      authors[]->
    }
  }
`
const issueInfoQuery = `
  {
    "issueInfo": *[_type in ["issueInfo"]]
  }
`

export default {
  filters: {
    dateFilter,
  },
  data() {
    return {
      program: this.$store.getters.getProgram,
      sortedDocs: [],
    }
  },
  components: { BlockContent },
  async asyncData() {
    const prose = await sanityClient.fetch(proseQuery)
    const imageGalleries = await sanityClient.fetch(imageGalleryQuery)
    const issueInfo = await sanityClient.fetch(issueInfoQuery)

    return { ...prose, ...imageGalleries, ...issueInfo }
  },
  methods: {
    getSlug(doc) {
      return doc.slug ? doc.slug.current : ''
    },
    URLbuilder(imgObject) {
      return builder.image(imgObject).width(600).url()
    },
    extractImage(blocks = []) {
      const imgObject = blocks.find((block) => {
        return block._type == 'mainImage'
      })
      if (imgObject === undefined) return

      return builder.image(imgObject).width(600).url()
    },
    toPlainText(blocks = []) {
      return (
        blocks
          // loop through each block
          .map((block) => {
            // if it's not a text block with children,
            // return nothing
            if (block._type !== 'block' || !block.children) {
              return ''
            }
            // loop through the children spans, and join the
            // text strings
            return block.children.map((child) => child.text).join('')
          })
          .join('\n\n')
      )
    },
    mapTag(tag) {
      return {
        personal_narratives: 'personal narratives',
        fiction: 'fiction',
        literary_analysis: 'Literary Analysis',
        art_crit: 'art criticism',
        philosophy: 'philosophy',
        reflections_healthcare: 'Reflections On Healthcare',
        tech: 'tech',
        soc: 'sociological inquiry',
        sci_bi: 'science & biology',
        photo: 'photography',
        poetry: 'poetry',
      }[tag]
    },
  },
  mounted() {
    this.sortedDocs = this.prose.slice()
    this.sortedDocs.splice(34, 0, ...this.imageGalleries)
  },
  head: {
    title: 'CITY TECH WRITER Vol. 16 - 2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Outstanding student writing from all disciplines',
      },
    ],
  },
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
  background: transparent;
  font-weight: 400;

  font-style: normal;
}
.volume::after {
  content: ' ';
  display: block;
  background: #214971;
  border-radius: 100px;
  width: 75%;
  height: 5px;
}
.issue-info {
  background: #fafafa;
  margin-top: 3rem;
  border-radius: 8px;
  border: 0.1px solid #000;
  box-shadow: #214971 10px 10px;
  font-size: 1.39rem;
  font-weight: 100;
  font-style: italic;
}

.cover {
  height: 478px;
  background: url(/banner.png?w=800), url(/bg.png), #212526;
  background-size: 75vh, 50% !important;
  background-repeat: no-repeat, repeat;
  background-position: center 50px;
  transition: background 1s;
}
.cover:hover {
  background-size: 75vh, 67% !important;
  animation-duration: 0.5s;

  animation-duration: infinite;
}

.cover {
  animation-duration: 0.5s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    transform: translate(0, 50vh) scale(0.1, 1);
    opacity: 0;
  }

  to {
    transform: translate(0, 10) scale(1, 1);
    opacity: 1;
  }
}
.header-2 {
  padding-top: 6rem;
}
@keyframes sparkle {
  from {
    transform: translate(2vh, 3vh);
    opacity: 0;
  }

  to {
    transform: translate(-2vh, -3vh);
    opacity: 1;
  }
}
.tag {
  background: #000;
  color: #fff;
  margin: 0 0.25rem;
  padding: 0.25rem;
  text-transform: capitalize;
}
.tag-header {
  font-weight: 700;
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
.sponsor {
  font-size: 1rem;
}
.doc {
  border: 1px solid #000;
  background: #fafafa;
}
.doc img {
  border: 0.5px solid #000;
  border-radius: 4px;
}

@media (max-width: 576px) {
  .cover {
    background-position: center center;
    background-color: #214971;
    background-size: 134% !important;
  }
  .tag {
    font-size: 1rem;
  }
}
.head {
  background-color: red !important;
}
</style>
