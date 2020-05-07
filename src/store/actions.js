import * as types from './mutations.type'

const actions = {

  // 这里并不是异步操作,为啥还要用actions呢
  // 这里有两个操作,增加产品和增加数量
  // 在同一个mutations的方法中不能很好的跟踪
  // 是增加了产品的数量还是增加了产品

  cartGoods(context, payload) {
    // context不是state
    let oldProduct = context.state.cartList.find(item => {
      return item.iid === payload.iid
    })
    if(oldProduct) {
      // 商品的数量增加
      context.commit(types.INCRECOUNT, oldProduct)
    } else {
      // 增加新的商品
      payload.count = 1;
      context.commit(types.INCREPRODUCT, payload)
    }
  }
}

export default actions
