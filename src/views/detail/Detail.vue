<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="detailScroll">
      <detail-swiper class="detail-swiper" :topImages="topImages"/>
      <detail-goods-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-desc :goodsDesc="goodsDesc" @imageLoad="imageLoad"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsDesc from "./childComps/DetailGoodsDesc";

  import {getDetailData} from 'network/detail'
  import {GoodsInfo, ShopInfo} from 'network/detail'
  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailSwiper,
      DetailNavBar,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailGoodsDesc
    },
    data () {
      return {
        data: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        goodsDesc: {}
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
      })
    },
    methods: {
      imageLoad() {
        console.log('图片刷新')
        this.$refs.detailScroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    top: 44px;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>
