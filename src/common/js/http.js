/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
// 超时时间
axios.defaults.timeout = 10000
axios.defaults.baseURL = '/sport/v1'
// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
	return config
}, error => {
 	console.log('request error')
	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
	return data
}, error => {
 	console.log('response error...')
	return Promise.reject(error)
})

export default axios
