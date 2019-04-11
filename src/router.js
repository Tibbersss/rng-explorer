import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Unit from './pages/Unit.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/unit/:value',
      name: 'unit',
      component: Unit
    }
  ]
})
