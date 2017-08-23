<template>
  <div id="login">

    <div class="bg-primary hero text-center">
      <img class="heroIcon" src="../../static/logo.png" alt="logo">
      <h2 class="title">Little Bird</h2>
    </div>
    <div class="loginForm container">
      <div class="row justify-content-center">
        <div class="col-lg-12 margin-top input">
          <div class="input-group">
            <input type="text" name="email" class="form-control" aria-label="Text input for email" placeholder="Email" v-model="user.email">
          </div>
        </div>
        <div class="col-lg-12 margin-top input">
          <div class="input-group">
            <input type="password" name="password" class="form-control" aria-label="Text input for password" placeholder="Password" v-model="user.password">
          </div>
        <button type="button" class="input btn btn-primary margin-top col-lg-12" @click="login">Login</button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {user: {
      email: '',
      password: ''
    }}
  },
  methods: {
    login() {
      axios.post('https://littlebird-platform.herokuapp.com/auth/login', this.user)
      .then(response => {
        console.log(response)
        localStorage.token = response.data.token;
        this.$router.push('/dashboard')
      })
      .catch(err => {
        alert(err);
      })
    }
  }
}
</script>
<style scoped>
.hero {
  width: 100%;
}
.heroIcon {
  margin: 50px;
  margin-bottom: 10px;
}
.title {
  padding-bottom: 20px;
}
.margin {
    margin: 5px;
}
.margin-top {
  margin-top: 5px;
}
</style>
