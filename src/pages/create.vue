<template>
  <section class="has-background-light">
    <div>
      <top-bar />
    </div>

    <div id="create.form" class="container columns is-fluid widescreen">
      <div class="column is-two-thirds card-content has-background-white">
        <div class="columns">
          <div class="column is-10 is-offset-1" style="padding: 20px">

            <div class="field">
              <label class="label">Campaign title</label>
              <div class="control">
                <input class="input" type="text" placeholder="text input">
              </div>
              <p class="help">this is a help text</p>
            </div>

            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea class="textarea" placeholder="textarea"/>
              </div>
            </div>

            <b-field label="Select a date">
              <b-datepicker :readonly="false" placeholder="type or select a date..." icon="calendar-today"/>
            </b-field>
            <hr>

            <b-field label="Question?">
              <b-input name="question" expanded />
            </b-field>

            <b-field grouped>
              <b-field label="Option a" expanded>
                <b-input/>
              </b-field>
              <b-field label="Option b" expanded>
                <b-input/>
              </b-field>
            </b-field>

            <br>
            <div class="control">
              <button class="button is-primary">Start campaign</button>
            </div>

          </div>
        </div>
      </div>
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
<style scoped>
.wrap {
  padding: 20px;
  backaground-color: blue;
}
</style>
