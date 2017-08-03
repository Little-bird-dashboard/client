import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import Student from '../pages/Student.vue'

Vue.use(Router)


export default new Router({
	routes: [
		{
			path:      '/',
			name:      'main',
			component: main
		},{
			path: '/home',
			component: Home
		}, {
			path: '/student',
			component: Student
		}]
})
