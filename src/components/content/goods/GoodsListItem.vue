<template>
  <div>
    <div class="goods-info" @click="goodsItemClick">
      <img v-lazy="showImage" alt="" @load="imgLoad" ref="goodsImgLoad">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.orgPrice}}</span>
      <img class="collect" src="~assets/img/common/collect.svg" alt="">
      <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {

          }
        }
      }
    },
    data () {
      return {
        fnCount:0
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('imgLoaded')
      },
      goodsItemClick() {
        // $router:实例化的router
        // $route:当前活跃的路由对象
        // 通过代码的方式实现路由的跳转
        this.$router.push('/detail/' + this.goodsItem.iid )

        // 不需要更改routes中的路由映射path
        // this.$router.push({
        //   path: '/detail/' + this.goodsItem.iid,
        //   query: { }
        // })
      }
    }

  }
</script>

<style scoped>
  /*给list-item一个固定的宽度*/
  .goods-info {
    text-align: center;
    width: 180px;
    font-size: 15px;
    padding-top: 10px;
  }
  /*文字多出隐藏*/
  .goods-info p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .goods-info img {
    width: 180px;
    border-radius: 4px;
    padding-bottom: 2px;
  }
  .goods-info .collect {
    width: 15px;
    position: relative;
    top: 4px
  }
  .price {
    color: var(--color-high-text);
  }
</style>
