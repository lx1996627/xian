<template>
  <div id="app">
    <div class="nope">对不起，当前没有任何评论！</div>
  </div>
</template>
 
<script>
export default {
  name: "mycollect",
  data() {
    return {
      msg: ""
    };
  }
};
</script>
 
<style scoped lang="less">
#app {
  padding-top: 50px;
  height: 380px;
  border: 1px solid rgb(229, 229, 229);
  .nope {
    font-size: 24px;
    line-height: 32px;
    color: #777;
    text-align: center;
    line-height: 380px;
  }
}
</style>