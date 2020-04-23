<template>
  <div>
    <div class="goods-info">
      <img :src="goodsItem.show.img" alt="">
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
    }
  }
</script>

<style scoped>
  /*给list-item一个固定的宽度*/
  .goods-info {
    text-align: center;
    width: 180px;
    font-size: 15px;
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
