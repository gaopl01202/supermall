<template>
  <div>
    <van-nav-bar left-arrow @click-left="goBack" fixed>
      <detail-tabs :activetab="activetab" slot="title" class="tabs" @clicktabs="clicktabs"></detail-tabs>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import {NavBar} from 'vant';
import DetailTabs from "@/views/detail/childComps/DetailTabs";

Vue.use(NavBar);

export default {
  name: "NavBar",
  components: {
    DetailTabs
  },
  props:["activetab"],
  methods: {
    goBack() {
      this.$router.back()
    },
    clicktabs(name) {
      this.$emit('clicktabs',name)
    }
  }
}
</script>

<style scoped>

</style>
