<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <h1><strong>GovernChain</strong></h1>
        <!--<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">-->
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/home">
          Current_Campaigns
        </nuxt-link>

        <a class="navbar-item">
          <nuxt-link class="button is-primary" to="/create">New Campaign</nuxt-link>
        </a>

        <a class="navbar-item">
          Documentation
        </a>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-primary" to="/profile">
              <strong>Profile</strong>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
</script>
<style scoped>
</style>
