<template>
  <section class="hero is-fullheight has-background-light">
    <div id="transport.form" class="container columns is-fluid widescreen spacing-top">
      <div class="column is-6 is-offset-3">
        <div class="tile is-ancestor is-vertical">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <b-field>
                <b-input v-model="index"
                         placeholder="Search..."
                         type="search"
                         icon="magnify"
                         expanded
                />
                <p class="control">
                  <button class="button is-info" @click="searchReveal">Search</button>
                </p>
              </b-field> 
            </div>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box has-background-white">
              <div class="content">
                <div v-if="pack.name">
                  <div class="title">{{ pack.name }}</div>
                  <span class="subtitle">
                    <strong>From:</strong> {{ pack.senderName }}
                  </span>
                  <br>
                  <span class="subtitle">
                    <strong>Adr:</strong> {{ pack.originAddress }}
                  </span>
                  <hr>
                  <span class="subtitle">
                    <strong>To:</strong> {{ pack.receiverName }}
                  </span>
                  <br>
                  <span class="subtitle">
                    <strong>Adr:</strong> {{ pack.destinationAddress }}
                  </span>
                  <p class="image spacing-top-20">
                    <img src="~/assets/Map.png" alt="Map_Mockup">
                  </p>
                  <div>
                    <button class="button level-item is-info is-outlined is-big"
                            @click="addTransporter">
                      Add TrackPoint
                    </button>
                  </div>
                </div>
                <div v-else class="has-text-centered">
                  TRACKING <b-icon icon="map" size="is-large" type="is-info"/> PACKAGE
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  head: {
    title: 'Fairivery/Transport Interface'
  },
  data() {
    return {
      index: '',
      pack: {
        name: '',
        senderName: 'Me',
        receiverName: 'You',
        originAddress: 'Here',
        destinationAddress: 'There',
        transporters: '',
        state: ''
      }
    }
  },
  methods: {
    async searchReveal() {
      this.packNames = await this.$store.dispatch(
        'supplyChain/getPackageStrings',
        { index: this.index }
      )
      this.pack.name = this.packNames[0]
      this.pack.senderName = this.packNames[1]
      this.pack.receiverName = this.packNames[2]
      this.pack.originAddress = this.packNames[3]
      this.pack.destinationAddress = this.packNames[4]
      //this.pack.state = await this.checkState()
      //console.log(this.pack.state)
    },
    /*
    async checkState() {
      this.packData = await this.$store.dispatch('supplyChain/getPackageData', {
        index: this.index
      })
      this.receiver = this.packData[1]
      this.pack.transporters = this.packData[2]

      var counter = 0
      while (
        this.pack.transporters[counter] !=
          '0x0000000000000000000000000000000000000000' &&
        counter < 10
      )
        counter++
      console.log(counter)
      if (this.pack.transporter[counter - 1] == this.pack.sender)
      //sender needed
    },
    */
    async addTransporter() {
      var counter = 0
      while (
        this.pack.transporters[counter] !=
          '0x0000000000000000000000000000000000000000' &&
        counter < 10
      )
        counter++

      await this.$store.dispatch('supplyChain/addTransporter', {
        packageNum: this.index,
        position: counter
      })
    }
  }
}
</script>
<style>
.spacing-top {
  margin-top: 50px;
}
.spacing-top-20 {
  margin-top: 20px;
}
</style>
