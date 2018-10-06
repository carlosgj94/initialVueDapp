<template>
  <section class="hero is-fullheight has-background-light">
    <div id="transport.form" class="container columns is-fluid widescreen" style="margin-top: 50px">
      <div class="column is-6 is-offset-3">
        <div class="tile is-ancestor is-vertical">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <b-field>
                <b-input placeholder="Search..."
                         type="search"
                         icon="magnify"
                         expanded
                />
                <p class="control">
                  <button class="button is-primary">Search</button>
                </p>
              </b-field> 
            </div>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box has-background-white">
              <div class="content">
                <div v-if="pack.name">
                  <div class="title"> {{ pack.name }}</div>
                  <span class="subtitle"><strong>From:</strong> {{ pack.senderName }} </span>
                  <br>
                  <span class="subtitle"><strong>Adr:</strong> {{ pack.originAddress }} </span>
                  <hr>
                  <span class="subtitle"><strong>To:</strong> {{ pack.receiverName }} </span>
                  <br>
                  <span class="subtitle"><strong>Adr:</strong> {{ pack.originAddress }} </span>
                  <p class="image" style="padding-top: 20px">
                    <img src="~/assets/Map.png" alt="Map_Mockup">
                  </p>
                  <div>
                    <button class="button level-item is-primary is-outlined is-big">Add TrackPoint</button>
                  </div>
                </div>
                <div v-else class="has-text-centered">
                  TRACKING <b-icon icon="map" size="is-large" type="is-primary"/> PACKAGE
                </div>
              </div>
            </article>
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
    title: 'fairivery/Transport Interface'
  },
  data() {
    return {
      counter: [1, 2, 3],
      variations: ['primary', 'info', 'link', 'success', 'danger'],
      isModalActive: false,
      pack: {
        name: '',
        senderName: 'Me',
        receiverName: 'You',
        originAddress: 'Here',
        destinationAddress: 'There',
        style: ''
      }
    }
  }
}
</script>
