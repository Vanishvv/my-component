<template>
  <div class="search-box">
    <el-input
      placeholder="输入网站查询关键字"
      class="search-input"
      v-model="searchInput"
    >
    </el-input>
    <el-select
      v-model="value"
      placeholder="按收藏数"
      class="search-select"
      :popper-append-to-body="false"
      popper-class="select-popper">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button icon="el-icon-search" class="search-icon"></el-button>
    <div class="search-camera">
      <i class="el-icon-camera-solid" @click="uploadImg"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return{
        searchInput:'',
        options: [{
          value: '选项1',
          label: '按收藏数'
        }, {
          value: '选项2',
          label: '按浏览数'
        }, {
          value: '选项3',
          label: '按时间'
        }],
        value:'选项1'
      }
    },
    methods:{
      uploadImg(){
         this.$log("相机被点击了");
      }
    }
  }
</script>

<style scoped>
@import "../assets/styles/searchBox.css";
</style>
