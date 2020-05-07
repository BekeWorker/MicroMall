<template>
  <div>
    <cart-list-item v-for="(item, index) in goodsList" :goodsItem="item" :key="index"/>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import {mapGetters} from "vuex";

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters(['goodsList'])
    }
  }
</script>

<style scoped>

</style>
