<template>
  <div id="login">

    <div class="bg-primary hero text-center">
      <img class="heroIcon" src="../../static/logo.png" alt="logo">
      <h2 class="title">Little Bird</h2>
    </div>
    <div class="loginForm container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="margin-top input">
            <div class="form-group" :class="{ 'has-error': isEmpty(user.email) && blur.email}">
              <input type="text" name="email" class="form-control" aria-label="Text input for email" placeholder="Email" v-model="user.email" @blur="blur.email = true">
            </div>
          </div>
          <div class="margin-top input">
            <div class="form-group" :class="{ 'has-error': isEmpty(user.password) && blur.password}">
              <input type="password" name="password" class="form-control" aria-label="Text input for password" placeholder="Password" v-model="user.password" @blur="blur.password = true">
            </div>
          <button type="button" class="input btn btn-primary margin-top" @click="login">Login</button>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: {
      email: '',
      password: ''
    },
    blur: {
      email: false,
      password: false
    }
  }
  },
  methods: {
    login() {
      if (this.isEmpty(this.user.email) || this.isEmpty(this.user.password)) {
       alert('Please fill out all fields.')
      } else if (!this.validEmail(this.user.email)){
        alert('Not a valid email address.');
      } else {
      axios.post('https://littlebird-platform.herokuapp.com/auth/login', this.user)
      .then(response => {
        if(this.$session.exists()){
          this.$session.destroy();
        }
        this.$session.set('token', response.data.token)
        // sessionStorage.setItem('timestamp', this.$options.moment.add(2, 'hours')
        this.$router.push('/dashboard')
      })
      .catch(err => {
        alert(err);
      })}
    },
    isEmpty (value) {
      return value.trim() === ''
    },
    validEmail (value) {
      const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return typeof value == 'string' && value.trim() != '' && emailRegex.test(value);
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
