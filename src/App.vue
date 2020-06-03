<template>
  <div id="app" class="container">
    <navbar :title="title"></navbar>
    <posts :getTitle="getTitle"></posts>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Posts,
    Navbar
  },
  data: () => ({
    title: '',
  }),
  methods: {
    getTitle(val) {
      this.title = val;
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
}

</style>
