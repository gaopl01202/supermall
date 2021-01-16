<template>
  <div class="submitbar">
    <button>{{btname}}</button>
  </div>
</template>

<script>
export default {
  name: "CartSubmitBar",
  data(){
    return{
      // name: null
    }
  },
  props:{
    btname:{
      type:String
    }
  }
}
</script>

<style scoped>
.submitbar{
  background-color: white;
  height: 50px;
}
</style>
