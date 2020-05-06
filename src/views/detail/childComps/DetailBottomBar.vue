<template>
  <div class="bottom-bar">
    <div class="detail-bar-left">
      <div class="case">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="detail-bar-right" @click="cartClick">
      <div class="join-car">
        <span>加入购物车</span>
      </div>
      <div class="buy-product">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      cartClick() {
        this.$emit('cartClick')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    color: #333;
    height: 49px;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);

    display: flex;
    text-align: center;
  }
  .detail-bar-left {
    width: 55%;
    display: flex;
  }
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .shop .icon {
    background-position: 0 -98px;
  }
  .case .icon {
    background-position:0 -54px;
  }

  .detail-bar-left div {
    flex: 1;
    font-size: 14px;
  }

  .detail-bar-right {
    flex: 1;
    display: flex;
    line-height: 49px;
  }
  .detail-bar-right div {
    flex: 1;
    font-size: 15px;
  }
  .join-car {
    background-color: #ffe817;
  }
  .detail-bar-right .buy-product {
    background-color: #ff6699;
    color: #fff;
  }
</style>
