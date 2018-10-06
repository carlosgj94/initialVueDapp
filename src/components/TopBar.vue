<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item">
        <img class="image is-36x36" src="~/assets/bike-parking.svg">
        <h1>
          <strong>
            <span class="cyanlogo">FAIR</span><span class="has-text-info">IVERY</span>
          </strong>
        </h1>
      </span>
      <!--TODO: HAMBURGER-->
    </div>

    <div id="navbarSections" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link to="/packbox" class="has-text-grey">
            My_Packages
          </nuxt-link>
        </div>

        <a class="navbar-item">
          <nuxt-link class="button is-info" to="/create">
            New package
          </nuxt-link>
        </a>

        <div class="navbar-divider"/>

        <a class="navbar-item">
          <nuxt-link class="button is-black" to="/transportui">
            TransporterUI
          </nuxt-link>
        </a>
      </div>

    </div>
  </nav>
</template>
<script>
</script>
<style>
.cyanlogo {
  color: #00ffff;
}
</style>
