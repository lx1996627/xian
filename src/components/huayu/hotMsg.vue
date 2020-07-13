<template>
       <div class="article-middle">
         <el-carousel arrow="never" height="240px" trigger="click" >
           <el-carousel-item v-for="item in articleT" :key="item" arrow="never">
             <div><a href="#" class="article-middle-title">{{item.title}}</a></div>
             <article>{{item.content}}</article>
             <div class="article-btn">
               <a href="#">阅读全文</a>
             </div>
           </el-carousel-item>
         </el-carousel>

       </div>
</template>

<script>
export default {
   data () {
      return {

      };
   },
   components: {},
   props:['articleT'],
   methods: {}
}
</script>
<style lang='css' scoped>
.article-middle{
    float: left;
    margin: 0 76px;
    position: relative;
    width: 344px;
    height: 240px;
}
.article-middle-title{
   font-size: 18px;
    color: #333;
}
.article-middle-title:hover{
  color: red;
}
.article-middle article{
   font-size: 14px;
    color: #999;
    margin-top: 28px;
    margin-bottom: 28px;
    height: 72px;
    line-height: 24px;
    overflow: hidden;
}
.article-btn{
    padding: 12px 28px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
}
.article-btn a{
   color: #333;
   font-size:14px;

}
.article-btn a:hover{
   color: red;
}
/deep/.article-middle .el-carousel__button{
  background-color: #ff4e3e !important;
  display: block;
  width: 8px;
  height: 8px;
  border: none;
  outline: 0;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;
}
.article-middle>>>.el-carousel__indicators{
  margin-left: 100px !important;
}
</style>
