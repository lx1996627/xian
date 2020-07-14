<template>
   <div>
      <hotTitle :HotMainText='HotMainText' aText="查看全部 >"></hotTitle>
      <div class="showArticle">
         <div class="bgImg">
            <a href="">
               <img :src="articleImg" alt="">
            </a>
         </div>
         <hotMsg :articleT='articleT'></hotMsg>
         <hotMsg1 :small-img-arr="smallImgArr" :small-list="smallList"></hotMsg1>
      </div>
   </div>
</template>

<script>
import hotTitle from "./hotTitle";
import hotMsg from "./hotMsg";
import hotMsg1 from "./hotMsg-1"
export default {
   data () {
      return {
      };
   },
   components: {
      hotTitle:hotTitle,
      hotMsg:hotMsg,
      hotMsg1:hotMsg1
   },
   props:['HotMainText','articleT','articleImg','smallImgArr','smallList']
   }

</script>
<style lang='css' scoped>
.bgImg{
   float: left;
    width: 360px;
    height: 280px;
}
.bgImg img{
   width: 360px;
}
.showArticle{
   height: 280px;
}
</style>
