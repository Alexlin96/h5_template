import axios from 'axios'
import { Notify } from 'vant'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
  timeout: 60000,
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const { data } = response
    const res = data
    if (res.code !== 200) {
      Notify({
        type: 'fail',
        message: res.message,
      })
      return Promise.reject(res.message)
    }
    return res
  },
  (error) => {
    console.log('request-error', error) // for debug
    Notify({
      type: 'fail',
      message: '<span>接口出现错误，请联系技术</span>',
    })
    return Promise.reject(error)
  }
)

export default service
