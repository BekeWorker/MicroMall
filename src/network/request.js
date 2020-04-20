import axios from 'axios'

// 封装方式4:最优解,axios内部支持Promise

export const axiosFn2 = (config) => {
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/h8',
    timeout: 5000,
  })
  return instance(config)
}




