import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from "./router";
import store from "./store";
import toast from "components/common/toast/index"
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false
// 事件总线(用于非父子组件的通信)
Vue.prototype.$bus = new Vue()
// 插件的方法使用组件
Vue.use(toast)
// 解决移动端点击300ms延迟的问题
FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
