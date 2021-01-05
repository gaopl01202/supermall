<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goodsList" :goods="item" class="goods"></goods-list-item>
  </div>
</template>
<script>

import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  data() {
    return {}
  },
  props: {
    goodsList: Array
  }
}
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}

.goods {
  width: calc(50%);
  padding: 5px;
}
</style>
