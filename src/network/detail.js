// 注意导入的函数要用{}
import {axiosFn2} from './request'

export function getDetailData(iid) {
  return axiosFn2({
    url:'/detail',
    params: {
      iid
    }
  })
}

export class GoodsInfo {
  constructor(columns, itemInfo, services) {
    this.columns = columns;
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.services = services;
    this.lowPrice = itemInfo.lowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.shopUrl = shopInfo.shopUrl;
    this.name = shopInfo.name;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.cFans = shopInfo.cFans;
    this.score = shopInfo.score
  }
}

export class ParamsInfo {
  constructor(info, rule) {
    this.disclaimer = rule.disclaimer
    this.key = rule.key
    this.tables = rule.tables
    this.set = info.set
  }
}

export function getRecommendData() {
  return axiosFn2({
    url:'/recommend'
  })
}
