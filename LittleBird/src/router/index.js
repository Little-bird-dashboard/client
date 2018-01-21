import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
// import Home from '../pages/Home.vue'
import Axios from 'axios'
import Student from '../pages/Student.vue'
import CalendarPoll from '../pages/CalendarPoll'
import Login from '../pages/Login.vue'
import RegistrationPage from '../pages/RegistrationPage'

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
			name:      'login',
			component: Login
		},
		{
			path:      '/rwaVW77',
			name:      'registration',
			component: RegistrationPage
		},
		{
			path:      '/dashboard',
			name:      'main',
			component: Main
		}, {
			path: '/students/:student_id',
			name: 'StudentPage',
			component: Student
		}, {
			path: '/schedule/:student_id',
			name: 'CalendarPoll',
			component: CalendarPoll
		}
	]
})
