<!--
 * @Author: your name
 * @Date: 2022-07-07 17:09:18
 * @LastEditTime: 2022-07-08 23:14:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\components\Pagination\index.vue
-->
<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo', pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1" @click="$emit('getPageNo', 1)" :class="{active: pageNo==1}">1</button>
    <!-- <button v-if="pageNo=5">2</button> -->
    <button v-if="startNumAndEndNum.start>2" @click="$emit('getPageNo', pageNo==5?2:undefined)" :class="{active:pageNo==2}">{{pageNo == 5 ? '2' : '···'}}</button>

    <button v-for="(page, idx) in startNumAndEndNum.end" :key="idx" v-if="page>=startNumAndEndNum.start" @click="$emit('getPageNo', page)" :class="{active:pageNo==page}">{{page}}</button>


    <button v-if="startNumAndEndNum.end < totalPage-1" @click="$emit('getPageNo', (pageNo == (totalPage - Math.ceil(continues/2) - 1)) ? (totalPage-1) : undefined)" :class="{active:pageNo==totalPage-1}">{{(pageNo == (totalPage - Math.ceil(continues/2) - 1)) ? (totalPage-1) : '···'}}</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo', totalPage)" :class="{active:pageNo==totalPage}">{{ totalPage }}</button>
    <button :disabled="pageNo==totalPage" @click="$emit('getPageNo', pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      //向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { pageNo, totalPage, continues } = this;
      let start = pageNo - parseInt(continues / 2);
      let end = pageNo + parseInt(continues / 2);
      if (start < 3 && totalPage >= continues) {
        start = 1;
        end = continues;
      } else if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else if (end > totalPage) {
        start = totalPage - continues + 1;
        end = totalPage;
      }
      return { start, end };
    },
  },
};
</script>

<style lang="stylus" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 50px;
    height: 45px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
