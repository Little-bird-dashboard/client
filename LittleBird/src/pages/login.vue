<template>
  <div id="login">
    <div class="bg-primary hero text-center">
      <img class="heroIcon" src="../../static/logo.png" alt="logo">
      <h2 class="title">Little Bird</h2>
    </div>
    <div class="loginForm container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 login-fields">
          <div class="margin-top input">
            <div class="form-group" :class="{ 'has-error': isEmpty(user.email) && blur.email}">
              <input type="text" name="email" class="form-control" aria-label="Text input for email" placeholder="Email" v-model="user.email" @blur="blur.email = true">
            </div>
          </div>
          <div class="margin-top input">
            <div class="form-group" :class="{ 'has-error': isEmpty(user.password) && blur.password}">
              <input type="password" name="password" class="form-control" aria-label="Text input for password" placeholder="Password" v-model="user.password" @blur="blur.password = true">
            </div>
          <button type="button" class="input btn btn-primary" @click="login">Login</button>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

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
      },
      apiURL: 'https://littlebird-platform.herokuapp.com/auth/login',
      devURL: 'http://localhost:3000/auth/login'
    }
  },
  methods: {
    login() {
      if (this.isEmpty(this.user.email) || this.isEmpty(this.user.password)) {
       alert('Please fill out all fields.')
      } else if (!this.validEmail(this.user.email)){
        alert('Not a valid email address.');
      } else {
        this.user.email = this.user.email.toLowerCase();
        fetch(this.apiURL, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json"
          }),
          body: JSON.stringify(this.user)
        })
        .then(response => {
          if(!response.ok){
            return {error:response.statusText}
          } else {
          return response.json()
        }
        })
        .then(response => {
          if(response.error){
            alert(response.error)
          }
          if(this.$session.exists()){
              this.$session.destroy();
          }
          window.sessionStorage.clear()
          window.sessionStorage.setItem('token', response.token)
          window.localStorage.clear();
          window.localStorage.setItem('load', JSON.stringify(response))
          // sessionStorage.setItem('timestamp', this.$options.moment.add(2, 'hours')
          this.$router.push({ name: 'main' })
        })
        .catch(err => {
          console.error(err)
        });
      }
      },
    isEmpty (value) {
      return value.trim() === ''
    },
    validEmail (value) {
      const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return typeof value == 'string' && value.trim() != '' && emailRegex.test(value.toLowerCase());
    }
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
    .margin {
        margin: 5px;
    }
    .margin-top {
        margin-top: 20px;
    }
    .loginForm {
        width: 100%;
        align-items: center;
        margin-top: 40px;
    }
    .justify-content-center {
        width: 30%;
        margin: 0 auto;
        position: relative;
    }
    .login-fields {
        width: 100%;
    }
    .input {
        margin: 0 auto;
        position: relative;
        display: inherit;
    }
    .btn-primary {
        background-color: #3F51B5;
        border-color: 0px;
    }
</style>
