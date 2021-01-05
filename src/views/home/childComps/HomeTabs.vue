<template>
  <div>
    <van-tabs @click="tabClick" sticky>
      <van-tab title="流行" name="pop">
        <slot></slot>
      </van-tab>
      <van-tab title="新款" name="new">
        <slot></slot>
      </van-tab>
      <van-tab title="精选" name="sell">
        <slot></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 引用vant的tab
import Vue from 'vue';
import {Tab, Tabs} from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: "HomeTabs",
  data(){
    return{
    }
  },
  methods:{
    tabClick(name){
      this.$emit('tabType',name)
      // console.log(name);
    }
  }
}
</script>

<style scoped>

</style>
