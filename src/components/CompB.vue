<template>
    <div id="d1">
       <div class="d2">2</div>
       <div class="d3">3</div>
       <div class="d4">4</div>
       <div class="d5">5</div>
        <div class="d6">6</div>
        <div class="d7">7</div>
    </div>
</template>

<script>
    export default {
        name: "CompB"
    }
</script>

<style lang="scss" scoped>
    @import "../sass/mixin";
  #d1{
      display: flex;
      flex-direction: row;//方向 默认row； row-reverse column column-reverse
      flex-wrap: wrap; //是否换行  nowrap不换行  wrap从上往下换行  wrap-reverse从下往上换行
      //flex-flow: row-reverse wrap ;
      justify-content: center;//水平布局
      align-items:flex-start ;//垂直布局
      align-content: space-around;//多行布局
      @include rect(350,350);
      background-color: lightcyan;
  }
    .d2,.d3,.d4,.d5,.d6,.d7{
        @include rect(100,100);
        background-color: lightgoldenrodyellow;
        text-align: center;
        line-height: 100px;
        @include bord();
    }
</style>