/*
 * @Author: your name
 * @Date: 2022-06-22 18:29:43
 * @LastEditTime: 2022-07-03 00:21:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\search\index.js
 */
/*
 * @Author: your name
 * @Date: 2022-06-22 18:27:19
 * @LastEditTime: 2022-06-22 18:29:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\home\index.js
 */
import {reqGetSearchInfo} from "@/api"
const state = {
  searchList: {}
}

const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}

const actions = {
  async getSearchList({commit}, params={}) {
    let result = await reqGetSearchInfo(params)
    if(result.code == 200) {
      commit("GETSEARCHLIST", result.data)
    }
  }
}

const getters = {
  attrsList(state) {
    return state.searchList.attrsList|| []
  },
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}