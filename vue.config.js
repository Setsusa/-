/*
 * @Author: your name
 * @Date: 2022-06-17 17:01:40
 * @LastEditTime: 2022-07-31 19:43:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\vue.config.js
 */
module.exports = {
  //打包时删除map文件
  productionSourceMap:false,
  publicPath: "./",
  //关闭eslint
  lintOnSave: false,
  //代理跨域
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        //pathRewrite: {"^/api" : ""}
      }
    }
  }
}