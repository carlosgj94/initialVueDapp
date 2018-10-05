<template>
  <section class="has-background-light">

    <div class="container is-fluid" style="padding: 20px">
      <div class="tile is-ancestor">
        <div v-for="c in counter" :key="c" class="tile is-parent" >
          <article class="tile is-child box has-background-primary">
            <div class="content">
              <p class="title"> {{ thing.title }} </p>
              <p class="subtitle"> {{ thing.description }} </p>
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
      thing: {
        title: 'DefaultTitle',
        description: 'DefaultDescription'
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
