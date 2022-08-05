/*
 * @Author: your name
 * @Date: 2022-07-09 22:46:13
 * @LastEditTime: 2022-07-17 15:43:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\detail\index.js
 */
import {reqGoodsInfo, reqAddOrUpdateShopCart} from "@/api"
//封装游客身份的模块uuid----------->生成一个随机字符串
import {getUUID} from "@/utils/uuid_token"

const state = {
  goodsInfo: {},
  uuid_token: getUUID()
}
const mutations = {
  GETGOODINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo
  }
}
const actions = {
  async getGoodsInfo({commit}, skuId) {
    let result = await reqGoodsInfo(skuId)
    console.log(result)
    if(result.code == 200) {
      commit("GETGOODINFO", result.data)
    }
  },
  async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    if(result.code == 200) {
      //这里async函数return返回的是一个Promise对象,我们用非空字符串表示成功回调的结果
      return "oknm"
    } else {
      //用Promise.reject()表示失败的结果,我们可以new一个Error对象来表示错误信息
      return Promise.reject(new Error("failse"))
    }
  } 
}
const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}