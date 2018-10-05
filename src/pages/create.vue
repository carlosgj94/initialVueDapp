<template>
  <section class="has-background-light">

    <div id="create.form" class="container columns is-fluid widescreen">
      <div class="column is-two-thirds card-content has-background-white">
        <div class="columns">
          <div class="column is-10 is-offset-1 wrap" style="padding: 20px">

            <b-field horizontal label="Package" custom-class="is-large">
              <b-input name="packageName" placeholder="Name your package" size="is-medium" expanded />
            </b-field>
            <hr>

            <b-field horizontal label="From" custom-class="is-medium">
              <b-input name="senderName" placeholder="Name" expanded />
            </b-field>
            <b-field horizontal custom-class="is-medium">
              <b-input name="originAddress" placeholder="Origin Address" expanded />
            </b-field>
            <br>

            <b-field horizontal label="To" custom-class="is-medium">
              <b-input name="receiverName" placeholder="Name" expanded />
            </b-field>
            <b-field horizontal custom-class="is-medium">
              <b-input name="destinationAddress" placeholder="Destination Address" expanded />
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
