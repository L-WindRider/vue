import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Transmit from '@/components/Transmit'
import routerUrl1 from '@/components/routerUrl1'
import routerUrl2 from '@/components/routerUrl2'
import routerUrl3 from '@/components/routerUrl3'
import aliasHtml from '@/components/aliasHtml'
import Error from '@/components/Error'
import gouzi1 from '@/components/gouzi1'
import gouzi2 from '@/components/gouzi2'

Vue.use(Router)

export default new Router({
  mode:'history',//(history/hash)两种模式
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      components:{
        default:Hello,
        left:Hi1,
        right:Hi2,
      }
    },
    {
      path: '/Hi',
      component:Hi,
      children:[
        {path:'/',name:'Hi',component:Hi},
        {path:'Hi1',name:'Hi1',component:Hi1},
        {path:'Hi2',name:'Hi2',component:Hi2}
      ]
    },
    {
      path: '/Transmit',//传值
      name: 'Transmit',
      component:Transmit
    },
    {
      path: '/heheda',//改变链接是，路由改变
      //name: 'Hello',
      components:{
        default:Hello,
        left:Hi2,
        right:Hi1,
      }
    },
    {
      path: '/routerUrl1',
      name: 'routerUrl1',
      component:routerUrl1
    },
    {
      path: '/routerUrl2/:newsId(\\d+)/:newsTitle',//(\\d+)正则表达式，只允许传递数字,否则传递失败
      name: 'routerUrl2',
      component:routerUrl2
    },
    {
      path: '/routerUrl3',
      name: 'routerUrl3',
      component:routerUrl3
    },
    { //重定向
      path: '/goHome',
      //name: 'routerUrl3',
      redirect:'/'
    },{ //重定向传递参数，index，js中不配置参数，不带参数
      path: '/routerUrl2/:newsId/:newsTitle',
      redirect:'/routerUrl2/:newsId/:newsTitle'
    },
    {
      path: '/aliasHtml',
      name: 'aliasHtml',
      component:aliasHtml,
      alias:'/hehedaAlias'//把url变成了真实的path路径。（坑：在path: '/'中不起作用）
    },{ //404页面
      path: '*',
      component:Error
    },{
      path: '/gouzi1',
      name: 'gouzi1',
      component:gouzi1,
      beforeEnter:(to,from,next)=>{ //router钩子函数--准备进入
        console.log(to);//来源（携带各种参数）
        console.log(from);//目的地（携带各种参数）
        console.log(next);
        next();//可以跳转
        // next(false);//不可以跳转
        // next(true);//可以跳转
        // next({ path: '/'});//重定义跳转
      }
    },
    {
      path: '/gouzi2',
      name: 'gouzi2',
      component:gouzi2
    }
  ]
})
