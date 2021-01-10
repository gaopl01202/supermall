<template>
  <div>
    <van-nav-bar left-arrow @click-left="goBack" fixed>
      <detail-tabs slot="title" class="tabs"></detail-tabs>
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
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
