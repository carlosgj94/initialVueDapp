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
          <span>// Smart Contract Powered Delivery Service //</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Gun from 'gun/gun'

export default {
  components: {},
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
</style>
