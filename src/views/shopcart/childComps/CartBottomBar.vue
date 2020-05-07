<template>
  <div class="cart-bottom-bar">
    <div class="left-price">
      <div class="checked">
        <check class="bottom-check"/>
        <span>全选</span>
      </div>
      <span>合计:¥{{totalPrice}}</span>
    </div>
    <div class="right-count">
      <span>去计算({{totalCount}})</span>
    </div>
  </div>
</template>

<script>
  import Check from "components/content/check/Check";

  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    components: {
      Check
    },
    computed: {
      ...mapGetters({
        length: 'goodsCount',
        list: 'goodsList'
      }),
      totalPrice() {
        return this.list.filter(item => {
          return item.check
        }).reduce((preValue, item)=> {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      totalCount() {
        return this.list.filter(item => {
          return item.check
        }).reduce((preValue, item)=> {
          return item.count + preValue
        }, 0)
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    display: flex;
    justify-content: space-between;

    /*position: relative;*/
    /*bottom: 30px;*/

    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
  .right-count {
    width: 30%;
    text-align: center;
    background-color: orangered;
    color: #ffffff;
  }
  .left-price {
    flex: 1;
    color: #666;
  }
  .checked {
    padding: 0 10px;
    display: inline-block;
    font-size: 14px;
  }
  .left-price .bottom-check {
    position: relative;
    top: 5px;
    display: inline-block;
    margin-right: 5px;
  }
</style>
