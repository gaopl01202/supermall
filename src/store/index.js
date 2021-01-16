import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    cartGoods:[]
  },
  mutations:{

  },
  actions:{
    addGood(context,payload){
      // 查找数组中，符合iid相同的元素，并返回元素下标
      let result = context.state.cartGoods.findIndex(item => item.iid === payload.iid)
      if (result != -1){
        context.state.cartGoods[result].num ++
      }else{
        context.state.cartGoods.push(payload)
      }
    }
  },
  getters:{
    totleNum(state){
      let totlenum = 0
      for (let i = 0; i < state.cartGoods.length; i++) {
        totlenum += state.cartGoods[i].num
      }
      return totlenum
    }
  }
})
