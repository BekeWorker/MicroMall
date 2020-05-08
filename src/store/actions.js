import * as types from './mutations.type'

const actions = {

  // 这里并不是异步操作,为啥还要用actions呢
  // 这里有两个操作,增加产品和增加数量
  // 在同一个mutations的方法中不能很好的跟踪
  // 是增加了产品的数量还是增加了产品

  cartGoods(context, payload) {
    // 在vuex中进行的某些操作,想要在外部监听该操作的完成使用promise
    return new Promise((resolve,reject) =>{
      // context不是state
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      })
      if(oldProduct) {
        // 商品的数量增加
        context.commit(types.INCRECOUNT, oldProduct)
        resolve('商品的数量增加')
      } else {
        // 增加新的商品
        // 一定要在push产品前将属性(count check)加进去
        payload.count = 1;
        payload.check = true;
        context.commit(types.INCREPRODUCT, payload)
        resolve('增加新的商品')
      }
    })
  }
}

export default actions
