<template>
  <section class="has-background-light">

    <div id="create.form" class="container columns is-fluid widescreen">
      <div class="column is-two-thirds card-content has-background-white">
        <div class="columns">
          <div class="column is-10 is-offset-1" style="padding: 20px">

            <b-field horizontal label="Package">
              <b-input name="subject" expanded />
            </b-field>

            <br>
            <div class="control">
              <button class="button is-primary">Register</button>
            </div>

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
    title: 'Campaigns'
  }
}
</script>
<style scoped>
.wrap {
  padding: 20px;
  backaground-color: blue;
}
</style>
