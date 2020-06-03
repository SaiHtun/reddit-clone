<template>
  <div>
    <div class="media">
      <img :src="post.data.thumbnail" class="mr-3" alt="..." />
      <div class="media-body">
        <h3 class="mt-0">{{post.data.title}}</h3>
        <div class="cat">
          <span>{{post.data.ups}} ups</span> <span>{{new Date(post.data.created_utc)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
}
</script>

<style></style>
