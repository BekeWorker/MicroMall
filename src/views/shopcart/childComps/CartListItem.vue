<template>
  <div class="cart-list-item" v-if="Object.keys(goodsItem).length !== 0">
    <check :isCheck="goodsItem.check" @click.native="checkClick"/>
    <div class="left">
      <img :src="goodsItem.image" alt="">
    </div>
    <div class="right">
      <h4 class="title">{{goodsItem.title}}</h4>
      <p class="desc">{{goodsItem.desc}}</p>
      <div class="item-bottom">
        <div class="price">{{'¥' + goodsItem.price}}</div>
        <div class="count">{{'x' + goodsItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Check from "components/content/check/Check";
  export default {
    name: "CartListItem",
    components: {
      Check
    },
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.goodsItem.check = !this.goodsItem.check;
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    padding: 10px 10px;
    border-bottom: 1px solid #eaeaea;
  }
  .cart-list-item .left {
    flex: 1;
    text-align: center;
  }
  .cart-list-item img {
    width: 90%;
    border-radius: 5px;
  }
  .cart-list-item .right{
    width: 70%;
  }

  .cart-list-item .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
    font-size: 17px;
  }
  .cart-list-item .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    margin: 20px 0;
  }
  .item-bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    font-size: 17px;
  }

  .item-bottom .price {
    color: orangered;
  }
  .item-bottom .count {
    color: #333;
  }
</style>
