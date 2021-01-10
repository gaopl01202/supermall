<template>
  <div class="baseInfo">
    <div>{{ baseInfo.title }}</div>
    <div>
      <span>￥{{ baseInfo.nowPrice }}</span>
      <span>{{ baseInfo.oldPrice }}</span>
      <span v-bind:style={backgroundColor:baseInfo.discountBgColor}>{{ baseInfo.discountDesc }}</span>
    </div>
    <div style="display: flex" v-for="item in baseInfo.columns">
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  }

}
</script>

<style scoped>
.baseInfo {
  background-color: white;
  margin-top: 10px;
}
</style>
