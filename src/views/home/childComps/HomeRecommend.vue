<template>
  <div>
    <van-grid icon-size="60px" clickable :border="false">
      <van-grid-item v-for="(item, index) in recommends" :key="index" :icon="item.image" :text="item.title"/>
    </van-grid>
  </div>
</template>

<script>
// 引入vant grid组件
import Vue from 'vue';
import {Grid, GridItem} from 'vant';

Vue.use(Grid);
Vue.use(GridItem);

export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>
