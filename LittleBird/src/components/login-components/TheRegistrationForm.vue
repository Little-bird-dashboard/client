<template>
  <div id='TheRegistrationForm' class="loginForm container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 login-fields">
          <div class="margin-top input">
            <div class="form-group" :class="{ 'has-error': isEmpty(user.email) && blur.email}">
              <input type="text" name="email" class="form-control" aria-label="Text input for email" placeholder="Email" v-model="user.email" @blur="blur.email = true">
            </div>
          </div>
          <div class="margin-top input">
            <div class="form-group" :class="{ 'has-error': isEmpty(user.password) && blur.password}">
              <input type="password" name="email" class="form-control" aria-label="Text input for email" placeholder="Password" v-model="user.passwordCheck" @blur="blur.email = true">
            </div>
          </div>
          <div class="margin-top input">
            <div class="form-group" :class="{ 'has-error': isEmpty(user.password) && blur.password && !passwordsMatch}">
              <input type="password" name="password" class="form-control" aria-label="Text input for password" placeholder="Verify Password" v-model="user.password" @blur="blur.password = true">
            </div>
          <button type="button" class="input btn btn-primary" @click="sendRegistration">Register</button>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheRegistrationForm',
  data() {
    return {
      user: {
        password: '',
        passwordCheck: '',
        email: ''
      },
      blur: {
        email: false,
        passwordCheck: false,
        password: false
      }
    }
  },
  computed: {
    passwordsMatch() {
      return this.user.password === this.user.passwordCheck;
    }
  },
  methods: {
    sendRegistration() {
      if (this.isEmpty(this.user.email) || this.isEmpty(this.user.password)) {
       alert('Please fill out all fields.')
      } else if (!this.validEmail(this.user.email)){
        alert('Not a valid email address.');
      } else if (!this.passwordsMatch){
        alert('Passwords do not match.');
      }else {
        this.user.email = this.user.email.toLowerCase();
        axios.post('', this.user)
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
      console.log(typeof value == 'string');
      console.log(value.trim() != '');
      console.log(emailRegex.test(value));
      return typeof value == 'string' && value.trim() != '' && emailRegex.test(value.toLowerCase());
    }
  }
}
</script>
<style scoped>
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
