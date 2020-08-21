import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "Queen's Square Chambers | Barristers",
    description:
      "Queen’s Square Chambers (QSC) - Sydney Barristers experienced in most areas of Australian law, with counsels providing expert legal advice. In the heart of Sydney's legal precinct, directly next-door to the Queen’s Square Law Courts Building",
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content:
          "Queen’s Square Chambers (QSC) - Sydney Barristers experienced in most areas of Australian law, with counsels providing expert legal advice. In the heart of Sydney's legal precinct, directly next-door to the Queen’s Square Law Courts Building",
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: "Queen's Square Chambers | Barristers",
        name: "Queen's Square Chambers | Barristers",
        content:
          process.env.npm_package_description ||
          "Queen's Square Chambers | Barristers",
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://qsc.com.au' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
