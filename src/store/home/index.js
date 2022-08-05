/*
 * @Author: your name
 * @Date: 2022-06-22 18:27:19
 * @LastEditTime: 2022-07-03 00:20:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\home\index.js
 */

import {reqCategoryList, reqGetBannerList, reqFloorList} from "@/api"

const state = {
  categroyList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  CATEGROYLIST(state, categroyList) {
    state.categroyList = categroyList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}

const actions = {
  async categroyList ({commit}) {
    let result = await reqCategoryList()
    if(result.code == 200) {
      commit("CATEGROYLIST",result.data)
    }
  },
  async getBannerList({commit}) {
    let result = await reqGetBannerList()
    if(result.code === 200) {
      commit("GETBANNERLIST", result.data)
    }
  },
  async getFloorList({commit}) {
    let result = await reqFloorList()
    if(result.code == 200) {
      commit("GETFLOORLIST", result.data)
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