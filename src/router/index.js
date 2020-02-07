import Vue from 'vue'
import Router from 'vue-router'
import ImgList from '@/views/ImgList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ImgList
    }
  ]
})
