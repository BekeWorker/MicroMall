<template>
  <div class="detail-comment" v-if="goodsComment.length !== 0">
    <div class="comment-title">
      <span>用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="comment-user">
      <img :src="goodsComment[0].user.avatar" alt="">
      <span>{{goodsComment[0].user.uname}}</span>
      <p>{{goodsComment[0].content}}</p>
    </div>
    <div class="comment-info">
      <span>{{goodsComment[0].created | getDate}}</span>
      <span>{{goodsComment[0].style}}</span>
    </div>
    <p class="comment-business">{{goodsComment[0].explain}}</p>
  </div>
</template>

<script>
  import {formatDate} from 'common/Utils'
  export default {
    name: "DetailComment",
    props: {
      goodsComment: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      getDate (value) {
        const date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 15px 10px;
    border-bottom: 3px solid #eaeaea;
  }
  .detail-comment p {
    padding: 10px 0;
    font-size: 14px;
    color: #777;
  }
  .comment-title {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    color: #333;
    font-size: 15px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 10px;
  }
  .comment-title .more {
    font-size: 14px;
  }
  .comment-user img {
    width: 42px;
    vertical-align: middle;
  }
  .comment-user span {
    line-height: 42px;
    padding-left: 15px;
    color: #333;
    font-size: 15px;
  }
  .comment-info span {
    padding-right: 15px;
    font-size: 14px;
  }
</style>
