<template>
  <div class="shopInfo">
    <div class="logo" style="display: flex">
      <div>
        <van-image width="50px" height="50px" :src="shopInfo.shopLogo"></van-image>
      </div>
      <div style="margin-left: 10px">{{ shopInfo.shopName }}</div>
    </div>
    <div class="info">
      <div>
        <div>{{ shopInfo.cSells }}</div>
        <div>总销量</div>
      </div>
      <div>
        <div>{{ shopInfo.cGoods }}</div>
        <div>全部宝贝</div>
      </div>
      <div>
        <table>
          <tr v-for="item in shopInfo.scores">
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
            <td>{{ item.isBetter }}</td>
          </tr>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
import Vue from 'vue';
import {Image as VanImage} from 'vant';

Vue.use(VanImage);
export default {
  name: "DetailShopInfo",
  data() {
    return {}
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.shopInfo {
  background-color: white;
  margin-top: 10px;
}

.logo {
  padding: 10px;
}

.info {
  display: flex;
  font-size: 13px;
}
</style>
