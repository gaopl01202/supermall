<template>
  <div class="goods" @click="goDetail">
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
  data() {
    return {
      // imgsrc: this.goods.show.img,
      title: this.goods.title,
      price: this.goods.price,
      sale: this.goods.sale,
      iid: this.goods.iid
    }
  },
  computed:{
    imgsrc(){
      return  this.goods.image || this.goods.show.img
    }
  },
  props: {
    goods: Object
  },
  methods: {
    goDetail() {
      if(this.iid){
        this.$router.push({
          path: `/detail/${this.iid}`,
        })
      }
    }
  }
}
</script>

<style scoped>
.goods {
  text-align: center;
  font-size: 12px;
}

.price {
  color: red;
}

</style>
