/*
 * @Author: your name
 * @Date: 2022-07-09 21:14:22
 * @LastEditTime: 2022-07-30 01:40:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\router\routes.js
 */
// import Home from "@/pages/Home"
// import Search from "@/pages/search"
// import Login from "@/pages/Login"
// import Register from "@/pages/Register"
// import Detail from "@/pages/Detail"
// import AddChartSuccess from "@/pages/AddCartSuccess"
// import ShopCart from "@/pages/ShopCart"
// import Trade from "@/pages/Trade"
// import Pay from "@/pages/Pay"
// import PaySuccess from "@/pages/PaySuccess"
// import Center from "@/pages/Center"
// //引入二级路由
// import MyOrder from "@/pages/Center/myOrder"
// import GroupOrder from "@/pages/Center/groupOrder"
export default [
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/Home"),
    meta: {
      show:true
    }
  },
  {
    path: "/search/:keyword?",
    name: "search",
    component: () => import("@/pages/search"),
    meta: {
      show: true
    },
    props: ($route) => {
      return {keyWords: $route.params.keyWord, k: $route.query.key}
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login"),
    meta: {
      show: false
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/pages/Register"),
    meta: {
      show: false
    }
  },
  {
    path: "/detail/:skuid",
    name: "detail",
    component: () => import("@/pages/Detail"),
    meta: {
      show:true
    }
  },
  {
    path: "/addchartsuccess",
    name: "addChartSuccess",
    component: () => import("@/pages/AddCartSuccess"),
    meta: {
      show: true
    }
  },
  {
    path: "/shopcart",
    name: "shopCart",
    component: () => import("@/pages/ShopCart"),
    meta: {
      show: true
    }
  },
  {
    path: "/trade",
    name: "trade",
    component: () => import("@/pages/Trade"),
    meta: {
      show: true
    },
    beforeEnter: (to, from, next) => {
      /* must call `next` */
      if(from.path == "/shopcart") {
        next()
      }else {
        next(false)
      }
    }
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("@/pages/Pay"),
    meta: {
      show: true
    },
    beforeEnter: (to, from, next) => {
      /* must call `next` */
      if(from.path == "/trade") {
        next()
      }else {
        next(false)
      }
    }
  },
  {
    path: "/paysuccess",
    name: "paySuccess",
    component: () => import("@/pages/PaySuccess"),
    meta: {
      show: true
    },
  },
  {
    path: "/center",
    name: "center",
    component: () => import("@/pages/Center"),
    meta: {
      show: true
    },
    children: [
      {
        path: "myorder",
        component: () => import("@/pages/Center/myOrder")
      },
      {
        path: "grouporder",
        component: () => import("@/pages/Center/groupOrder")
      },
      {
        path: "/center",
        redirect: "/center/myorder"
      }
    ],
  },
  {
    path: "*",
    redirect: "/home"
  }
]