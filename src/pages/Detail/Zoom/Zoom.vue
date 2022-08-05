<!--
 * @Author: your name
 * @Date: 2022-07-09 00:34:20
 * @LastEditTime: 2022-07-22 17:37:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-SPH\app\src\pages\Detail\Zoom\Zoom.vue
-->
<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" ref="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="img"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: ["skuImageList"],
    mounted() {
      this.$EventBus.$on("getIndex", (index) => {
        this.currentIndex = index
      })
    },
    methods: {
      handler(event) {
        let mask = this.$refs.mask
        let events = this.$refs.event
        let img = this.$refs.img
        let left = event.offsetX - mask.offsetWidth / 2
        let top = event.offsetY - mask.offsetHeight / 2
        left = Math.max(0, left)
        left = Math.min(events.offsetWidth-mask.offsetWidth, left)   
        top = Math.max(0, top)
        top = Math.min(events.offsetHeight-mask.offsetHeight, top)
        mask.style.left = left + "px"
        mask.style.top = top + "px"
        img.style.left = -(left * img.offsetWidth / events.offsetWidth) + "px"
        img.style.top = -(top * img.offsetHeight / events.offsetHeight) + "px"
      }
    },
    computed: {
      imgObj() {
        return this.skuImageList[this.currentIndex] || {}
      }
    }
  }
</script>

<style lang="stylus">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>