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
              <p class="image" style="padding-top: 20px">
                <img src="~/assets/Map.png" alt="Map_Mockup">
              </p>
              <div>
                <button class="button level-item is-white is-outlined is-big" @click="addTransporter(mIndex)">Register Recievement</button>
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
    showModal(_index) {
      this.mIndex = _index
      console.log(this.mIndex)
      this.isModalActive = true
    },
    async addTransporter(_index) {
      console.log(this.pack.transporters.length)
      await this.$store.dispatch('supplyChain/addTransporter', {
        packageNum: _index,
        position: this.boxes[_index].transporters.length
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
        //sender: this.tokenData[0],
        receiverName: this.tokenName[2],
        //receiver: this.tokenData[1],
        originAddress: this.tokenName[3],
        destinationAddress: this.tokenName[4],
        //transporters: this.tokenData[2],
        style: this.randomStyle()
      })
      this.boxesLength = this.boxes.length
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
