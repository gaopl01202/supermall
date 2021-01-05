<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img v-bind:height="imgheight" v-lazy="item.image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import {Swipe, SwipeItem} from 'vant';
import {Lazyload} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  name: "swipe",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    imgheight() {
      let w = window.innerWidth;
      return 390 / 750 * w
    }
  },
}
</script>

<style scoped>

</style>
