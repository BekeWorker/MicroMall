<template>
  <div>
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{goodsCount}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import { mapGetters } from 'vuex'
  export default {
    name: "ShopCart",
    components: {
      NavBar
    },
    // 将store中的getters映射到局部的计算属性中去
    computed: {
      // goods() {
      //   return this.$store.getters.goodsCount
      // }

      // 给getters属性起另外一个名字
      // ...mapGetters({
      //   length: 'goodsCount'
      // }),
      ...mapGetters(['goodsCount', 'goodsList'])
    }
  }
</script>

<style scoped>
  .cart-nav {
    background-color: var(--color-tint);
  }
</style>
