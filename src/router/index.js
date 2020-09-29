import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '@/views/Foods.vue'
import Foodpost from '@/views/Foodpost.vue'
import Foodcomments from '@/views/Foodcomments.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food',
    component: Foods
  },
  {
    path:'/food/:id',
    component: Foodpost,
    children:[
      {
        path:"comments",
        component:Foodcomments,
      }
    ]
  },
  {
    path:'*',
    component:NotFound,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
