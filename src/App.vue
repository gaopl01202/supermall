<template>
  <div id="app">
<!--    加载其他router页面-->
    <router-view></router-view>
<!--    使用tabbar-->
    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-o">我</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>

// 引入tarbar
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  name: 'App',
  components: {},
  data() {
    return {

    };
  },

}
</script>

<style>
@import "assets/css/base.css";

</style>
