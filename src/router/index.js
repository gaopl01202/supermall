import Vue from 'vue';
import VueRouter from "vue-router";

const Home = () => import('../views/home/home')
const List = () => import('../views/category/category')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')


// 1、安装插件
Vue.use(VueRouter)

// 2、创建router
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    component: Home,
    name: 'home',
    path: '/home',
  },
  {
    component: Cart,
    name: 'cart',
    path: '/cart',
  },
  {
    component: List,
    name: 'category',
    path: '/category',
  },
  {
    component: Profile,
    name: 'profile',
    path: '/profile',
  }
]


export default new VueRouter({
  routes,
  mode: 'history'
})

