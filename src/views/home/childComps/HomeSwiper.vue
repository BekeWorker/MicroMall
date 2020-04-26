<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index';
  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default ()  {
          return []
        }
      }
    },
    data() {
      return {
        isEmit: true
      }
    },
    methods: {
      swiperImgLoad() {
        if(this.isEmit) {
          this.$emit('swiperImgLoad')
        }
        this.isEmit = false
      }
    }
  }
</script>

<style scoped>

</style>
