/*
 * @Author: your name
 * @Date: 2022-07-15 23:53:25
 * @LastEditTime: 2022-07-19 20:54:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\shopCart\index.js
 */

import {reqCartList, reqDeleteCartById, reqUpdateCheckedById} from "@/api/index"

const state = {
  cartList: []
}

const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  }
}

const actions = {
  updateAllCartIsChecked({dispatch,state}, isChecked) {
    let promiseAll = []
    state.cartList[0].cartInfoList.map(item => {
      let promise = dispatch("updateCheckedById", {skuId: item.skuId, isChecked})
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  },
  async updateCheckedById({commit}, {skuId, isChecked}) {
    let result = await reqUpdateCheckedById(skuId, isChecked)
    if(result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("fail"))
    }
  },
  async getCartList({commit}) {
    let result = await reqCartList()
    if(result.code == 200) {
      commit("GETCARTLIST", result.data)
    }
  },
  async deleteCartListBySkuId({commit}, skuId) {
    let result = await reqDeleteCartById(skuId)
    if(result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("fail"))
    }
  }
}

const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}