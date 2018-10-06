<template>
  <section class="hero is-fullheight has-background-light">

    <div class="column is-10 is-offset-1 fluid" style="padding-top: 50px">
      <div v-for="i in counter" :key="i" class="tile is-ancestor">
        <div v-for="c in counter" v-if="3*i+c < boxesLength" :key="c" class="tile is-parent is-4" >
          <article :class="boxes[3*i+c].style" class="tile is-child box">
            <div class="content">
              <div class="title has-text-white-bis"> {{ boxes[3*i+c].name }} </div>
              <span class="subtitle has-text-white-bis"><strong>From:</strong> {{ boxes[3*i+c].senderName }} </span>
              <br>
              <span class="subtitle has-text-white-bis"><strong>To:</strong> {{ boxes[3*i+c].receiverName }} </span>
            </div>
            <button class="button is-white is-outlined" @click="showModal(3*i+c)">More<strong>+</strong></button>
          </article>
        </div>
      </div>
    </div>

    <b-modal v-if="isModalActive" :active.sync="isModalActive">
      <div class="tile is-ancestor">
        <div class="tile is-parent" >
          <article :class="boxes[mIndex].style" class="tile is-child box">
            <div class="content">
              <div class="title has-text-white-bis"> {{ boxes[mIndex].name }}</div>
              <span class="subtitle has-text-white-bis"><strong>From:</strong> {{ boxes[mIndex].senderName }} </span>
              <br>
              <span class="subtitle has-text-white-bis"><strong>Adr:</strong> {{ boxes[mIndex].originAddress }} </span>
              <hr>
              <span class="subtitle has-text-white-bis"><strong>To:</strong> {{ boxes[mIndex].receiverName }} </span>
              <br>
              <span class="subtitle has-text-white-bis"><strong>Adr:</strong> {{ boxes[mIndex].destinationAddress }} </span>
              <div style="margin-top:20px">
                <div class="field">
                  <b-switch v-model="isSwitched" type="is-warning"/>
                </div>
                <div v-if="isSwitched" class="image">
                  <img src="~/assets/Map.png" alt="Map_Mockup">
                </div>
                <div v-else class="tile is-ancestor is-vertical">
                  <div class="tile is-parent is-vertical">
                    <div v-if="boxes[mIndex].transporters.length > 0">
                      <div v-for="a in boxes[mIndex].transporters" v-if="a != '0x0000000000000000000000000000000000000000' " :key="a" class="card has-text-centered" style="padding: 5px 0">
                        <strong>
                          {{ a }}
                        </strong>
                      </div>
                    </div>
                    <div v-else>
                      <div class="card has-text-centered" style="padding: 5px 0">
                        <strong>
                          Not register address yet
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br>
              <div>
                <button class="button level-item is-white is-outlined is-big" @click="addTransporter(mIndex)">Register Reception</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
import Gun from 'gun/gun'

export default {
  components: {},
  head: {
    title: 'Fairivery/Package Box'
  },
  data() {
    return {
      counter: [0, 1, 2],
      variations: ['primary', 'info', 'link', 'success', 'danger'],
      isModalActive: false,
      isSwitched: true,
      mIndex: '0',
      boxes: [],
      boxesLength: 0
    }
  },
  mounted() {
    this.randomStyle()
    this.getBoxes()
  },
  methods: {
    randomStyle() {
      let self = this

      var randomValue = this.variations[
        Math.floor(Math.random() * this.variations.length)
      ]
      self.style = 'has-background-' + randomValue
      return self.style
    },
    async showModal(_index) {
      this.mIndex = _index
      console.log(this.mIndex)
      self.control = await this.getBoxExtra(this.mIndex)
      this.isModalActive = true
    },
    async addTransporter(_index) {
      console.log(_index)
      let packData = await this.$store.dispatch('supplyChain/getPackageData', {
        index: _index
      })

      let transporters = packData[2]
      var counter = 0
      while (
        transporters[counter] != '0x0000000000000000000000000000000000000000' &&
        counter < 10
      )
        counter++

      console.log(counter)
      await this.$store.dispatch('supplyChain/addTransporter', {
        packageNum: _index,
        position: counter
      })
    },
    async getBoxes() {
      let self = this
      this.address = await this.$store.dispatch('supplyChain/getAccount')
      var gun = Gun()
      console.log(await this.address)
      gun
        .get(this.address)
        .map()
        .once(function(data) {
          self.getBox(data.box)
        })
    },

    async getBox(boxId) {
      this.tokenName = await this.$store.dispatch(
        'supplyChain/getPackageStrings',
        { index: boxId - 1 }
      )
      /*
      this.tokenData = await this.$store.dispatch(
        'supplyChain/getPackageData',
        { index: boxId - 1 }
      )
      */
      console.log(this.tokenName)
      this.boxes.push({
        name: this.tokenName[0],
        senderName: this.tokenName[1],
        sender: '',
        receiverName: this.tokenName[2],
        receiver: '',
        originAddress: this.tokenName[3],
        destinationAddress: this.tokenName[4],
        transporters: [],
        style: this.randomStyle()
      })
      this.boxesLength = this.boxes.length
    },
    async getBoxExtra(boxId) {
      this.packData = await this.$store.dispatch('supplyChain/getPackageData', {
        index: boxId
      })
      this.boxes[boxId].sender = this.packData[0]
      this.boxes[boxId].receiver = this.packData[1]
      this.boxes[boxId].transporters = this.packData[2]
    }
  }
}
</script>
<style>
.wrapper {
  padding: 20px;
}
.is-vertical-centered {
  display: flex;
  align-items: center;
}
</style>
