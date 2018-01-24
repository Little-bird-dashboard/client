<template>
  <div id="LoginValidator">

  </div>
</template>
<script>

export default {
  name: "LoginValidator",
  mounted() {
    if(!this.$session.has('token')){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
</style>
