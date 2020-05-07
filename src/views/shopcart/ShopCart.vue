<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{goodsCount}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";

  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import { mapGetters } from 'vuex'
  export default {
    name: "ShopCart",
    components: {
      Scroll,
      NavBar,
      CartList,
      CartBottomBar
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
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart {
    height: calc(100vh - 93px);
  }
  .cart .content {
    height: 100%;
    margin-top: 44px;
    overflow: hidden;
  }
  .cart-nav {
    background-color: var(--color-tint);
  }
</style>
