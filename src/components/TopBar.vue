<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item">
        <b-icon icon="package" size="is-medium" type="is-primary"/>
        <h1><strong><span class="has-text-primary">FAIR</span>IVERY</strong></h1>
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
          <nuxt-link class="button is-primary" to="/create">
            New package
          </nuxt-link>
        </a>
      </div>

    </div>
  </nav>
</template>
<script>
</script>
<style scoped>
</style>
