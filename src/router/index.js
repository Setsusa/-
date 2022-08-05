/*
 * @Author: your name
 * @Date: 2022-06-17 22:29:33
 * @LastEditTime: 2022-07-28 23:20:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\router\index.js
 */
import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
import store from "@/store"

//备份vuerouter原型上的push和replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//重写vuerouter原型的push和replace方法,防止报错
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}
Vue.use(VueRouter)

let router =  new VueRouter({
  routes,
  //滚动条位置
  scrollBehavior(to, from, savedPositon) {
    return { y: 0 }
  }
})
router.beforeEach(async (to, from, next) => {
  //to: 可以获取到你即将要跳转到的那个路由的信息
  //from: 可以获取到你从哪个路由而来的信息
  //next: 放行函数
  // next()
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if(token) {
    if(to.path == "/login") {
      next("/home")
    }else {
      if(name) {
        next()
      } else {
        try {
          await store.dispatch("getUserInfo")
          next()
        } catch (error) {
          store.dispatch("userLogout")
          next("/login")
        }
      }
    }
  }else {
    let toPath = to.path
    if(toPath.indexOf("/trade") != -1 || toPath.indexOf("/pay") != -1 || toPath.indexOf("/center") != -1) {
      next("/login?redirect="+toPath)
    }
    next()
  }
})
export default router