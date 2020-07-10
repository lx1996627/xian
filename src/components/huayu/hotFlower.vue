<template>
  <div>
    <hotTitle hot-main-text="热门鲜花"></hotTitle>
    <div class="showHotBox">
      <showHotFlower v-for="items in hotProduct" :imgSrc="'static/images/'+items.Src"
                     :flower-title='items.Title'>
      </showHotFlower>
    </div>
  </div>
</template>

<script>
  import hotTitle from "./hotTitle";
  import showHotFlower from "./showHotFlower";
    export default {
        name: "hotFlower",
      data(){
          return {
            hotProduct:[{Src:'fs-hot_01.png',Title:'馥郁玫瑰'},
                        {Src:'fs-hot_02.png',Title:'康乃馨'},
                        {Src:'fs-hot_03.png',Title:'香水百合'},
                        {Src:'fs-hot_04.png',Title:'向日葵'},
                        {Src:'fs-hot_05.png',Title:'满天星'},
                        {Src:'fs-hot_06.png',Title:'相思梅'}
            ],
          }
      },
      components:{
          showHotFlower:showHotFlower,
          hotTitle:hotTitle
      }
    }
</script>

<style scoped>
 .showHotBox{
  display: flex;
   justify-content: space-between;
 }
</style>
