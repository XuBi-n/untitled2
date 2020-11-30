<template>
 <div id="app">
     <div class="opt-bar">
         <ul>
             <li><el-button type="primary" @click="toUrl('/home')">学生</el-button></li>
             <li><el-button type="primary" @click="toUrl('/compa')">测试1</el-button></li>
             <li><el-button type="primary" @click="toUrl('/compb')">测试2</el-button></li>
         </ul>
     </div>
     <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods:{
      toUrl:function (path) {
        this.$router.replace(path);
      }
  }
}
</script>

<style lang="scss" scoped>
  .opt-bar{
      width: 100%;
      height: 50px;
      line-height: 50px;
      li{
          float: left;
          margin-left: 10px;
      }
  }
</style>
