<template>
   <div class='article-r'>
       <div class="article-r-title">热门</div>
       <div class="imgSmall">
           <img v-for="items in smallImgArr"  :src="'static/images/'+items" alt="">
       </div>
       <div class="article-r-content">
         <p v-for="smallText in smallList"><a href="">{{smallText}}</a></p>
       </div>
   </div>
</template>

<script>
export default {
    name:'hotMsg1',
   data () {
      return {
      };
   },
  props:['smallImgArr','smallList']

}
</script>
<style lang='css' scoped>
.imgSmall{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.imgSmall img{
    width: 102px;
    height: auto;

}
.article-r{
    float: right;
    width: 344px;
    overflow: hidden
}
.article-r-title{
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 14px;
}
.article-r p{
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    margin: 0;
}
.article-r a{
  color: #333;
}
.article-r-content{
    font-size: 14px;
}
  .article-r p:hover{
    margin-top: -2px;
    display: inline-block;
    border-bottom: 1px solid #42b983;
  }
.article-r p:hover a{
  color: red;

}

</style>
