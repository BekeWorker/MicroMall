<template>
  <div id="home" >
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @timePosition="getPosition"
            :pullUpLoad="true"
            @pullUpLoad="moreLoad"
    >
        <home-swiper :banners="banners"/>
        <home-recommend :recommends="recommends"/>
        <feature-view/>
        <tab-bar-control class="tab-control"
                         :controlText="controlText"
                         @clickControl="clickControl"/>
        <goods-list :goods="goods[goodsType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabBarControl from "components/content/tabbarControl/TabBarControl";
  import GoodsList from "components/content/goods/GoodsList";
  import GoodsListItem from "components/content/goods/GoodsListItem";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import FeatureView from "./childComps/FeatureView";


  import {getHomeMultidata , getHomeGoods} from 'network/home';

  export default {
    name: "Home",
    components: {
      NavBar,
      TabBarControl,
      GoodsList,
      GoodsListItem,
      Scroll,
      BackTop,
      HomeSwiper,
      HomeRecommend,
      FeatureView
    },
    data () {
      return {
        banners: [],
        recommends: [],
        controlText: ['流行', '新款', '精选'],
        // 商品的数据结构
        goods:{
          'pop': {page:0, list:[]},
          'new': {page:0, list:[]},
          'sell': {page:0, list:[]}
        },
        goodsType: 'pop',
        isShow:false
      }
    },
    created() {
      this.getHomeMul()
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    methods: {
      /**
       * 网络请求相关的方法
       */
      getHomeMul() {
        getHomeMultidata().then((res) => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then((res) => {
          const newList = res.data.data.list;
          this.goods[type].list.push(...newList);
          // console.log(this.goods[type].list);
        })
        this.goods[type].page = page;
      },

      /**
       * 事件监听相关的方法
       */
      // 点击切换商品数据的类型
      clickControl (index) {
        // console.log(index)
        switch(index) {
          case 0: {
            this.goodsType = 'pop';
            break;
          }
          case 1: {
            this.goodsType = 'new';
            break;
          }
          case 2: {
            this.goodsType = 'sell';
            break;
          }
        }
      },
      // 监听组件的点击,点击后滚动到顶部
      backClick() {
        // console.log('backTop发生了点击');
        // 组件访问$refs,访问子组件
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      getPosition(position) {
        // console.log(position);
        this.isShow = -position.y >1000
      },
      moreLoad() {
        // console.log('完成上拉加载更多');
        this.getHomeGoodsData(this.goodsType);
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    /*视口的高度vh 100%*/
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
