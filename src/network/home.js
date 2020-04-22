import {axiosFn2} from './request'

export function getHomeMultidata () {
  return axiosFn2({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return axiosFn2({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
