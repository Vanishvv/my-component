import Vue from 'vue'
import Router from 'vue-router'
import MaterialList from '@/views/MaterialList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MaterialList
    }
  ]
})
