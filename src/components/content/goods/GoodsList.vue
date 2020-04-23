<template>
<!--  组件的标签,在被渲染的时候,会被组件中的template替换掉-->
<!--  所以给组件写类的时候,要在外层多包一个div-->
  <div class="goods-list">
    <div v-for="item in goods">
      <div class="goods-list-item">
        <goods-list-item  :goodsItem="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type:Array,
        default () {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  /*父元素开启flex*/
  /*明确哪个是父元素*/
  .goods-list {
    display: flex;
    /*flex-flow是flex-direction||flex-warp的缩写 */
    /*决定主轴的方向和决定是否换行*/
    flex-flow: row wrap;
    /*justify-content决定flex-item在主轴上的对齐方式*/
    /*space-around居中对齐方式的一种*/
    justify-content: space-around;
    padding: 2px;
  }
  /*给子元素一个固定的宽度*/
  goods-list-item {
    flex:1;
    width: 170px;
  }
</style>
