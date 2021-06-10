import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tyy from './tyy'
import hxp from './hxp'
import zjy from './zjy'
import zlt from './zlt'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...tyy,
  ...hxp,
  ...zlt,
  ...zjy
]

const router = new VueRouter({
  routes
})

export default router
