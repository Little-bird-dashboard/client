import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import Student from '../pages/Student.vue'

Vue.use(Router)


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
			path: '/student/:student_id',
			name: 'StudentPage',
			component: Student
		}]
})
