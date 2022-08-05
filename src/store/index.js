/*
 * @Author: your name
 * @Date: 2022-06-22 17:51:23
 * @LastEditTime: 2022-07-24 23:18:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\index.js
 */
import Vue from "vue"
import Vuex from "vuex"

import home from "./home"
import search from "./search"
import detail from "./detail"
import shopcart from "./shopCart"
import user from "./user"
import trade from "./trade"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
})