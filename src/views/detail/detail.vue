<template>
  <div>
    <!--    顶部导航-->
    <detail-nav-bar></detail-nav-bar>
    <!--    轮播图-->
    <detail-swipe :detail-images="goodsInfo.topImages"></detail-swipe>
    <!--    商品基础信息-->
    <detail-base-info :base-info="goodsInfo"></detail-base-info>
    <!--    店铺信息-->
    <detail-shop-info :shopInfo="goodsInfo"></detail-shop-info>
    <!--    商品详情展示-->
    <detail-show :goods-info="goodsInfo"></detail-show>
    <!--    商品参数展示-->
    <detail-params :goods-info="goodsInfo"></detail-params>
    <!--    评价-->
    <detail-rate :goods-info="goodsInfo.rate"></detail-rate>
    <!--    推荐商品-->
    <goods-list :goods-list="recommendGoods"></goods-list>
    <!--    底部菜单-->
    <detail-goods-action style="height: 50px"></detail-goods-action>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailGoodsAction from "@/views/detail/childComps/DetailGoodsAction";
import {getDetail, getRecommend, goods} from '@/network/detail'
import DetailSwipe from "@/views/detail/childComps/DetailSwipe";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailShow from "@/views/detail/childComps/DetailShow";
import DetailParams from "@/views/detail/childComps/DetailParams";
import DetailRate from "@/views/detail/childComps/DetailRate";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      goodsInfo: {},
      recommendGoods: []
    }
  },
  watch: {
    $route(to, from) {
      document.documentElement.scrollTop = 0
      this.iid = this.$route.params.iid
      if (this.iid) {
        getDetail(this.iid).then(res => {
          this.goodsInfo = new goods(res.result)
          // this.initData()
        })
      }
    }
  },
  components: {
    DetailNavBar,
    DetailGoodsAction,
    DetailSwipe,
    DetailShopInfo,
    DetailBaseInfo,
    DetailShow,
    DetailParams,
    DetailRate,
    GoodsList,
  },
  created() {
    document.documentElement.scrollTop = 0
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      this.goodsInfo = new goods(res.result)
      // this.initData()
    })
    getRecommend().then(res => {
      // console.log(res.data.list);
      this.recommendGoods = res.data.list
      // console.log(this.recommendGoods);
    })
  }

}
</script>

<style scoped>

</style>
