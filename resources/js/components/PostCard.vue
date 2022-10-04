<template>
  <div class="row">
    <div class="col-12 text-center">
      <div class="card">
        <h2>{{ post.title }}</h2>
        <img :src="post.image" :alt="post.title" />
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "PostCard",
  props: {
    post: Object,
  },
};
</script>
  