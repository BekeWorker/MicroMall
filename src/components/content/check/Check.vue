<template>
  <div class="check" :class="{active:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "Check",
    props: {
      isCheck: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check {
    border: 2px solid #eaeaea;
    height: 20px;
    width: 20px;
    margin: auto 0;
    border-radius: 50%;
  }
  .check img {
    width: 18px;
  }
  .active {
    border: 2px solid transparent;
    background-color: var(--color-tint);
  }

</style>
