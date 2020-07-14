<template>
  <div>
    <div class="h60"></div>
    <flowerTitle bottom-text="呵护每一朵幸福盛开的鲜花 " right-text="周边精选" left-text="Ambitus "></flowerTitle>
    <div class="showShop">
      <nearbyPro1 v-for="items in nearbyShow" :nearby-src="'static/images/'+items.src" :nearby-msg="items.msg"
                  :nearby-price="items.price"  :nearby-tit="items.nameN">
      </nearbyPro1>
    </div>
  </div>

</template>

<script>
  import flowerTitle from "./flowerTitle";
  import nearbyPro1 from "./nearbyPro1";
    export default {
        name: "nearbyPro",
      data(){
          return {
            nearbyShow:[
              {src:"nearby1.jpg",nameN:"唯美手绘手账本",msg:'记录每一天的新鲜感',price:39},
              {src:"nearby2.jpg",nameN:"北欧简约玻璃花瓶",msg:'金属和玻璃碰撞出的艺术美学',price:76},
              {src:"nearby3.jpg",nameN:"进口鲜花保鲜液",msg:'固本培元',price:39}
            ]
          }
      },
      components:{
        flowerTitle:flowerTitle,
        nearbyPro1:nearbyPro1
      }
    }
</script>

<style scoped>
  .h60{
    height: 60px;
  }

</style>
