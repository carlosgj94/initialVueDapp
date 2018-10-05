<template>
  <section class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title"><strong>BOX·TO·GO</strong></h1>
      </div>
    </div>
  </section>
</template>

<script>
//import AppLogo from '~/components/AppLogo.vue'
import SupplyChainHelper from '~/helpers/SupplyChain.js'

export default {
  components: {},
  data() {
    return {
      tokenName: '',
      recipentAddress: '',
      transferReceipt: '',
      amount: 0
    }
  },
  mounted() {
    this.getAddress()
  },
  methods: {
    getAddress() {
      SupplyChainHelper.init()
    }
  }
}
</script>

<style scoped>
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

.is-primary {
  border-color: coral;
  background-image: linear-gradient(
    120deg,
    #fdcbf1 0%,
    #fdcbf1 60%,
    #cceeff 100%
  );
}
*/
</style>
