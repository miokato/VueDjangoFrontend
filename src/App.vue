<template>
  <div class="container">
    <h1 class="title">Hello World</h1>
    <div v-for="blog in blogList">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">
            {{ blog.title }}
          </p>
        </div>
        <div class="card-content">
          <div class="content">
            {{ blog.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        blogList: []
      }
    },
    mounted: function () {
      console.log('mounted');

      axios.get('/api/blogs/')
        .then((response) => {
          this.blogList = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
</script>

<style>
  @import "../node_modules/bulma/css/bulma.css";
</style>
