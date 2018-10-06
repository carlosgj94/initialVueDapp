<template>
  <section class="hero is-fullheight has-background-light">

    <div class="column is-10 is-offset-1 fluid" style="padding-top: 50px">
      <div v-for="i in counter" :key="i" class="tile is-ancestor">
        <div v-for="c in counter" :key="c" class="tile is-parent" >
          <article :class="randomStyle()" class="tile is-child box">
            <div class="content">
              <div class="title has-text-white-bis"> {{ pack.name }} Nº {{ c }} </div>
              <span class="subtitle has-text-white-bis"><strong>From:</strong> {{ pack.senderName }} </span>
              <br>
              <span class="subtitle has-text-white-bis"><strong>To:</strong> {{ pack.receiverName }} </span>
            </div>
            <button class="button is-white is-outlined" @click="isModalActive = true">More<strong>+</strong></button>
          </article>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isModalActive">
      <div class="tile is-ancestor">
        <div class="tile is-parent" >
          <article :class="randomStyle()" class="tile is-child box">
            <div class="content">
              <div class="title has-text-white-bis"> {{ pack.name }}</div>
              <span class="subtitle has-text-white-bis"><strong>From:</strong> {{ pack.senderName }} </span>
              <br>
              <span class="subtitle has-text-white-bis"><strong>Adr:</strong> {{ pack.originAddress }} </span>
              <hr>
              <span class="subtitle has-text-white-bis"><strong>To:</strong> {{ pack.receiverName }} </span>
              <br>
              <span class="subtitle has-text-white-bis"><strong>Adr:</strong> {{ pack.originAddress }} </span>
              <p class="image" style="padding-top: 20px">
                <img src="~/assets/Map.png" alt="Map_Mockup">
              </p>
              <div>
                <button class="button level-item is-white is-outlined is-big" @click="something">Register Recievement</button>
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
      counter: [1, 2, 3],
      variations: ['primary', 'info', 'link', 'success', 'danger'],
      isModalActive: false,
      pack: {
        name: 'Package',
        senderName: 'Me',
        receiverName: 'You',
        originAddress: 'Here',
        destinationAddress: 'There',
        style: ''
      }
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
    something() {
      console.log('Package recieved')
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
      console.log(this.tokenName)
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
