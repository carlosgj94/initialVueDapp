<template>
  <section class="hero is-fullheight has-background-light">

    <div id="create.form" class="container hero-body columns is-fluid widescreen">
      <div class="column is-8 is-offset-2 card-content form-wrapper has-background-white">
        <div class="columns">
          <div class="column is-10 is-offset-1 form-padding">

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
              <button class="button is-info" @click="submit">Register</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import SupplyChainHelper from '../helpers/SupplyChain.js'
import Gun from 'gun/gun'

export default {
  components: {},
  head: {
    title: 'Fairivery/Register Package'
  },
  data() {
    return {
      form: {
        supplyHelper: null,
        packageName: '',
        senderName: '',
        originAddress: '',
        receiverName: '',
        destinationAddress: '',
        receiver: '',
        instance: null,
        account: null
      }
    }
  },
  methods: {
    async submit() {
      //let self = this
      this.number = this.$store.dispatch('supplyChain/callCreatePackage', {
        packageName: this.form.packageName,
        senderName: this.form.senderName,
        receiverName: this.form.receiverName,
        originAddress: this.form.originAddress,
        finalAddress: this.form.destinationAddress,
        receiver: this.form.receiver
      })
      this.transferReceipt = await this.$store.dispatch(
        'supplyChain/transfer',
        {
          packageName: this.form.packageName,
          senderName: this.form.senderName,
          receiverName: this.form.receiverName,
          originAddress: this.form.originAddress,
          finalAddress: this.form.destinationAddress,
          receiver: this.form.receiver
        }
      )
      var gun = Gun()
      var boxes = gun.get(await this.$store.dispatch('supplyChain/getAccount'))
      boxes.set({ box: await this.number })
    }
  }
}
</script>
<style scoped>
.form-wrapper {
  padding: 50px 20px 30px 20px;
}
</style>
