/*
 * @Author: your name
 * @Date: 2022-07-21 23:43:54
 * @LastEditTime: 2022-07-22 17:52:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\utils\token.js
 */
export const setToken = (token) => {
  localStorage.setItem("TOKEN", token)
}

export const getToken = () => {
  return localStorage.getItem("TOKEN")
}

export const removeToken = () => {
  localStorage.removeItem("TOKEN")
}