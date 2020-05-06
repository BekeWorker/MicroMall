const getters = {
  goodsCount(state) {
    return state.cartList.length
  },
  goodsList(state) {
    return state.cartList
  }
}

export default getters
