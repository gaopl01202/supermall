<template>
  <div v-show="isShow" class="backtop" @click="backTop">
    <van-icon color="#1989fa" size="50px" name="upgrade"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);

export default {
  name: "backTop",
  data(){
    return{
      isShow:false
    }
  },
  //初始化完成后调用
  mounted() {
    // 添加监听时间，判断当前滚动高度，最终判断是否显示此组件
    window.addEventListener('scroll', this.scrollToTop,true)
  },
  // 销毁页面调用
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods:{



    scrollToTop() {
      //判断scrolltop的高度，如果大于100，就设置isShow为true
      let scrolltop = document.documentElement.scrollTop;
      scrolltop > 100 ? (this.isShow = true) : (this.isShow = false);
    },

    backTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(top);
      //实现滚动效果
      const timeTop = setInterval(() => {
       //获取当前滚动高度，然后定时减少高度
        document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  }
}
</script>

<style scoped>
.backtop{
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 10;
}
</style>
