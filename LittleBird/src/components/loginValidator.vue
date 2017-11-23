<template>
  <div id="loginValidator">

  </div>
</template>
<script>

export default {
  name: "loginValidator",
  mounted() {
    if(!this.$session.has('token')){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
</style>
