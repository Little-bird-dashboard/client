<template>
  <div id='LogoutButton'>
    <input type="button" @click="endUserSession"/>
  </div>
</template>
<script>
export default {
  name: 'LogoutButton',
  methods: {
    endUserSession() {
      window.sessionStorage.clear();
      window.localStorage.clear();
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style scoped>
</style>
