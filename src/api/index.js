/*
 * @Author: your name
 * @Date: 2022-06-22 00:09:37
 * @LastEditTime: 2022-07-28 18:04:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\api\imdex.js
 */

//当前模块是用来统一管理api
import requests from "./request"

import mockRequests from "./mockAjax"
//三级联动接口

export const reqCategoryList = () => requests({url: "/product/getBaseCategoryList", method: "get"})

export const reqGetBannerList = () => mockRequests({url: "/banner", method: "get"})
//export const reqGetBannerList = () => mockRequests.get("/banner")
export const reqFloorList = () => mockRequests.get("/floor")

export const reqGetSearchInfo = (params) => requests({url: "/list", method: "post", data: params})

export const reqGoodsInfo = (skuId) => (console.log(skuId),requests({url:`/item/${skuId}`, method: "get"}))

export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`, method: "post"})

export const reqCartList = () => requests({url:"/cart/cartList", method: "get"})

export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`, method: "delete"})

export const reqUpdateCheckedById = (skuId, isChecked) => requests({url: `cart/checkCart/${skuId}/${isChecked}`, method: "get"})

export const reqGetCode = (phone) => requests({url: `/user/passport/sendCode/${phone}`, method:"get"})

export const reqUserRegister = (data) => requests({url: `user/passport/register`, data, method: "post"})

export const reqUserLogin = (data) => requests({url: "user/passport/login", data, method: "post"})

export const reqUserInfo = () => requests({url: "/user/passport/auth/getUserInfo", method: "get"})

export const reqLogout = () => requests({url:"user/passport/logout", method: "get"})

export const reqAddressInfo = () => requests({url: "/user/userAddress/auth/findUserAddressList", method: "get"})

export const reqOrderInfo = () => requests({url: "/order/auth/trade", method: "get"})

export const reqSubmitOrder = (tradeNo, data) => requests({url: `order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post"})

export const reqPayInfo = (orderId) => requests({url: `payment/weixin/createNative/${orderId}`, method: "get"})

export const reqPayStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`, method: "get"})

export const reqMyOrderList = (page, limit) => requests({url: `order/auth/${page}/${limit}`, method: "get"})