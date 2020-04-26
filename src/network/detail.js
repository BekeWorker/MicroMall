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
