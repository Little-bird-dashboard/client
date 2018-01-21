<template>
  <div id='RegistrationPage'>
    <div class="bg-primary hero text-center">
      <img class="heroIcon" src="../../static/logo.png" alt="logo">
      <h2 class="title">Little Bird</h2>
    </div>
    <TheRegistrationForm></TheRegistrationForm>
  </div>
</template>
<script>
import TheRegistrationForm from '../components/login-components/TheRegistrationForm'
export default {
  name: 'RegistrationPage',
  components: {
    TheRegistrationForm
  }
}
</script>
<style scoped>
.hero {
    width: 100%;
    background-color: #3F51B5;
}
.heroIcon {
    margin: 50px;
    margin-bottom: 10px;
}
.title {
    padding-bottom: 40px;
}
</style>
