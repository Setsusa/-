/*
 * @Author: your name
 * @Date: 2022-07-16 22:34:10
 * @LastEditTime: 2022-07-16 22:45:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\utils\uuid_token.js
 */
import { v4 as uuidv4 } from 'uuid'
export const getUUID = () => {
  let uuid_token = localStorage.getItem("UUIDTOKEN")
  if(!uuid_token) {
    uuid_token = uuidv4()
    localStorage.setItem("UUIDTOKEN", uuid_token)
  }
  return uuid_token
}