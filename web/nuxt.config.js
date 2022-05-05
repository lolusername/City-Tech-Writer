import pkg from './package'

export default {
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    script: [
      {
        src: 'https://recogito.github.io/recogito-js/recogito.min.js',
        body: true
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    { src: 'normalize.css' },
    { src: 'bootstrap/dist/css/bootstrap.min.css' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/eventInformation'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/google-analytics'],

  googleAnalytics: {
    id: 'UA-118933367-4'
  },
  /*
   ** Set global info from sanity document
   */
  //   eventInformation: () => {
  //     return sanityClient.fetch('*[_id == "eventInformation"]').then(res => res)
  //   },

  /*
   ** Generate dynamic routes from data from sanity.
   ** Used only for generating static served HTML files
   */
  //   generate: {
  //     routes: () => {
  //       return sanityClient.fetch(routesQuery).then(res => {
  //         return [
  //           ...res.images.map(item => `/images/${item.slug.current}`),
  //           ...res.work.map(item => `/work/${item.slug.current}`)
  //         ]
  //       })
  //     }
  //   },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          stage: 3,
          features: {
            'color-mod-function': { unresolved: 'warn' },
            'nesting-rules': true,
            'custom-media-queries': {
              preserve: false
            },
            'custom-properties': {
              preserve: false
            }
          }
        }
      }
    }

    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
