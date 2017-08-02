import Vue from 'vue'
import Router from 'vue-router'
import Heading from '../components/Heading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/*',
      name: 'Heading',
      component: Heading
    }
  ]
})
