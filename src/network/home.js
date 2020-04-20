import {axiosFn2} from './request'

export function getHomeMultidata () {
  return axiosFn2({
    url:'/home/multidata'
  })
}
