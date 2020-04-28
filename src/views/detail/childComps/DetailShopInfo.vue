<template>
  <div class="shop-info">
    <div>
      <img class="shop-logo" :src="shopInfo.shopLogo" alt="">
      <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-item">
        <div>
          <p>{{shopInfo.cSells}}</p>
          <span>总销量</span>
        </div>
        <div class="middle-goods">
          <p>{{shopInfo.cGoods}}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-right">
        <div class="right-item" v-for="item in shopInfo.score">
          <span>{{item.name}}</span>
          <span class="score" :class="{active:item.isBetter}">{{item.score}}</span>
          <span class="low assess" v-if="item.score < 4.8">低</span>
          <span class="high assess" v-else>高</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  /*顶部的样式*/
  .shop-info {
    padding: 25px 8px;
    color: #333333;
  }
  .shop-logo {
    width: 45px;
    vertical-align: middle;
  }
  .shop-name {
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
  }

  /*中间的样式*/
  /*中间左边的样式*/
  .shop-middle {
    display: flex;
    justify-content: space-around;
  }
  .middle-item {
    display: flex;
    justify-content: space-around;
    text-align: center;
    border-right: 1px solid #eaeaea;
    padding-bottom: 5px;
    font-size: 18px;
  }
  .middle-item span {
    font-size: 13px;
  }
  .middle-item div {
    padding: 10px 20px 10px 0;
  }

  /*中间右边的样式*/
  .shop-middle-right {
    font-size: 13px;
  }
  .shop-middle-right span {
    padding-right: 15px;
  }
  .right-item {
    padding-top: 5px;
    position: relative;
  }
  .right-item .score {
    color: #5ea732;
  }
  .right-item .active {
    color: #f13e3a;
  }
  .right-item .low {
    color: #fff;
    padding: 0;
    background-color: #5ea732;
  }
  .right-item .high {
    color: #fff;
    background-color: #f13e3a;
    padding: 0;
  }
  .right-item .assess {
    position: absolute;
    right: -10px;
  }

  /*店铺下边的样式*/
  .shop-bottom {
    text-align: center;
    margin:20px 0 ;
  }
  .shop-bottom a{
    padding:5px 35px ;
    background-color: #eaeaea;
    border: 1px solid #eaeaea;
    border-radius: 5px;
  }
</style>
