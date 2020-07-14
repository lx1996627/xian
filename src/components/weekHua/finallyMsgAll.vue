<template>
  <div>
    <div class="h60"></div>
    <div>
          <flowerTitle left-text="Story" right-text="花之精灵"></flowerTitle>
          <div class="msg-txt">
            <span>来自云南的A级花材</span>
            <div class="txtline"></div>
            <h3>
              <a href="#">每一朵鲜花都是如此美丽，带着大自然的气息，只为拥抱你。</a>
            </h3>
            <p>地处低纬度高海拔地区，全年光照，充分吸收紫外线，让产自云南的鲜花花朵硕大、色彩艳丽，让人爱不释手。云南天然土壤中蕴含更多的矿物质，鲜花吸收更充足的养分。为鲜花种植提供优质的条件，孕育出更加饱满的鲜花。</p>
            <label>
              <a href="#">每一朵花都是有灵魂的</a>
            </label>
          </div>
          <div class="msg-pic">
            <a href="#">
              <img src="static/images/yunnan1.jpg" alt="">
            </a>
            <a href="#">
              <img src="static/images/yunnan2.jpg" alt="">
            </a>
          </div>
          <div class="h150">
          </div>
    </div>

  </div>


</template>

<script>
  import flowerTitle from "./flowerTitle";
    export default {
        name: "finallyMsgAll",
      components:{
        flowerTitle:flowerTitle
      }
    }
</script>

<style scoped>
  .msg-txt{
    width: 520px;
    height: 440px;
    overflow: hidden;
    float: left;
  }
  .msg-txt span{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #333;
  }
  .txtline{
    width: 70px;
    height: 38px;
    border-bottom: 2px solid #999;
    margin-bottom: 38px;
  }
 .msg-txt h3{
    height: 110px;
    line-height: 55px;
    font-size: 36px;
    color: #333;
    overflow: hidden;
   font-weight: normal;
  }
 .msg-txt h3 a{
   color: #333333;
 }
  .msg-txt h3 a:hover{
    color: red;
  }
  .msg-txt p{
    height: 120px;
    line-height: 30px;
    margin-top: 30px;
    font-size: 16px;
    color: #999;
    overflow: hidden;
    word-spacing: 2px;
  }
  .msg-txt label{
    float: right;

    height: 38px;
    line-height: 40px;
    border-bottom: 2px solid #4a8871;
    color: #4a8871;
    font-size: 16px;
    display: inline-block;
  }
  .msg-txt label a{
    color: #4a8871;
  }
  .msg-pic{
    width: 630px;
    height: 440px;
    overflow: hidden;
    float: right;
  }
  .msg-pic a{
    display: inline-block;
    width: 285px;
    height: 440px;
    margin-left: 30px;
    float: left;
  }
  .msg-pic img{
    width: 285px;
    height: 440px;
    overflow: hidden;
    display: inline-block;
  }
  .h150{
    height: 150px;
    clear: both;
  }
  .h60{
    height: 60px;
  }

</style>
