<template>
<div>
  <!--底部导航-->
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-icon icon="star-o" text="收藏" />
    <van-goods-action-button type="warning" text="加入购物车" />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</div>
</template>

<script>
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  name: "GoodsAction"
}
</script>

<style scoped>

</style>
