/*
 * @Author: your name
 * @Date: 2022-07-24 23:16:18
 * @LastEditTime: 2022-07-25 16:23:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\trade\index.js
 */
import {reqAddressInfo, reqOrderInfo} from "@/api"
const state = {
  address: [],
  orderInfo: {}
}

const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address
  },
  GETORDERINFO(state, order) {
    state.orderInfo = order
  }
}

const actions = {
  async getUserAddress({commit}) {
    let result = await reqAddressInfo()
    if(result.code == 200) {
      commit("GETUSERADDRESS", result.data)
    }
  },
  async getOrderInfo({commit}) {
    let result = await reqOrderInfo()
    if(result.code == 200) {
      commit("GETORDERINFO", result.data)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}