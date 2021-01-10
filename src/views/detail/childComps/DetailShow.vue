<template>
  <div class="detailShow">
    <van-image v-for="item in goodsInfo.goodsImages" :src="item" width="100%"></van-image>
  </div>
</template>

<script>
import Vue from 'vue';
import {Image as VanImage} from 'vant';

Vue.use(VanImage);
export default {
  name: "DetailShow",
  props:{
    goodsInfo:{
      type:Object
    }
  }
}
</script>

<style scoped>
.detailShow{
  background-color: white;
  margin-top: 10px;
}
</style>
