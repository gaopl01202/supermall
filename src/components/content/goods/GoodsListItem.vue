<template>
  <div class="goods">
    <van-image :src="imgsrc" radius="5"/>
<!--    <img :src="imgsrc" alt="">-->
    <div class="van-ellipsis">{{ title }}</div>
    <span class="price">{{ price }}</span>
    <span>{{ sale }}</span>
  </div>
</template>

<script>

import Vue from 'vue';
import {Image as VanImage} from 'vant';

Vue.use(VanImage);

export default {
  name: "GoodsListItem",
  // 图片、名称、价格、收藏数量
  data(){
    return{
      imgsrc : this.goods.show.img,
      title : this.goods.title,
      price: this.goods.price,
      sale: this.goods.sale
    }
  },
  props: {
    goods: Object
  }
}
</script>

<style scoped>
.goods{
  text-align:center;
  font-size: 12px;
}
.price {
  color: red;
}

</style>
