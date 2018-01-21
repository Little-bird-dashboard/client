// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLocalStorage from 'vue-localstorage';
import VueSession from 'vue-session';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueJWT from 'vuejs-jwt';



Vue.use(require('vue-moment'));
Vue.use(VueLocalStorage);
Vue.use(VueSession);
Vue.use(VueJWT);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el:         '#app',
	router,
	template:   '<App/>',
	components: { App }
})
