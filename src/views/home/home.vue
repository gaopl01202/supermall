<template>
  <div>
    <home-swipe :banners="banners"></home-swipe>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>

import {getHomeMultidata} from "@/network/home";
import HomeSwipe from "@/views/home/childComps/HomeSwipe";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },

  methods: {},
  components: {
    HomeSwipe,
    HomeRecommend
  },
  created() {
    // 1、请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
</style>
