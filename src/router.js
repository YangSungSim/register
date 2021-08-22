import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import RegisterPage2 from '@/views/RegisterPage2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }, {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  }, {
    path: '/register-fake',
    name: 'RegisterPage2',
    component: RegisterPage2
  }]
})
