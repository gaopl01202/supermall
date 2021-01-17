<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return{
      message:'',
      isShow: false
    }
  },
}
</script>

<style scoped>
.toast{
  background-color: #000000;
  opacity: 0.66;
  color:white ;
  text-align: center;
  line-height: 40px;
  width: 100px;
  margin-left: calc(50% - 50px);
  margin-top: 100%;
}
</style>
