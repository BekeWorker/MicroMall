<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in controlText">
      <span
        :class="{active:finalIndex === index}"
        @click="clickControl(index)"
      >{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarControl",
    props: {
      controlText: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        isActive:false,
        finalIndex:0
      }
    },
    methods: {
      clickControl (index) {
        this.finalIndex = index;
        this.$emit('clickControl',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .active{
    padding: 7px;
    border-bottom: 2px solid;
    color: var(--color-high-text);
  }

</style>
