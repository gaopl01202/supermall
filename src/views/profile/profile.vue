<template>
<div>
  <h2>我</h2>
  <button @click="clicktab">test</button>
</div>
</template>

<script>
import Vue from 'vue'
import toast from "@/components/common/toast";
Vue.use(toast)

export default {

  name: "profile",
  methods:{
    clicktab(){
      this.$toast('测试',1000)
    }
  }
}
</script>

<style scoped>

</style>
