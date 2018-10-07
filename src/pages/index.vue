<template>
  <section class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <strong>
            <img class="image is-48x48" src="~/assets/bike-parking.svg" style="margin-left:46px">
            <span class="cyanlogo">FAIR</span><span class="has-text-info">IVERY</span>
          </strong>
        </h1>
        <p>
          <span class="is-primary">// Smart Contract Powered Delivery Service //</span>
          <no-ssr> 
            <vue-qr-reader 
              :stop-on-scanned="false" 
              :draw-on-found="true" :responsive="false"
              @:code-scanned="codearrived"/>
          </no-ssr> 
        </p>
      </div>
    </div>
  </section>
</template>

<script>
//import AppLogo from '~/components/AppLogo.vue'
import Gun from 'gun/gun'
import NoSSR from 'vue-no-ssr'
import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js'

export default {
  components: {
    'no-ssr': NoSSR,
    VueQrReader
  },
  data() {
    return {
      tokenName: '',
      recipentAddress: '',
      transferReceipt: '',
      amount: 0,
      itemFalse: false,
      scanned: false
    }
  },
  mounted() {
    this.getAddress()
    this.getBoxes()
    this.$on('codearrived', section => {
      console.log(section)
    })
  },
  methods: {
    codescanned() {
      console.log('hola')
    },
    codearrived() {
      console.log('hola')
    },
    async getAddress() {
      this.tokenName = await this.$store.dispatch(
        'supplyChain/getPackageStrings',
        { index: 0 }
      )
      console.log(await this.tokenName)
    },

    async getBoxes() {
      this.address = await this.$store.dispatch('supplyChain/getAccount')
      var gun = Gun()
      console.log(await this.address)
      gun
        .get(this.address)
        .map()
        .once(function(data, key) {
          console.log(data, key)
        })
    }
  }
}
</script>

<style>
.cyanlogo {
  color: #00ffff;
}
/*
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.paragraph-title {
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  word-spacing: 5px;
  padding: 15px 0;
}

.receipt-box {
  padding-top: 15px;
  width: 900px;
  word-break: break-all;
}

.row {
  padding: 10px;
}
*/
</style>
