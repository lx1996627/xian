<template>
  <div class="huayu-banner">
    <div class="banner-L">
      <a href="#">
        <img src="static/images/csbanner.jpg" alt="">
        <h4>这些超浪漫的求婚新招数，男人必须知道！</h4>
        <p>求婚送花一定要有诚意，而且如果是当众求婚，
          那么一定要让女孩子有面子，如果男方只拿着几朵干巴巴的玫瑰去求婚，
          我相信很多女孩子都会急匆匆的拉你走开，可能女孩子并不会跟人攀比什么，
          但是她毕竟还是会在意周围人的眼光。嘲讽的善意的嘲笑的，
          都有可能导致你的求婚失败。</p>
      </a>
    </div>
    <div class="banner-r">
      <a href="#">
        <img src="static/images/fs-banner_01.png" alt="" class="first-child">
      </a>
      <a href="#">
        <img src="static/images/fs-banner_02.png" alt="">
      </a>
      <a href="#">
        <img src="static/images/fs-banner_03.png" alt="">
      </a>
      <a href="#">
        <img src="static/images/fs-banner_04.png" alt="">
      </a>
    </div>
  </div>

</template>

<script>
    export default {
        name: "huaYuHead",
      data(){
          return {

          }
      },

    }
</script>

<style scoped>
  .huayu-banner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    height: 368px;
  }
  .banner-L{
    width: 808px;
    height: 368px;
    float: left;
    position: relative;
  }
  .banner-L img{
    width: 808px;
    height: 367px;
  }
  .banner-r{
    width: 364px;
    height: 368px;
    float: right;
  }
  .banner-r img{
    margin-top: 14px;
    vertical-align: bottom;
  }
  .first-child{
    margin-top: 0!important;
  }

  .banner-L h4{
    position: absolute;
    height: 70px;
    line-height: 35px;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    top: 100px;
    left: 50px;
    right: 50px;
    text-align: center;
  }
 .banner-L p{
    position: absolute;
    height: 75px;
    line-height: 25px;
    overflow: hidden;
    font-size: 14px;
    color: #d7d7d7;
    top: 200px;
    left: 50px;
    right: 50px;
  }
  .banner-r img:hover{
    -moz-box-shadow:0 0 10px #CCCCCC;
    -webkit-box-shadow:0 0 10px #CCCCCC;
    box-shadow:0 0 10px #CCCCCC;
    -webkit-transition: all .5s ease-out;
    transition: all 0.5s ease-out;

  }


</style>
