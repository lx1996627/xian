<template>
    <div class="hotTitle">
      <span class="oneNumber">HOT</span>
      <span class="twoT">{{HotMainText}}</span>
      <span class="allMsg">
       <a href="#">{{aText}}</a>
      </span>
    </div>
</template>
<script>
    export default {
        name: "hotTitle",
      props:['HotMainText','aText']
    }
</script>
<style scoped>
  .hotTitle{
  margin-top: 60px;
  margin-bottom: 22px;
}
  .hotTitle span{
   display: inline-block;
}
  .oneNumber{
    font-size: 22px;
    color: #acabab;
    vertical-align: middle;
    margin-right: 16px;
  }
  .oneNumber::first-letter{
    color: #aa9249;
  }
  .twoT{
    font-size: 18px;
    color: #333;
    margin-right: 26px;
  }
  .allMsg{
    font-size: 14px;
    cursor: pointer;
    padding-left: 26px;
    border-left: 1px solid #d9d9d9;
  }
  .allMsg a{
    color: #333;
  }
  .allMsg a:hover{
    color: red;
  }
</style>
