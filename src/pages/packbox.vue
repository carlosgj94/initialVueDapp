<template>
  <section class="hero is-fullheight has-background-light">

    <div class="container fluid" style="padding: 20px">
      <div class="tile is-ancestor">
        <div v-for="c in counter" :key="c" class="tile is-parent" >
          <article class="tile is-child box has-background-primary">
            <div class="content">
              <p class="title"> {{ pack.name }} {{ c }} </p>
              <p class="subtitle"><strong>From:</strong> {{ pack.senderName }} </p>
              <p class="subtitle"><strong>To:</strong> {{ pack.receiverName }} </p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  head: {
    title: 'Campaigns'
  },
  data() {
    return {
      counter: [1, 2, 3],
      pack: {
        name: 'Package',
        senderName: 'Me',
        receiverName: 'You',
        originAddress: 'Here',
        destinationAddress: 'There'
      }
    }
  }
}
</script>
<style scoped>
.wrapper {
  padding: 20px;
}
</style>
