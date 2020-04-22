<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;

    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
  }

  .left, .right {
    width: 20%;
  }

  .center {
    flex: 1;
  }

</style>
