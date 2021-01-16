<template>
  <div>

    <!--    轮播图-->
    <home-swipe :banners="banners"></home-swipe>
    <!--    推荐-->
    <home-recommend :recommends="recommends"></home-recommend>
    <!--    本周流行-->
    <feature-view style="margin-top: 10px"></feature-view>
    <!--    tab分类-->
    <home-tabs @tabType="tabClick" style="margin-top: -3px">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad(type)">
        <goods-list :goods-list="showGoods" :key="type"></goods-list>
      </van-list>
    </home-tabs>
    <back-top></back-top>


  </div>
</template>

<script>

import {getHomeMultidata, getHomeGoods} from "@/network/home";
import HomeSwipe from "@/views/home/childComps/HomeSwipe";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";
import FeatureView from "@/views/home/childComps/FeatureView";
import HomeTabs from "@/views/home/childComps/HomeTabs";
import testlist from "@/views/home/childComps/testlist";
import test from "@/views/test/test";
//引入商品列表数据展示组件
import GoodsList from "@/components/content/goods/GoodsList";
//引入滚动组件
import Scroll from "@/components/common/scroll/Scroll";
//引入列表加载
import Vue from 'vue';
import {List} from 'vant';
//引入点击向上
import backTop from "@/components/content/backTop/backTop";


Vue.use(List);

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      type: 'pop',
      loading: false,
      finished: false,
      homescrollTop: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.type].list
    }
  },
  mounted() {

  },
  activated() {
    console.log("1111");
    window.addEventListener('scroll', this.watchScroll,)
    document.documentElement.scrollTop =  this.scrollTop
  },
  deactivated() {
    console.log("2222");
    window.removeEventListener('scroll', this.watchScroll)

  },
  methods: {
    tabClick(tabType) {
      this.type = tabType;
    },
    onLoad(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page
        this.loading = false
      })
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    watchScroll(){
        this.homescrollTop = document.documentElement.scrollTop
    }
  },
  components: {
    HomeSwipe,
    HomeRecommend,
    FeatureView,
    HomeTabs,
    testlist,
    test,
    GoodsList,
    Scroll,
    backTop
  },
  created() {
    // 1、请求多个数据(轮播图等)
    this.getHomeMultidata()
    console.log('3333');
    // 2、请求商品信息
    // this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
  },
  destroyed() {
    console.log('销毁');
    window.removeEventListener('scroll', this.watchScroll)
  }
}
</script>

<style scoped>

</style>
