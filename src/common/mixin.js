import {debounce} from 'common/utils'

import BackTop from "components/content/backTop/BackTop";

export const goodsItemImageLoad ={
  mounted() {
    //防抖函数
    const refresh = debounce(this.$refs.scroll.refresh,50)
    // 事件总线
    this.$bus.$on('imgLoaded', () => {
      refresh()
    })
  }
}

export const backTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow:false
    }
  },
  // 监听组件的点击,点击后滚动到顶部
  methods: {
    backClick() {
      // 组件访问$refs,访问子组件
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }

}
