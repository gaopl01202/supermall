<template>
  <div>
    <van-swipe :autoplay="3000" class="topimg">
      <van-swipe-item v-for="(item,index) in detailImages">
        <van-image :src="item" lazy-load :width="imgwidth"></van-image>
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
import Vue from 'vue';
import {Swipe, SwipeItem} from 'vant';
import { Image as VanImage } from 'vant';
import {Lazyload} from 'vant';

Vue.use(VanImage);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name: "DetailSwipe",
  props: {
    detailImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    imgwidth() {
      return window.innerWidth;
    }
  }
}
</script>

<style scoped>
.topimg{
  height: 350px;
  overflow: hidden;
}
</style>
