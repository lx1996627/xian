<template>
  <div class="weekIntro">
    <div>
      <img src="static/images/wf_introduc_01.png" alt="">
      <p class="intro-1">选择你的订阅计划</p>
      <p class="intro-2">定期给自己（或某个特别的人）一些爱：每周，每周交替，或每月。</p>
    </div>
    <div>
      <img src="static/images/wf_introduc_02.png" alt="">
      <p class="intro-1">精心挑选的鲜花</p>
      <p class="intro-2">花的味道是独特而私人的，我们迎合各种风格；精选当季精品花材，种类齐全。</p>
    </div>
    <div>
      <img src="static/images/wf_introduc_03.png" alt="">
      <p class="intro-1">忙碌生活中的小幸福</p>
      <p class="intro-2">美丽的花花会送到你的门上，收到花花的那一刻，你需要做的就是享受。</p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "threeSlogan"
    }
</script>

<style scoped>
  .weekIntro{
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .weekIntro div{
    width: 220px;
    margin: 0 80px;
    display: inline-block;
    text-align: center;
    vertical-align: top;
  }
  .intro-1{
    font-size: 24px;
  }
  .intro-2{
    color: #999;
    margin-top: 30px;
    line-height: 1.7;
    font-size: 14px
  }

</style>
