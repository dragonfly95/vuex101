<template>
  <div>
    <h2>게시판 리스트</h2>
    <a href="javascript:;" @click="getList">GET 방식 데이터 </a>

    <br><br><br><br><br>
    <router-link to="/board/write">글 작성 </router-link>
  </div>
</template>

<script>
export default {
  name: 'List',
  methods: {
    getList() {
      this.$axios.get('http://localhost:5500/1.json')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
}
</script>

<style scoped>

</style>
