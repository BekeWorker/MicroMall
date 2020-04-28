<template>
  <div class="detail-goods-info">
    <div class="title-info">{{goodsInfo.title}}</div>
    <div>
      <span class="n-price">{{goodsInfo.price}}</span>
      <span class="o-price">{{goodsInfo.oldPrice}}</span>
      <span class="discountDesc"
            :style="{color: goodsInfo.discountBgColor}"
            :class="{active: !isShow}"
      >{{goodsInfo.discountDesc}}</span>
    </div>
    <div class="goodsInfo-columns">
      <span class="columns-item" v-for="item in goodsInfo.columns">{{item}}</span>
    </div>
    <div class="goodsInfo-services">
      <span v-for="item in goodsInfo.services">
        <img :src="item.icon" alt="">
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {
          }
        }
      }
    },
    data () {
      return {
        // columns: this.columnsChange,
        // services: this.servicesChange
      }
    },
    computed: {
      // columnsChange() {
      //   return this.goodsInfo.columns.splice(2, 1, this.goodsInfo.services[length-1])
      // },
      // servicesChange() {
      //   return this.goodsInfo.services.splice(3,1)
      // },
      isShow() {
        return this.goodsInfo.discountDesc === ""
      }
    }
  }
</script>

<style scoped>
  .detail-goods-info {
    padding: 12px;
  }
  .title-info {
    color: #222;
    font-size: 16px;
    padding-bottom: 15px;
  }
  .n-price {
    color: var(--color-high-text);
    font-size: 24px;
  }
  .o-price {
    color: var(--color-text);
    font-size: 13px;
    padding-left: 5px;
    text-decoration: line-through;
  }
  .discountDesc {
    position: relative;
    left: 10px;
    bottom: 5px;
    font-size: 12px;
    padding: 4px 10px;
  }
  .active {
    border: 1px solid;
    border-radius: 6px;
  }

  .goodsInfo-columns {
    display: flex;
    padding: 10px 0 5px;
    justify-content: space-between;
    font-size: 13px;
    color: var(--color-text);
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .goodsInfo-services {
    display: flex;
    justify-content: space-between;
    padding:30px 0;
    font-size: 13px;
    border-bottom: 4px solid rgba(100, 100, 100, 0.1);
  }
  .goodsInfo-services img {
    width: 14px;
  }
</style>
