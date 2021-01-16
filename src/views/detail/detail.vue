<template>
  <div>
    <!--    顶部导航-->
    <detail-nav-bar @clicktabs="clicktabs" style="height: 46px" :activetab="activetab"></detail-nav-bar>
    <!--    轮播图-->
    <div>
      <detail-swipe :detail-images="goodsInfo.topImages" id="baseinfo"></detail-swipe>
      <!--    商品基础信息-->
      <detail-base-info :base-info="goodsInfo"></detail-base-info>
      <!--    店铺信息-->
      <detail-shop-info :shopInfo="goodsInfo"></detail-shop-info>
      <!--    商品详情展示-->
      <detail-show :goods-info="goodsInfo"></detail-show>
      <!--    商品参数展示-->
      <detail-params :goods-info="goodsInfo" id="pararms"></detail-params>
      <!--    评价-->
      <detail-rate :goods-info="goodsInfo.rate" id="rate"></detail-rate>
      <!--    推荐商品-->
      <goods-list :goods-list="recommendGoods" id="recommend"></goods-list>
    </div>
    <back-top></back-top>
    <!--    底部菜单-->
    <detail-goods-action @addcart="addcard" style="height: 50px"></detail-goods-action>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailGoodsAction from "@/views/detail/childComps/DetailGoodsAction";
import {getDetail, getRecommend, goods, debounce} from '@/network/detail';
import DetailSwipe from "@/views/detail/childComps/DetailSwipe";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailShow from "@/views/detail/childComps/DetailShow";
import DetailParams from "@/views/detail/childComps/DetailParams";
import DetailRate from "@/views/detail/childComps/DetailRate";
import GoodsList from "@/components/content/goods/GoodsList";
import backTop from "@/components/content/backTop/backTop";
import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Vuex)

export default {
  name: "detail",
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
    backTop,
  },
  data() {
    return {
      iid: null,
      goodsInfo: {},
      recommendGoods: [],
      scrollTop: 0,
      baseinfoScroll: 0,
      pararmsScroll: 0,
      rateScroll: 0,
      recommendScroll: 0,
      // good:{
      //   iid:this.iid,
      //   title:this.goodsInfo.title,
      //   desc:this.goodsInfo.desc,
      //   price:this.goodInfo.price,
      //   num:1,
      //   img:this.goodsInfo.goodsImages[0]
      // }
      // good:{
      //   iid:'ajjjdas',
      //   title:'this.goodsInfo.title',
      //   desc:'this.goodsInfo.desc',
      //   price:300,
      //   num:1,
      // }
    }
  },
  methods: {
    setScroll() {
      this.baseinfoScroll = document.getElementById('baseinfo').offsetTop - 46
      this.pararmsScroll = document.getElementById('pararms').offsetTop - 46
      this.rateScroll = document.getElementById('rate').offsetTop - 46
      this.recommendScroll = document.getElementById('recommend').offsetTop - 46

      console.log('-----------' + this.baseinfoScroll);
    },
    clicktabs(name) {
      this.setScroll()
      switch (name) {
        case 'baseinfo':
          document.documentElement.scrollTop = this.baseinfoScroll
          // document.documentElement.scrollTop = document.getElementById(name).offsetTop - 46
          break
        case 'pararms':
          document.documentElement.scrollTop = this.pararmsScroll
          // document.documentElement.scrollTop = document.getElementById(name).offsetTop - 46
          break
        case 'rate':
          document.documentElement.scrollTop = this.rateScroll
          // document.documentElement.scrollTop = document.getElementById(name).offsetTop - 46
          break
        case 'recommend':
          document.documentElement.scrollTop = this.recommendScroll
          // document.documentElement.scrollTop = document.getElementById(name).offsetTop - 46
          break
      }
    },

    watchScroll() {
      this.scrollTop = document.documentElement.scrollTop
      // console.log(this.scrollTop);
      // console.log(this.activetab)
      debounce(this.setScroll)()
    },
    addcard(){
      const good = {}
      good.iid = this.iid
      good.title = this.goodsInfo.title
      good.desc = this.goodsInfo.desc
      good.price = this.goodsInfo.readPrice
      good.img = this.goodsInfo.topImages[0]
      good.num = 1
      good.checked = true
      // console.log(good);
      this.$store.dispatch('addGood',good)
      Toast.success('添加成功');
    }
  },
  computed: {
    // baseinfoScroll: document.getElementById('baseinfo').offsetTop - 46,
    // pararmsScroll: document.getElementById('pararms').offsetTop - 46,
    // rateScroll: document.getElementById('rate').offsetTop - 46,
    // recommendScroll: document.getElementById('recommend').offsetTop - 46,
    activetab() {
      if (this.scrollTop < this.pararmsScroll) {
        return 'baseinfo'
      } else if (this.scrollTop >= this.pararmsScroll && this.scrollTop < this.rateScroll) {
        return 'pararms'
      } else if (this.scrollTop >= this.rateScroll && this.scrollTop < this.recommendScroll) {
        return 'rate'
      } else if (this.scrollTop > this.recommendScroll) {
        return 'recommend'
      }
    }
  },
  mounted() {

  },
  activated() {
    window.addEventListener('scroll', this.watchScroll,)
    document.documentElement.scrollTop = 0
  },
  deactivated() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  watch: {
    $route(to, from) {
      document.documentElement.scrollTop = 0
      this.iid = this.$route.params.iid
      if (this.iid) {
        getDetail(this.iid).then(res => {
          this.goodsInfo = new goods(res.result)
        })
      }
    },
    // scrollTop(){
    //   this.$nextTick(() =>{
    //     this.setScroll()
    //   })
    // },
    // scrollTop() {
    //   const test = this.debounce(this.setScroll)
    //   test()
    // },

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
