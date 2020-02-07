<template>
  <div class="img-item">
    <el-row class="img-box">
      <a>
        <el-image
          :src="url"
          :fit="fit"
          @click="show"
          class="el-image"
        >
        </el-image>
          <viewer :images="srcList"
                  class="viewer"
                  ref="viewer"
                  @inited="inited"
          >
            <img v-for="src in srcList" :src="src" :key="src" class="image">
          </viewer>
      </a>
    </el-row>
    <el-row class="img-tool">
      <div class="user">
        <el-avatar class="el-icon-user-solid" :size="40"></el-avatar>
      </div>
      <div class="like">
        <i class="el-icon-star-off">0</i>
      </div>
      <div class="browse">
        <i class="el-icon-view">0</i>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'imgViewer',
  props:["srcList","imgSrc","imgIndex"],
  data(){
    return{
      fit:'cover',
      url: this.imgSrc,
      imgSrcList: this.srcList
    }
  },
  methods:{
    inited (viewer) {
      this.$viewer = viewer
    },
    show() {
      this.$viewer.view(this.imgIndex)
    }
  }
}
</script>

<style scoped>
  @import "../assets/styles/imgViewer.css";
</style>
