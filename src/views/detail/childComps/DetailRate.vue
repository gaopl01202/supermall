<template>
  <div class="rate" v-if="goodsInfo.user">
    <span>{{ goodsInfo.user.uname }}</span>
    <div>{{ goodsInfo.content }}</div>
    <div>{{ goodsInfo.created | format }}</div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'

export default {
  name: "DetailRate",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    format(value) {
      let date = new Date(value * 1000)
      // console.log(date);
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style scoped>
.rate {
  background-color: white;
  margin-top: 10px;
}
</style>
