<template>
  <div class="img-list">
    <el-row :gutter="300" v-for="(rowItem,index) in rowData" :key="index">
      <el-col :span="4" v-for="(colItem,index) in rowItem.colData" :key="index">
        <imgviewer :srcList="colItem.srcList" :imgSrc="colItem.imgSrc" :imgIndex="colItem.imgIndex"></imgviewer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import imgviewer from '../components/ImgViewer'
  import imgListData from '../../static/imgListData'
  export default {
    name: '',
    components:{imgviewer},
    data(){
      return {
        rowData:imgListData.data,
        srcList:{},
        imgSrc:'',
        imgIndex:''
      }
    }
  }
</script>

<style scoped>
  @import "../assets/styles/imgList.css";
</style>
