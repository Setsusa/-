/*
 * @Author: your name
 * @Date: 2022-06-26 23:15:13
 * @LastEditTime: 2022-06-26 23:25:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\mock\moskServe.js
 */
import Mock from "mockjs"

import banner from "./banner.json"
import floor from "./floor.json"

Mock.mock("/mock/banner", {code: 200, data: banner})
Mock.mock("/mock/floor", {code: 200, data: floor})