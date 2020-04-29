<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="detailScroll">
      <detail-swiper class="detail-swiper" :topImages="topImages"/>
      <detail-goods-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-desc :goodsDesc="goodsDesc" @imageLoad="imageLoad"/>
      <detail-params-info :goodsParamsInfo="goodsParamsInfo"/>
      <detail-comment :goodsComment="goodsComment"/>
      <goods-list :goods="goods"/>
    </scroll>
    <detail-bottom-bar/>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsDesc from "./childComps/DetailGoodsDesc";
  import DetailParamsInfo from "./childComps/DetailParamsInfo";
  import DetailComment from "./childComps/DetailComment";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import {getDetailData, getRecommendData} from 'network/detail'
  import {GoodsInfo, ShopInfo, ParamsInfo} from 'network/detail'
  export default {
    name: "Detail",
    components: {
      Scroll,
      GoodsList,
      DetailSwiper,
      DetailNavBar,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailGoodsDesc,
      DetailParamsInfo,
      DetailComment,
      DetailBottomBar
    },
    data () {
      return {
        data: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        goodsDesc: {},
        goodsParamsInfo: {},
        goodsComment:[],
        goods:[]
      }
    },
    created() {
      getDetailData(this.$route.params.iid).then((res) =>{
        console.log(res);
        // 获取轮播图的数据
        this.data = res.data.result
        this.topImages = this.data.itemInfo.topImages
        // 获取产品信息的数据
        this.goodsInfo = new GoodsInfo(this.data.columns, this.data.itemInfo, this.data.shopInfo.services)
        // 获取店铺信息的数据
        this.shopInfo = new ShopInfo(this.data.shopInfo)
        // 获取商品描述的数据
        this.goodsDesc = this.data.detailInfo
        // 获取产品参数的数据
        this.goodsParamsInfo = new ParamsInfo(this.data.itemParams.info, this.data.itemParams.rule)
        // 获取用户评价
        this.goodsComment = this.data.rate.list
      })
      // 获取推荐产品的的信息
      getRecommendData().then((res) => {
        this.goods = res.data.data.list
        // console.log(this.goods)
      })
    },
    methods: {
      imageLoad() {
        // console.log('图片刷新')
        this.$refs.detailScroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
  }
  .content {
    overflow: hidden;
    height: calc(100% - 93px);
    margin-top: 44px;
  }
</style>
