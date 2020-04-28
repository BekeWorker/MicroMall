<template>
  <div class="desc-main" v-if="Object.keys(goodsDesc).length !== 0">
    <i class="top-icon"></i>
    <div class="top"></div>
    <div class="goods-desc">{{goodsDesc.desc}}</div>
    <i class="end-icon"></i>
    <div class="end"></div>
    <div v-for="(item, index) in goodsDesc.detailImage" :key="index">
      <div class="goods-desc-key">{{item.key}}</div>
      <div v-for="(item, index) in item.list" :key="index">
        <img class="goods-desc-img" :src="item" alt="" @load="imgLoad">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailGoodsDesc",
    props: {
      goodsDesc: {
        type: Object,
        default () {
          return {
          }
        }
      }
    },
    data() {
      return {
        counter: 0,
        imgCounter: 0
      }
    },
    methods: {
      imgLoad() {
        if(++this.counter === this.goodsDesc.detailImage[0].list.length) {
          this.$emit('imageLoad')
        }
      }
    }
  }
</script>

<style scoped>
  .top-icon {
    width: 4px;
    height: 4px;
    background-color: #333;
    display:block;
    margin-left: 10px;
  }
  .top {
    width: 25%;
    height: 1px;
    background-color: var(--color-text);
    margin-left: 10px;
  }

  .goods-desc {
    font-size: 14px;
    padding: 10px 10px;
    color: var(--color-text);
  }
  .goods-desc-key {
    padding: 5px 10px;
    color: #333;
  }
  .goods-desc-img {
    width: 100%;
  }

  .desc-main .end {
    position: relative;
    left: 72%;
    width: 25%;
    height: 1px;
    background-color: var(--color-text);
  }
  .end-icon {
    position: relative;
    left: 96%;
    width: 4px;
    height: 4px;
    background-color: #333;
    display:block;
  }
</style>
