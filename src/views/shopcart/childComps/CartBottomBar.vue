<template>
  <div>
<!--    <toast v-show="isShowToast" message="请选购产品"/>-->
    <div class="cart-bottom-bar">
      <div class="left-price">
        <div class="checked">
          <check class="bottom-check"
                 :isCheck="isAllSelect"
                 @click.native="allSelectClick"
          />
          <span>全选</span>
        </div>
        <span>合计:¥{{totalPrice}}</span>
      </div>
      <div class="right-count" @click="totalCountClick">
        <span>去计算({{totalCount}})</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Check from "components/content/check/Check";

  // import {toast} from "common/mixin"

  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    // mixins:[toast],
    components: {
      Check
    },
    computed: {
      ...mapGetters({
        length: 'goodsCount',
        list: 'goodsList'
      }),
      totalPrice() {
        return this.list.filter(item => {
          return item.check
        }).reduce((preValue, item)=> {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      totalCount() {
        // 获取所有产品的个数
        return this.list.filter(item => {
          return item.check
        }).reduce((preValue, item)=> {
          return item.count + preValue
        }, 0)
        // 获取选中产品的个数
        // return this.list.filter(item => {
        //   return item.check
        // }).length
      },
      // 全选的显示
      isAllSelect() {
        if(this.list.length === 0) return false;
        // 方式一通过filter判断不选中数组的长度
        // return !(this.list.filter(item => { return !item.check }).length)
        // 方式二查找不选中的对象
        return this.list.find(item => {return !item.check}) === undefined
        // console.log(this.list.find(item => {return !item.check})) // find返回的是一个对象

        // 方式三 普通的遍历
        // for(let item of this.list) {
        //   if(!item.check) {
        //     return false
        //   }
        // }
        // return true
      }
    },
    methods: {
      /**
       * 事件监听的方法
       */
      // 全选的点击
      allSelectClick() {
        if(!this.isAllSelect) {
          this.list.forEach(item =>{item.check = true})
        } else {
          this.list.forEach(item =>{item.check = false})
        }
      },
      // 监听去结算
      totalCountClick() {
        if(!this.list.length){
          this.$toast.showToast('请添加商品',1000)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    display: flex;
    justify-content: space-between;

    /*position: relative;*/
    /*bottom: 30px;*/
    position: fixed;
    bottom: 49px;

    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
  .right-count {
    width: 30%;
    text-align: center;
    background-color: orangered;
    color: #ffffff;
  }
  .left-price {
    flex: 1;
    color: #666;
  }
  .checked {
    padding: 0 10px;
    display: inline-block;
    font-size: 14px;
  }
  .left-price .bottom-check {
    position: relative;
    top: 5px;
    display: inline-block;
    margin-right: 5px;
  }
</style>
