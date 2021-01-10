<template>
  <div class="params">
    <table v-if="goodsInfo.itemParamsRule">
      <tr v-for="(tritem,index) in goodsInfo.itemParamsRule.tables[0]" :key="index">
        <td v-for="(tditem,indey) in goodsInfo.itemParamsRule.tables[0][index]" :key="indey">{{ tditem }}</td>
      </tr>
    </table>
    <table v-if="goodsInfo.itemParamsInfo">
      <tr v-for="(item,index) in goodsInfo.itemParamsInfo.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params {
  background-color: white;
  margin-top: 10px;
}
</style>
