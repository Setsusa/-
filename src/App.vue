<!--
 * @Author: your name
 * @Date: 2022-06-16 17:51:46
 * @LastEditTime: 2022-07-22 00:50:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\App.vue
-->
<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("categroyList");
    //this.$store.dispatch("getUserInfo")
  },
  methods: {
    // showFooter() {
    //   return this.$route.path == "/home" || this.$route.path == "/search"
    // }
  },
};
</script>

<style>
</style>
