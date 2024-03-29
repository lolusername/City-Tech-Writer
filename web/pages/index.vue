<template>
  <div>
    <header id="head" class="container-fluid p-0">
      <div class="cover"></div>
      <section class="issue-info container mb-5 p-5 p-md-5">
        <div class="row py-3 d-flex justify-content-center">
          <article class="col-12 col-md-3">
            <h1>City Tech Writer</h1>
            <h4 class="volume">Vol. 18 - 2023</h4>
            <h6>Outstanding student writing from all disciplines</h6>
          </article>
          <article class="col-12 col-md-5">
            <BlockContent :blocks="issueInfo[0].description" />
          </article>
        </div>
      </section>
    </header>
    <section class="container">
      <div
        v-for="(doc, i) in sortedDocs"
        :key="i"
        class="row m-0 py-2"
        :class="{ 'justify-content-end': !(i % 2) }"
      >
        <div class="col-10">
          <div class="row p-3 doc m-1">
            <section
              v-if="doc.main_image != undefined"
              class="col-12 col-md-4 py-2"
            >
              <img
                :src="`${URLbuilder(doc.main_image)}`"
                class="w-100"
                :alt="doc.main_image.alt"
              />
            </section>
            <section
              v-else-if="extractImage(doc.prose_content)"
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
                <a v-if="doc._type == 'prose'" :href="`work/${getSlug(doc)}`"
                  ><h5 class="hover:text-[#d91882]">{{ doc.title }}</h5></a
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
          <section
            v-if="doc.tags"
            class="d-flex justify-content-end flex space-x-2"
          >
            <span
              class="d-inline-block d-flex align-items-center mr-2 tag-header bg-[#d95525] text-white px-2 py-1 uppercase font-mono "
            >
              Tags:
            </span>
            <span
              class="d-inline-block tag bg-[#d91882] text-white px-2 py-1 space-x-2"
              v-for="(tag, i) in doc.tags"
              :key="i"
            >
              {{ getTitleForValue(tag) }}
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
    "prose": *[_type in ["prose"] && volume == 'v18'] | order(order asc) {
      ...,
       authors[]->,
       facultySponsor,
       tags[],
       slug
    }
  }
`
const imageGalleryQuery = `
  {
    "imageGalleries": *[_type in ["imageGallery"]  && volume == 'v18'] | order(order asc) {
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
    dateFilter
  },
  data() {
    return {
      program: this.$store.getters.getProgram
    }
  },
  components: { BlockContent },
  async asyncData() {
    const prose = await sanityClient.fetch(proseQuery)
    const imageGalleries = await sanityClient.fetch(imageGalleryQuery)
    const issueInfo = await sanityClient.fetch(issueInfoQuery)

    return { ...prose, ...imageGalleries, ...issueInfo }
  },
  computed: {
    sortedDocs() {
      const sortedDocs = [...this.prose]
      sortedDocs.splice(25, 0, ...this.imageGalleries)
      return sortedDocs
    }
  },
  methods: {
    getTitleForValue(value) {
      const tagOptions = [
        { title: 'Personal narratives', value: 'personal_narratives' },
        { title: 'Fiction', value: 'fiction' },
        { title: 'literary analysis', value: 'literary_analysis' },
        { title: 'Art and architectural criticism ', value: 'art_crit' },
        { title: 'Philosophy ', value: 'philosophy' },
        {
          title: 'Reflections On Healthcare ',
          value: 'reflections_healthcare'
        },
        { title: 'Technology: Past, Present, Future', value: 'tech' },
        { title: 'Sociological Inquiry', value: 'soc' },
        { title: 'Science and Biology', value: 'sci_bi' },
        { title: 'Photography', value: 'photo' },
        { title: 'poetry', value: 'poetry' },
        { title: 'Mathematics', value: 'math' },
        { title: 'Stage Writing', value: 'stage_writing' },
        { title: 'In Translation', value: 'in_translation' },
        { title: 'History', value: 'history' },
        { title: 'Career Development', value: 'career_dev' },
        { title: 'Short Films', value: 'short_films' },
        { title: 'Fashion', value: 'fashion' }
      ]

      const option = tagOptions.find(option => option.value === value)
      return option ? option.title : null
    },
    getSlug(doc) {
      return doc.slug ? doc.slug.current : ''
    },
    URLbuilder(imgObject) {
      return builder
        .image(imgObject)
        .width(600)
        .url()
    },
    extractImage(blocks = []) {
      const imgObject = blocks.find(block => block._type == 'mainImage')
      if (imgObject === undefined) return

      return this.URLbuilder(imgObject)
    },
    toPlainText(blocks = []) {
      return blocks.reduce((acc, block) => {
        if (block._type !== 'block' || !block.children) {
          return acc
        }
        return acc + '\n\n' + block.children.map(child => child.text).join('')
      }, '')
    }
  },

  head: {
    title: 'CITY TECH WRITER Vol. 18 - 2023',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Outstanding student writing from all disciplines'
      }
    ]
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
  background: transparent;
  font-weight: 400;

  font-style: normal;
}
.volume::after {
  content: ' ';
  display: block;
  background: #d95525;
  border-radius: 100px;
  width: 75%;
  height: 5px;
}
.issue-info {
  color: #fafafa;
  margin-top: 3rem;

  border: 2px solid #d91882;
  box-shadow: #d95525 6px 6px;
  font-size: 1.5rem;
  font-weight: 100;
  font-style: italic;
}

.cover {
  height: 478px;
  background: url(/banner.png), url(/bg.png);
  background-size: contain !important;
  background-attachment: scroll;
  background-repeat: no-repeat, repeat;
  background-position-x: center;
  margin-top: 52px;
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
