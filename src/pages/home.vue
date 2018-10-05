<template>
  <section>
    <div>
      <top-bar />
    </div>
    <div>
      <h1>This is HomePage</h1>
    </div>
  </section>
</template>
<script>
import TopBar from '~/components/TopBar.vue'
import SupplyChainHelper from '~/helpers/SupplyChain.js'

export default {
  components: {
    TopBar
  },
  head: {
    title: 'Campaigns'
  },
  mounted() {
    this.getAddress()
  },
  methods: {
    async getAddress() {
      await SupplyChainHelper.init()
    }
  }
}
</script>
