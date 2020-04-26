<template>
  <div class="tab-bar-item" @click="btnClick()">
<!--    各自的方法或属性是在各自组件中使用的-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      activeColor: {
        type: String,
        default: ''
      },
      path: {
        type: String,
        default: ''
      }
    },
    computed:{
      // 这些是计算属性,而不是方法/函数
      isActive() {
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle() {
        //父子组件通信(props中的值,没有传递时为undefined)
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      btnClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    padding-top: 2px;
    vertical-align: middle;
  }
</style>
