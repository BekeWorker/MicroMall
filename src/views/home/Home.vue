<template>
  <div id="home" >
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-bar-control class="tab-control1"
                     :controlText="controlText"
                     @clickControl="clickControl"
                     ref="tabControl1"
                     v-show="isShowControl"
    />
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @timePosition="getPosition"
            :pullUpLoad="true"
            @pullUpLoad="loadMore"
    >
        <home-swiper :banners="banners" @swiperImgLoad="controlOffsetTop"/>
        <home-recommend :recommends="recommends"/>
        <feature-view/>
        <tab-bar-control :controlText="controlText"
                         @clickControl="clickControl"
                         ref="tabControl2"
        />
        <goods-list :goods="showGoods" />
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
  import {debounce} from 'common/Utils'

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
        isShow: false,
        setTop: 0,
        offsetTopControl: 0,
        isShowControl: false,
        savePosiY: 0,
        saveY: 0
      }
    },
    created() {
      this.getHomeMul()
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    mounted() {
      //防抖函数
      const refresh = debounce(this.$refs.scroll.refresh,50)
      // 事件总线
      this.$bus.$on('imgLoaded', () => {
        refresh()
      })
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
      this.saveY = this.savePosiY
      // console.log(this.saveY)
    },
    computed: {
      showGoods() {
        return this.goods[this.goodsType].list
      }
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
          this.$refs.scroll.finishPullUp()
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
        this.$refs.tabControl1.finalIndex = index
        this.$refs.tabControl2.finalIndex = index
      },
      // 监听组件的点击,点击后滚动到顶部
      backClick() {
        // 组件访问$refs,访问子组件
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      // 获得当前滚动的位置
      getPosition(position) {
        // 判断backTop的隐藏和显示
        this.isShow = -position.y > 1000
        this.isShowControl = -position.y > this.offsetTopControl
        this.savePosiY = position.y
      },
      // 上拉加载更多
      loadMore () {
        this.getHomeGoodsData(this.goodsType)
      },
      // 获取offsetTopControl正确的高度
      controlOffsetTop () {
        // 获取backTop的高度
        this.offsetTopControl = this.$refs.tabControl2.$el.offsetTop
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
  /*.content {*/
  /*  overflow: hidden;*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/

  /*计算内容的高度*/
  .content {
    overflow: hidden;
    height: calc(100% - 93px);
    margin-top: 44px;

  }
  #home .tab-control1 {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
    /*background-color: #fff;*/
  }

</style>
