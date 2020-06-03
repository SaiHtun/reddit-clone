<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">{{title? "Reddit/" + title: "Reddit"}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['title'],
  data: ()=> ({ }),
}
</script>

<style>
.navbar {
  width: 100%;
}
</style>
