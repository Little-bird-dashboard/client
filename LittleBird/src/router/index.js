import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import Axios from 'axios'
import Student from '../pages/Student.vue'

Axios.defaults.headers.common.Accept = 'application'

Vue.config.debug = process.env.NODE_ENV !== 'production'


Vue.use(Router)

Object.defineProperty(Vue.prototype, '$http', {
	get () {
		return Axios;
	}
})


export default new Router({
	routes: [
		{
			path:      '/',
			name:      'main',
			component: Main
		},{
			path: '/home',
			name: 'HomePage',
			component: Home
		}, {
			path: '/students/:student_id',
			name: 'StudentPage',
			component: Student
		}]
})
