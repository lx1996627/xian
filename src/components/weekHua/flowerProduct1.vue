<template>
  <div>
    <flowerTitle left-text="Flower" right-text=" 精选花束" bottom-text="呵护每一朵幸福盛开的鲜花"></flowerTitle>
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
        name: "flowerProduct1",
      data(){
          return {
            flowerProduct1:[{
              src:'weekpro1.jpg', tlt:'每周一花系列轻奢版', newP:298, oldP:498, outp:409},
              {
                src:'weekpro2.jpg', tlt:'每周一花系列双拼版', newP:238, oldP:348, outp:802},
              {
                src:'weekpro3.jpg', tlt:'每周一花系列混搭版', newP:198, oldP:298, outp:783},
              {
                src:'weekpro4.jpg', tlt:'每周一花系列单品版', newP:148, oldP:256, outp:788},
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
