import {INCRECOUNT, INCREPRODUCT} from "./mutations.type";

const mutations = {
  // addCart(state, payload) {
  // 自己的方案
  // const isAdd = state.cartList.filter((item) => {
  //   return item.iid === payload.iid
  // }).length >= 1
  // if(isAdd) {
  //   console.log(payload.count) // 1 1 1 1 1
  // }else {
  //   state.cartList.push(payload)
  //   console.log(state.cartList)
  // }

  // 方案一
  // let oldProduct = null
  // for(let item of state.cartList) {
  //   if(item.iid === payload.iid) {
  //     oldProduct = item
  //   }
  // }
  // if(oldProduct) {
  //   oldProduct.count += 1
  // } else {
  //   state.cartList.push(payload)
  //   payload.count = 1
  // }

  // 方案二
  // let index = state.cartList.indexOf(payload); // -1 -1 -1 -1
  // if(index === -1) {
  //   state.cartList.push(payload);
  //   payload.count = 1
  // } else {
  //   let oldProduct = state.cartList[index];
  //   oldProduct.count += 1
  // }

  // 方案三
  // let oldProduct = state.cartList.find( item => {
  //   return item.iid === payload.iid
  // });
  // if(oldProduct) {
  //   oldProduct.count += 1
  //   // console.log(oldProduct.count);
  // } else {
  //   state.cartList.push(payload);
  //   payload.count = 1
  //   // console.log(state.cartList);
  // }

  // }


  [INCRECOUNT](state, oldProduct) {
    oldProduct.count += 1
  },

  [INCREPRODUCT](state, payload) {
    // 这里将payload.count = 1时,
    // vue中的数据是对的,但是界面显示错误.
    // payload.count = 1;
    state.cartList.push(payload);
    payload.check = true
  }

}

export default mutations
