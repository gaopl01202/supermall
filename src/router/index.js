import Vue from 'vue';
import VueRouter from "vue-router";

const Home = () => import('@/views/home/home')
const List = () => import('@/views/category/category')
const Cart = () => import('@/views/cart/cart')
const Profile = () => import('@/views/profile/profile')
const Detail = () => import('@/views/detail/detail')


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
    meta:{
      isShowTabbar: true
    }
  },
  {
    component: Cart,
    name: 'cart',
    path: '/cart',
    meta:{
      isShowTabbar: true
    }
  },
  {
    component: List,
    name: 'category',
    path: '/category',
    meta:{
      isShowTabbar: true
    }
  },
  {
    component: Profile,
    name: 'profile',
    path: '/profile',
    meta:{
      isShowTabbar: true
    }
  },
  {
    component: Detail,
    name: 'detail',
    path: '/detail/:iid',
    meta:{
      isShowTabbar: false
    }
  }
]


export default new VueRouter({
  routes,
  // mode: 'history'
})

