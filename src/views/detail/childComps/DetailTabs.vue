<template>
  <div>
    <van-tabs class="tab" line-width="0" line-height="0" title-active-color="red" @click="onClick" v-model="activeName">
      <van-tab title="商品" name="baseinfo"></van-tab>
      <van-tab title="参数" name="pararms"></van-tab>
      <van-tab title="评论" name="rate"></van-tab>
      <van-tab title="推荐" name="recommend"></van-tab>

    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import {Tab, Tabs} from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: "DetailTabs",
  computed:{
    activeName:{
      get(){
        return this.activetab
      },
      set(){
      }


    }
  },
  props:["activetab"],
  methods:{
    onClick(name){
      this.$emit('clicktabs',name)
    }
  }
}
</script>

<style scoped>
.tabs{
  width: 200px;
}
</style>
