<template>
  <div class="search-box">
    <el-input
      :placeholder="searchPlaceholder"
      class="search-input"
      v-model="searchInput"
    >
    </el-input>
    <el-select
      v-model="selectValue"
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
    props:["searchInput","options","selectValue","searchPlaceholder"],
    data(){
      return{
        searchInput:this.searchInput,
        options: this.options,
        selectValue:this.selectValue,
        searchPlaceholder:this.searchPlaceholder
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
