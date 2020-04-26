<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper class="detail-swiper" :topImages="topImages"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetailData} from 'network/detail'
  export default {
    name: "Detail",
    components: {
      DetailSwiper,
      DetailNavBar
    },
    data () {
      return {
        topImages: []
      }
    },
    created() {
      getDetailData(this.$route.params.iid).then((res) =>{
        console.log(res);
        this.topImages = res.data.result.itemInfo.topImages
      })
    },
    methods: {

    }
  }
</script>

<style scoped>
  #detail {
    margin-top: 44px;
  }
</style>
