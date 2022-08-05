/*
 * @Author: your name
 * @Date: 2022-07-20 01:24:45
 * @LastEditTime: 2022-07-23 18:16:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\store\user\index.js
 */
import { reqLogout, reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from "@/api"
import { setToken, getToken, removeToken } from "@/utils/token"
const state = {
  code: "",
  token: getToken(),
  userInfo: {}
}

const mutations = {
  CLEARUSERINFO(state) {
    state.token = "",
      state.userInfo = {},
      removeToken()
  },
  GETCODE(state, code) {
    state.code = code
  },
  GETUSERTOKEN(state) {
    state.token = getToken()
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async userLogout({ commit,state }) {
    let result = await reqLogout()
    if (result.code == 200) {
      commit("CLEARUSERINFO")
      return "ok"
    } else {
      return Promise.reject(new Error("fail"))
    }
  },
  async getUserInfo({ commit }) {
    let result = await reqUserInfo()
    if (result.code == 200) {
      commit("GETUSERINFO", result.data)
      return "ok"
    } else {
      return Promise.reject(new Error("fail"))
    }
  },
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data)
    if (result.code == 200) {
      setToken(result.data.token)
      commit("GETUSERTOKEN")
      return "ok"
    } else {
      return Promise.reject(new Error("fail"))
    }
  },
  async userRegister({ commit }, data) {
    let result = await reqUserRegister(data)
    if (result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("fail"))
    }
  },
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone)
    if (result.code == 200) {
      commit("GETCODE", result.data)
      return "ok"
    } else {
      return Promise.reject(new Error("fail"))
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