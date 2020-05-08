import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from "components/common/toast/index"

Vue.config.productionTip = false
// 事件总线(用于非父子组件的通信)
Vue.prototype.$bus = new Vue()
// 插件的方法使用组件
Vue.use(toast)
new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
