<template>
  <div class="material-list">
    <!--导航条-->
    <div class="index-nav">
      <el-menu
        :default-active="indexData.activeIndex"
        class="index-menu"
        :mode="indexData.indexMenuMode"
        @select="handleSelect"
        :active-text-color="indexData.activeColor">
        <el-menu-item
          :index="(index+'')"
          v-for="(menuItem,index) in indexData.indexMenuData" :key="index"
        >{{menuItem.itemName}}</el-menu-item>
      </el-menu>
      <el-radio-group
        v-model="indexData.radioChoose"
        size="small"
        :fill="indexData.activeColor"
        class="login-radio">
        <el-radio-button :label="radioItem.labelName"v-for="(radioItem,index) in indexData.radioData" :key="index"></el-radio-button>
      </el-radio-group>
      <img :src="indexData.logoUrl" class="logo" alt="" >
      <p class="logo-name">{{indexData.logoName}}</p>
    </div>
    <img :src="indexData.indexBgUrl" class="index-bg" alt=" " >
    <!--搜索框-->
    <SearchBox :options="indexData.options"
               :searchInput="indexData.searchInput"
               :selectValue="indexData.selectValue"
               :searchPlaceholder="indexData.searchPlaceholder"
    ></SearchBox>
    <!--设计导航-->
    <el-menu
      :default-active="indexData.activeIndex"
      class="design-menu"
      :mode="indexData.indexMenuMode"
      @select="handleSelect"
      :active-text-color="indexData.activeColor">
      <el-menu-item
        :index="(index+'')"  v-for="(designMenuItem,index) in indexData.designMenuData" :key="index"
      >{{designMenuItem.itemName}}</el-menu-item>
    </el-menu>
    <!--筛选开关-->
    <div class="switch-list">
      <el-switch
        class="index-switch"
        v-model="switchItem.value"
        :active-color="indexData.activeColor"
        :inactive-color="indexData.inactiveColor"
        :active-text="switchItem.name"
        v-for="(switchItem,index) in indexData.switchData" :key="index"
      >
      </el-switch>
    </div>
  </div>
</template>

<script>
  import SearchBox from"../components/SeacherBox"
  import materialListData from "../../static/materialListData"
  export default {
    name: '',
    data(){
      return {
        indexData:materialListData.data,
        options:'',
        searchInput:'',
        selectValue:'',
        searchPlaceholder:''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$log(key, keyPath);
      },
      handleClick(tab, event) {
        this.$log(tab, event);
      }
    },
    components:{SearchBox}
  }
</script>

<style scoped>
@import "../assets/styles/materialList.css";
</style>
