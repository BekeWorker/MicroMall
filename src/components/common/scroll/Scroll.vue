<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data () {
      return {
        bScroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
     this.bScroll = new BScroll(this.$refs.wrapper,{
       // click是监听非bottom以外其他元素的点击,要设置为true
       click: true,
       probeType: this.probeType,
       pullUpLoad: this.pullUpLoad
     })
      // 监听滚动的位置
     this.bScroll.on('scroll',  (position) =>{
       if(this.probeType === 2 || this.probeType === 3) {
         // console.log(position);
         this.$emit('timePosition',position)
       }
     })
      // 监听是否下拉到底部
      this.bScroll.on('pullingUp', () => {
        if(this.pullUpLoad) {
          this.$emit('pullUpLoad')
        }
      })
    },
    methods: {
      // ES6新语法给参数默认值
      scrollTo(x, y, time=300) {
        this.bScroll && this.bScroll.scrollTo(x, y, time)
      },
      // 实现scroll.refresh()
      refresh() {
        this.bScroll && this.bScroll.refresh()
      },
      finishPullUp() {
        this.bScroll && this.bScroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
