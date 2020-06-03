<template>
  <div class="posts">
    <form @submit.prevent="loadSub()" class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" v-model="subreddit" placeholder="Subreddits">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
    <post v-for="post in posts" :key="post.id" :post='post' class="m-2"></post>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import services from '@/services/api.js';

export default {
  name: 'Posts',
  components: {
    Post,
  },
  props: ['getTitle'],
  data: () => ({
    posts: [],
    subreddit: '',
  }),
  mounted() {
      this.load();
  },
  methods: {
    load() {
      services.getPosts().then(results => {
      this.posts = results.data.children;
     });
    },
    loadSub() {
       services.getSub(this.subreddit).then(results => {
         this.getTitle(this.subreddit);
         console.log(results);
         this.posts = results.data.children;
       });
    }
  },
};
</script>

<style>
</style>
