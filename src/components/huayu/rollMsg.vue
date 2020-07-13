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
      //   articleArr:[
         //   {
         //      title:"不同朵数白玫瑰花语代表什么？",
         //     content:"“白玫瑰花是天真、纯洁、尊敬、谦卑。正因白玫瑰的外表及它的花语是如此的美好,它代表不光一份美丽的爱情,同时也代表一份真诚的友谊,所以白玫瑰在受恋人们的喜受同时,也得到众多人们的喜爱。如果你的女友或朋友有什么喜事的时候,就送她(他)白玫瑰,用它来表达自己的爱,用它来表达自己的一份真诚友谊。”"},
         //   {
         //      title:'19朵玫瑰花语代表什么意思',
         //       content:'关于19朵玫瑰代表什么意思有很多种说法，有人说19朵玫瑰代表忍耐与期待，有的说19朵玫瑰代表爱的最高点。但是，也有人有新的解读，那就是，将19分解为19=11125那么，它的代表意义就变成是——一生一世只爱你一个、你是我的唯一、世界上只有你和我、无怨无悔，这应该是我们听过的最美妙又浪漫的解释。'
         //    },

               // title:'樱花草花语及象征什么？',
               // content:'樱花草也被称为樱草、报春花、晚景花，樱花草颜色也比较多有白、粉红、粉、黄、橘黄、蓝、紫等多种颜色。樱花草的花语比较纠结，它既代表恋人之间深沉的爱，同时也是让人失去真爱的恶魔之花。'


      //   ]
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
