/*
 * @Author: your name
 * @Date: 2022-06-21 23:20:41
 * @LastEditTime: 2022-07-21 23:47:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\api\request.js
 */
import axios from "axios"
import store from "@/store"
import nprogress from "nprogress"
import "nprogress/nprogress.css"

//利用axios对象的方法create,创建一个axios实例
//requset就是axios,我们这里配置一下
const requests = axios.create({
  //基础路径,发请求的时候路径中会出现"/api"
  baseURL: "/api",
  //代表请求超时的时间是5s
  timeout: 5000
})
//请求拦截器,再发请求之前请求拦截器可以检测到,并可以做一些事
requests.interceptors.request.use((config) => {
  if(store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  if(store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  //config: 配置对象,里面有headers请求头
  nprogress.start()
  return config
})
//响应拦截器,在我们接收到后台响应的时候可以做一些事
requests.interceptors.response.use((res) => {
  //成功的回调函数: 响应拦截器可已检测到服务器返回的数据并做一些事
  nprogress.done()
  return res.data
}, (error) => {
  //响应失败的回调函数
  return Promise.reject(new Error("faile"))
})

export default requests