<template>
  <div>
    <h1>hello</h1>
    <div v-for="blog in blogList">
      {{ blog.title }}
      {{ blog.body }}
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
</style>
