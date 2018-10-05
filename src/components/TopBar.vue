<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item">
        <h1><strong>BOX·TO·GO</strong></h1>
      </span>
      <!--TODO: HAMBURGER-->
    </div>

    <div id="navbarSections" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link to="/packbox">
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
