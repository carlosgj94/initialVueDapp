<template>
  <section class="has-background-light">

    <div id="create.form" class="container columns is-fluid widescreen">
      <div class="column is-8 is-offset-2 card-content has-background-white">
        <div class="columns">
          <div class="column is-10 is-offset-1 wrap" style="padding: 20px">

            <b-field horizontal label="Package" custom-class="is-large">
              <b-input v-model="form.packageName" name="packageName" placeholder="Name your package" size="is-medium" expanded />
            </b-field>
            <hr>

            <b-field horizontal label="From" custom-class="is-medium">
              <b-input v-model="form.senderName" name="senderName" placeholder="Name" expanded />
            </b-field>
            <b-field horizontal custom-class="is-medium">
              <b-input v-model="form.originAddress" name="originAddress" placeholder="Origin Address" expanded />
            </b-field>
            <br>

            <b-field horizontal label="To" custom-class="is-medium">
              <b-input v-model="form.receiverName" name="receiverName" placeholder="Name" expanded />
              <b-input v-model="form.receiver" name="receiver" placeholder="Wallet address" expanded />
            </b-field>
            <b-field horizontal custom-class="is-medium">
              <b-input v-model="form.destinationAddress" name="destinationAddress" placeholder="Destination Address" expanded />
            </b-field>

            <br>
            <div class="control">
              <button class="button is-primary" @click="submit">Register</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SupplyChainHelper from '~/helpers/SupplyChain.js'

export default {
  components: {},
  head: {
    title: 'BoxToGo/Register Package'
  },
  data() {
    return {
      form: {
        packageName: '',
        senderName: '',
        originAddress: '',
        receiverName: '',
        destinationAddress: '',
        receiver: ''
      }
    }
  },
  methods: {
    async submit() {
      await SupplyChainHelper.init()
      //let self = this
      console.log('Working')

      var success = await SupplyChainHelper.createPackage(
        this.form.packageName,
        this.form.senderName,
        this.form.receiverName,
        this.form.originAddress,
        this.form.destinationAddress,
        this.form.receiver
      )
      console.log(success + 'Package registered')
    }
  }
}
</script>
<style scoped>
.wrap {
  padding: 20px;
  backaground-color: blue;
}
</style>
