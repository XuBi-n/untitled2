<template>
   <div id="top-bar">
      <div class="city-btn" :class="{btnover:btnOver}">湖南
      </div>
      <div class="city-panel" @mouseover="btnOver=true" @mouseout="btnOver=false">
         <ul>
            <li v-for="c in citys" :key="c.id"><a href="">{{c.cityname}}</a></li>
<!--            <li><a href="">上海</a></li>-->
<!--            <li><a href="">天津</a></li>-->
<!--            <li><a href="">重庆</a></li>-->
<!--            <li><a href="">河南</a></li>-->
         </ul>
      </div>
   </div>
</template>

<script>
    export default {
        name: "CompA",
        created:function () {
           let param=new URLSearchParams();
           param.append("opt","city");
           this.axios.post("/api/tw/home",param).then(d=>{
              this.citys=d.data;
           }).catch(d=>{
              alert(d);
           })
        },
       data:function () {
         return{
            citys:[],
            btnOver:false
         }
       }
    }
</script>

<style lang="scss" scoped>
   @import "../sass/mixin";
  #top-bar{
     width: 100%;
     text-align: center;
     background-color: darkgray;
     .city-btn{
        @include button-normal;
        box-sizing: border-box;
        display: block;
        position: relative;
        background-color: white;
        left: 300px;
        z-index: 1;

        &:hover{
           background-color: aquamarine;
           border-bottom: transparent;
           & + .city-panel{
              display: block;
           }
        }
     }
     .btnover{
        background-color: aquamarine;
        border-bottom: transparent;
     }
     .city-panel:hover{
        display: block;
        & &>div:nth-of-type(1){
           background-color: aquamarine;
           border-bottom: transparent;
        }
     }
     .city-panel{
        //@include rect(300,450);
        @include bord();
        padding: 15px 15px;
        width: 400px;
        background-color: aquamarine;
        position: absolute;
        left:250px;
        margin-top: -1px;
        z-index: 0;
        /*display: inline-block;*/
        display: none;
        ul{
           display: flex;
           flex-wrap: wrap;
           padding: 10px;
           /*align-items: center;*/
           /*justify-content: flex-start;*/
           /*align-content: center;*/
           /*background-color: red;*/
           /*justify-content:center;*/
           li{
              /*display: inline-block;*/
              width: 50px;
              height: 30px;
              margin-right: 12px;
              margin-bottom: 10px;
              a{
                 text-decoration: none;
              }

           }
        }
     }

  }
</style>