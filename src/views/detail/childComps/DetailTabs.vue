<template>
  <van-tabs class="tab" line-width="0" line-height="0" title-active-color="red">
    <van-tab title="商品" name="pop"></van-tab>
    <van-tab title="参数" name="new"></van-tab>
    <van-tab title="评论" name="sell"></van-tab>
    <van-tab title="推荐" name="sell"></van-tab>
  </van-tabs>
</template>

<script>
import Vue from 'vue';
import {Tab, Tabs} from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: "DetailTabs"
}
</script>

<style scoped>
.tabs{
  width: 200px;
}
</style>
