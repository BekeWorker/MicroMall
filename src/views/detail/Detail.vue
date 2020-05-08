<template>
  <div id="detail">
    <detail-nav-bar @themeClick="themeClick" ref="detailNav"/>
    <toast v-show="isShowToast" :message="message"></toast>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @timePosition="getPosition"
    >
      <detail-swiper class="detail-swiper" :topImages="topImages"/>
      <detail-goods-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-desc :goodsDesc="goodsDesc" @imageLoad="imageLoad" />
      <detail-params-info :goodsParamsInfo="goodsParamsInfo" ref="paramsInfo"/>
      <detail-comment :goodsComment="goodsComment" ref="comment"/>
      <goods-list :goods="goods" ref="recommend"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>
    <detail-bottom-bar @cartClick="cartClick"/>
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
  import {goodsItemImageLoad, backTop, toast} from 'common/mixin';
  export default {
    name: "Detail",
    mixins:[goodsItemImageLoad, backTop, toast],
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
        goodsComment: [],
        goods: [],
        themePositionY: [],
        positionY: 0,
        resultIndex: 0
      }
    },
    created() {
      getDetailData(this.$route.params.iid).then((res) =>{
        // console.log(res);
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

        // 数据传送,但是dom没有渲染
        // this.getThemePositionY()
        // 渲染完成图的高度没有被计算在内
        // this.$nextTick(this.getThemePositionY())

      })
      // 获取推荐产品的的信息
      getRecommendData().then((res) => {
        this.goods = res.data.data.list
        // console.log(this.goods)
      })

      // 在created中根本拿不到元素
      // this.getThemePositionY()
      // 在mounted中数据都没有传输过去
      // this.getThemePositionY()
    },
    methods: {
      imageLoad() {
        // console.log('图片刷新')
        this.$refs.scroll.refresh()
        // 图片刷新完成,offsetTop会获取正确的值
        this.getThemePositionY()

      },
      getThemePositionY () {
        // 每次进来赋空值,防止多次push.
        this.themePositionY = []
        this.themePositionY.push(0)
        this.themePositionY.push(this.$refs.paramsInfo.$el.offsetTop)
        this.themePositionY.push(this.$refs.comment.$el.offsetTop)
        this.themePositionY.push(this.$refs.recommend.$el.offsetTop)
        // 为了少进行一次判断,这个值并没有实际的意义
        this.themePositionY.push(Number.MAX_VALUE)
        // console.log(this.themePositionY)
      },
      // 获取scroll实时滚动的位置
      getPosition(position) {
        // console.log(position)
        this.isShow = -position.y > 1000
        this.positionY = -position.y

        // 实现联动效果--注意临界值的判断
        // if(this.positionY >= this.themePositionY[0] && this.positionY < this.themePositionY[1]){
        //   this.$refs.detailNav.finalIndex = 0;
        // }else if(this.positionY >= this.themePositionY[1] && this.positionY < this.themePositionY[2]) {
        //   this.$refs.detailNav.finalIndex = 1;
        // }else if(this.positionY >= this.themePositionY[2] && this.positionY < this.themePositionY[3]) {
        //   this.$refs.detailNav.finalIndex = 2;
        // }else {
        //   this.$refs.detailNav.finalIndex = 3;
        // }

        // for(let i in this.themePositionY) {
        //   // console.log(typeof i)
        //   // parseInt(i)
        // }

        for(let i=0; i<this.themePositionY.length-1; i++) {
          if(this.resultIndex !== i && (this.positionY >= this.themePositionY[i] && this.positionY < this.themePositionY[i+1])){
            this.resultIndex = i
            // console.log(this.resultIndex)
            this.$refs.detailNav.finalIndex = this.resultIndex;
          }
        }
      },
      // 监听导航themeClick的点击
      themeClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themePositionY[index], 500)
      },
      // 监听购物车的点击
      cartClick() {
        // 要加入购物车的商品
        const obj = {
          image: this.topImages[0],
          title: this.goodsInfo.title,
          price: this.goodsInfo.lowPrice,
          iid: this.$route.params.iid,
          desc: this.goodsDesc.desc
        }
        // 任务分发给actions
        this.$store.dispatch('cartGoods', obj).then(res =>{
          this.message = res
          this.showToast()
        })
        // this.$store.commit('addCart', obj)
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
    position: relative;
    top:44px

    /*setoffTop高度不会被计算在内*/
    /*margin-top: 44px;*/
  }
</style>
