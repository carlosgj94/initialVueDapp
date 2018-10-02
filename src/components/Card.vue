<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Component
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a href="#">@carlos_molotov</a>. <a href="#">#css </a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 2 Oct 2018</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
<script>
</script>
<style scoped>
.card {
  -moz-border-radius: 10px;
  border-radius: 10px;
  margin-top: 35px;
  border-color: #fdcbf1;
  margin-left: 15px;
}

.card-header {
  background-image: linear-gradient(
    120deg,
    #fdcbf1 0%,
    #fdcbf1 60%,
    #cceeff 100%
  );
  -moz-border-radius: 10px;
  border-radius: 10px;
  border-color: #fdcbf1;

  position: absolute;
  margin-top: -20px;
  min-width: 95%;
  max-height: 55%;

  margin-left: 2.5%;
}

.card-content {
  padding-top: 50px;
  border-color: #fdcbf1;
}

a {
  color: #f83acc;
}
</style>
