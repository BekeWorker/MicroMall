import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

// 使用
Vue.use(Vuex)

const state = {
  cartList: []
}

// 创建实例
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

// 导出实例
export default store
