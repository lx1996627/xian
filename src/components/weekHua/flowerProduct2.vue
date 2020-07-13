<template>
  <div>
    <flowerTitle left-text="Ambitus " right-text="周边精选" bottom-text="呵护每一朵幸福盛开的鲜花"></flowerTitle>
    <div class="producBox">
      <FlowerShowBox v-for="items in flowerProduct1" :productImg="'static/images/'+items.src" :product-msg="items.tlt"
                     :price-now="items.newP" :price-pre="items.oldP" :out-shop="items.outp"></FlowerShowBox>
    </div>
  </div>
</template>
<script>
  import flowerTitle from "./flowerTitle";
  import FlowerShowBox from "./FlowerShowBox";
  export default {
    name: "flowerProduct2",
    data(){
      return {
        flowerProduct1:[{
          src:'weekpro5.jpg', tlt:'唯美手绘手账本', newP:39, oldP:49, outp:3},
          {
            src:'weekpro6.jpg', tlt:'北欧简约玻璃花瓶', newP:76, oldP:158, outp:18},
          {
            src:'weekpro7.jpg', tlt:'进口鲜花保鲜液', newP:39, oldP:69, outp:19},
          {
            src:'weekpro8.jpg', tlt:'多姿多彩花艺剪', newP:19, oldP:72, outp:99},
        ]

      }
    },
    components:{
      flowerTitle:flowerTitle,
      FlowerShowBox:FlowerShowBox
    }
  }
</script>
<style scoped>
  .producBox{
    display: flex;
    justify-content: space-between;
  }
</style>
