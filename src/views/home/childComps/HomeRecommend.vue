<template xmlns:div="http://www.w3.org/1999/xlink">
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img class="" :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default ()  {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    padding: 10px 0px 10px;
    border-bottom: 10px solid #eaeaea;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend a img {
    width: 75px;
    height: 75px;
  }

</style>
