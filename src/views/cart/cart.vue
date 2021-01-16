<template>
  <div>
    <van-nav-bar :title=title></van-nav-bar>

    <div>
      <van-checkbox-group v-model="result" ref="checkboxgroup" @change="calcPrice(result)">
        <div class="cardlist" v-for="item in this.cartGoods">
          <van-checkbox :name=item.iid class="checkbox" :ref="item.iid"></van-checkbox>
          <van-card class="card"
                    :num=item.num
                    :price="item.price"
                    :desc=item.desc
                    :title=item.title
                    :thumb=item.img
          />
        </div>
      </van-checkbox-group>
    </div>

    <van-submit-bar class="submitbar" :price=totalPrice :button-text=activenum @submit="onSubmit">
      <van-checkbox v-model="allchecked">全选</van-checkbox>
    </van-submit-bar>


  </div>
</template>

<script>

import Vue from 'vue';
import {Card} from 'vant';
import {SubmitBar} from 'vant';
import {Checkbox, CheckboxGroup} from 'vant';
import {NavBar} from 'vant';

Vue.use(NavBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.use(Card);

export default {
  name: "cart",
  components: {},
  data() {
    return {
      result: [],
      cartGoods: this.$store.state.cartGoods,
      title: '购物车' + '(' + this.$store.getters.totleNum + ')',
      totalPrice:0,
      testa: true
    }
  },
  computed: {
    // totalPrice() {
    //   let totalprice = 0
    //   for (let i = 0; i < this.cartGoods.length; i++) {
    //     totalprice += this.cartGoods[i].price * 100 * this.cartGoods[i].num
    //   }
    //   return totalprice
    // },
    activenum(){
      return  '去结算('  + this.result.length + ')'
    },
    allchecked: {
      get() {
        if (this.cartGoods.length != 0) {
          return this.result.length == this.cartGoods.length
        } else {
          return false
        }
      },
      set() {
        if (this.cartGoods.length != 0) {
          if (this.result.length == this.cartGoods.length){
            this.$refs.checkboxgroup.toggleAll(false)
          }else if(this.result.length != this.cartGoods.length && this.result.length != 0){
            this.$refs.checkboxgroup.toggleAll(true)
          }else{
            this.$refs.checkboxgroup.toggleAll(true)
          }
        }
      },

    }

    // checked(){
    //
    //   if (this.cartGoods.length != 0){
    //     return this.result.length == this.cartGoods.length
    //   }else{
    //     return false
    //   }
    // }
  },
  methods: {
    onSubmit() {
      console.log('提交订单');
    },
    // check() {
    //   console.log(this.$refs.checkboxGroup)
    //   this.$refs.checkboxGroup.toggleAll[0](true)
    // }
    calcPrice(result){
      if (result.length != 0){
        // console.log(result);
        this.totalPrice = 0
        for (let i = 0; i <result.length; i++) {
          for (let j = 0; j <this.cartGoods.length; j++) {
            if (result[i] == this.cartGoods[j].iid){
              this.totalPrice += this.cartGoods[j].price * this.cartGoods[j].num *100
            }
          }
        }
      }else{
        this.totalPrice = 0
      }
    }
  },
}
</script>

<style scoped>
.submitbar {
  margin-bottom: 50px;
}

.cardlist {
  display: flex;
  background-color: #fafafa;
}

/*.cartgoods{*/
/*  background-color: #fafafa;*/
/*}*/
.checkbox {
  /*background-color: #fafafa;*/
  margin-left: 10px;
  z-index: 2;
}

.card {
  width: calc(100% - 25px);
  margin-left: -6px;
  z-index: 1;
}
</style>
