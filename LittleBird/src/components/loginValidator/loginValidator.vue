<template>
  <div id="loginValidator">

  </div>
</template>
<script>
export default {
  name: "loginValidator",
  data() {
    token = this.$localStorage.get('token')
  },
  mounted() {
    console.log(this.token)
    if(!this.token){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
</style>
