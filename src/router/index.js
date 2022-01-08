import Vue from 'vue'
import VueRouter from 'vue-router'
import Management from '@/views/Management.vue'
import UserWork from '@/views/UserWork.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Management',
    component: Management
  },
  {
    path: '/user',
    name: 'UserWork',
    component: UserWork
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
