<template>
  <div>
    <specialImg></specialImg>
    <specialText></specialText>
  </div>

</template>

<script>
  import specialImg from "./specialImg";
  import specialText from "./specialText";
    export default {
        name: "specialPro",
        components: {
        specialImg: specialImg,
        specialText: specialText
      }
    }
</script>

<style scoped>

</style>
