<template>
  <section>
    <div>
      <top-bar />
    </div>
    <div>
      <h1>This is Profile</h1>
    </div>
  </section>
</template>
<script>
import TopBar from '~/components/TopBar.vue'

export default {
  components: {
    TopBar
  },
  head: {
    title: 'Campaigns'
  }
}
</script>
