<template>
  <div>
    <nav-bar class="detail-navbar">
      <div slot="left" @click="getBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detail-center">
        <div class="center-item"
             v-for="(item,index) in titles"
             @click="titieClick(index)"
             :class="{active: index === finalIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data () {
      return {
        titles: ['商品', '描述', '评价', '推荐'],
        finalIndex: 0
      }
    },
    methods: {
      titieClick (index) {
        this.finalIndex = index
      },
      getBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  #detail .detail-navbar {
    color: #333333;
    font-size: 15px;
    background-color: #fff;
  }
  .detail-navbar img {
    vertical-align: middle;
  }
  .detail-center {
     display: flex;
   }
  .center-item {
    flex: 1;
  }
  #detail .active {
   color: var(--color-high-text);
  }

</style>
