import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
