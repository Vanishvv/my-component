<template>
  <div class="material-list">
    <!--导航条-->
    <div class="index-nav">
      <!--导航栏-->
      <el-menu
        :default-active="activeIndex"
        class="index-menu"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#ff3737">
        <el-menu-item index="4">浙理轻定</el-menu-item>
        <el-menu-item index="2">浙理作品</el-menu-item>
        <el-menu-item index="3">设计素材</el-menu-item>
        <el-menu-item index="1">设计资源</el-menu-item>
      </el-menu>
      <!--登录注册单选按钮-->
      <el-radio-group
        v-model="radio1"
        size="small"
        fill="#ff3737"
        class="login-radio">
        <el-radio-button label="注册"></el-radio-button>
        <el-radio-button label="登录"></el-radio-button>
      </el-radio-group>
      <!--中心LOGO-->
      <img src="../assets/images/zldz-logo.png"class="logo" alt="" >
      <p class="logo-name">浙江省服装个性化定制2011协同创新中心</p>
    </div>
    <img src="../assets/images/index-bg.jpg" class="index-bg" alt=" " >
    <!--搜索框-->
    <SearchBox></SearchBox>
    <!--设计导航-->
    <el-menu
      :default-active="activeIndex"
      class="design-menu"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#ff3737">
      <el-menu-item index="4">重点推荐</el-menu-item>
      <el-menu-item index="2">设计素材</el-menu-item>
      <el-menu-item index="3">设计工具</el-menu-item>
      <el-menu-item index="1">设计导航</el-menu-item>
      <el-menu-item index="5">其他</el-menu-item>
    </el-menu>
    <div class="switch-list">
      <el-switch
        class="index-switch"
        style="display: block"
        v-model="value1"
        active-color="#ff3737"
        inactive-color="#ccc"
        active-text="国内">
      </el-switch>
      <el-switch
        class="index-switch"
        style="display: block"
        v-model="value2"
        active-color="#ff3737"
        inactive-color="#ccc"
        active-text="国外">
      </el-switch>
      <el-switch
        class="index-switch"
        style="display: block"
        v-model="value3"
        active-color="#ff3737"
        inactive-color="#ccc"
        active-text="免费">
      </el-switch>
      <el-switch
        class="index-switch"
        style="display: block"
        v-model="value4"
        active-color="#ff3737"
        inactive-color="#ccc"
        active-text="收费">
      </el-switch>
    </div>
  </div>
</template>

<script>
  import SearchBox from"../components/SeacherBox"
  export default {
    name: '',
    data(){
      return {
        activeIndex: '1',
        radio1: '注册',
        select:'',
        activeName: 'second',
        value1:'',
        value2:'',
        value3:'',
        value4:''
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
