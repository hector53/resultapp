export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TItulo de la app",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "descripcion de la app" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/faviconR.png' }, 
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'}, 

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Varela+Round&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/bulma.css',
    '~/static/css/poll.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  axios: {
    //  baseURL: 'https://indiehackersapi.hectoracosta.site/api',
    baseURL: 'http://127.0.0.1:5000/api/',
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
