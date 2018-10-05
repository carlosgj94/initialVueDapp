<template>
  <section class="hero is-fullheight has-background-light">

    <div class="column is-10 is-offset-1 fluid" style="padding-top: 20px">
      <div class="tile is-ancestor">
        <div v-for="c in counter" :key="c" class="tile is-parent" >
          <article :class="pack.style" class="tile is-child box">
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
          <article :class="pack.style" class="tile is-child box">
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
export default {
  components: {},
  head: {
    title: 'Box·To·Go/Package Box'
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
  },
  methods: {
    randomStyle() {
      //let self = this

      var randomValue = this.variations[
        Math.floor(Math.random() * this.variations.length)
      ]
      this.pack.style = 'has-background-' + randomValue
    },
    something() {
      console.log('Package recieved')
    }
  }
}
</script>
<style scoped>
.wrapper {
  padding: 20px;
}
</style>
