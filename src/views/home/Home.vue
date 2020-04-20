<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from 'network/home';
  import HomeSwiper from "./childcomps/HomeSwiper";
  import HomeRecommend from "./childcomps/HomeRecommend";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data () {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
  }
</style>
