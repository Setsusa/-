/*
 * @Author: your name
 * @Date: 2022-06-16 17:51:46
 * @LastEditTime: 2022-07-29 22:14:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store"

//引入三级联动组件作为全局组件
//把TypeNav组件作为全局组件引入的方式: 第一个参数是组件名字, 第二个参数是哪个组件
import TypeNav from "@/components/TypeNav"
Vue.component(TypeNav.name, TypeNav)

//引入swiper样式
import "swiper/css/swiper.css"

//引入mock插件
import "@/mock/moskServe"

//引入轮播图和分页器
import Carousel from "@/components/Carousel"
Vue.component(Carousel.name, Carousel)
import Pagination from "@/components/Pagination"
Vue.component(Pagination.name, Pagination)


Vue.config.productionTip = false


//按需引入elementui按钮和messageBox插件
import {Button, MessageBox} from "element-ui"
Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

//全局事件总线,用于兄弟组件通信
Vue.prototype.$EventBus = new Vue()

//引入api接口作为原型方法
import * as API from "@/api"
Vue.prototype.$API = API

//引入图片懒加载插件(注意:安装lazyload之前要安装vant)
import {Lazyload} from "vant"
import atm from "@/assets/pingcheng.gif"
Vue.use(Lazyload, {
  loading: atm
})

//引入表单校验插件
import "@/plugins/validate"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
