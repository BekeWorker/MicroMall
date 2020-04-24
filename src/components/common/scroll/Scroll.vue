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
        bScroll:null
      }
    },
    props: {
      probeType:{
        type:Number,
        default: 0
      },
      pullUpLoad: {
        type:Boolean,
        default:false
      }
    },
    mounted() {
     this.bScroll = new BScroll(this.$refs.wrapper,{
       // click是监听非bottom以外其他元素的点击,要设置为true
       click: true,
       probeType: this.probeType,
       pullUpLoad: this.pullUpLoad,

     })
     this.bScroll.on('scroll',  (position) =>{
       // console.log(position);
       this.$emit('timePosition',position)
     })
     this.bScroll.on('pullingUp', () => {
       // console.log('上拉加载更多')
       this.$emit('pullUpLoad')
       this.bScroll.finishPullUp()
    })
    },
    methods: {
      // ES6新语法给参数默认值
      scrollTo(x, y, time=300) {
        this.bScroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>
