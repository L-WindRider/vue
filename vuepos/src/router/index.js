import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Hello from '@/components/page/Hello'

Vue.use(Router)

export default new Router({
  //mode:'history',//(history/hash)两种模式
  routes: [
    {path: '/',name: 'Pos',component: Pos}
  ]
})
