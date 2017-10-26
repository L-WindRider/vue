import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Count from '@/components/Count'
import Count1 from '@/components/Count1'
import Count2 from '@/components/Count2'
import Count3 from '@/components/Count3'
import Count4 from '@/components/Count4'
import Count5 from '@/components/Count5'
import Count6 from '@/components/Count6'
import Count7 from '@/components/Count7'
import Count8 from '@/components/Count8'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Hello',component: Hello},
    {path: '/Count1',name: 'Count1',component: Count1},
    {path: '/Count2',name: 'Count2',component: Count2},
    {path: '/Count3',name: 'Count3',component: Count3},
    {path: '/Count4',name: 'Count4',component: Count4},
    {path: '/Count5',name: 'Count5',component: Count5},
    {path: '/Count6',name: 'Count6',component: Count6},
    {path: '/Count7',name: 'Count7',component: Count7},
    {path: '/Count8',name: 'Count8',component: Count8},
   
  ]
})
