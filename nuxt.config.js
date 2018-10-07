module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Fairivery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Smart Contract Powered Delivery Service'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'fairivery.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#00FFFF' },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['web3', 'vue-qr-reader', 'vue-qrcode-reader'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [{ src: '~/plugins/externalVueQRCodeReader.js', ssr: false }],
  modules: ['nuxt-buefy'],
  srcDir: 'src/',
  rootDir: './'
}
