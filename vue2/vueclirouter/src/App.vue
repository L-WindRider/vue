<template>
  <div id="app">
    <div class="app-left">
      <div>
        <h3>1、增加一个Hi的路由和页面</h3>
        <router-link to="/Hi">Hi</router-link>
      </div>
      <div>
        <h3>2、vue-router配置子路由</h3>
        <router-link to="/Hi">Hi</router-link>
        <router-link to="/Hi/Hi1">Hi页面1</router-link>
        <router-link to="/Hi/Hi2">Hi页面2</router-link>
      </div>
      <div>
        <h3>3、vue-router如何参数传递</h3>
        <router-link :to="{name:'Transmit',params:{username:'heheda',id:'888'}}">Transmit</router-link>
        <p>接收name值：{{$route.name}}</p>
      </div>
      <div>
        <h3>4、单页面多路由区域操作</h3>
        <router-link to="/Hello">hello</router-link>
        <router-link to="/heheda">heheda</router-link>
      </div>
      <div>
        <h3>5、vue-router 利用url传递参数</h3>
        <router-link :to="{path: '/routerUrl1', query: {index: 0, name: 'name',}}">routerUrl1</router-link>
        <router-link to="/routerUrl2/198/heheda hehe gg">routerUrl2</router-link>
        <router-link to="/routerUrl3/?index=0&name=name">routerUrl3</router-link>
      </div>
      <div>
        <h3>6、vue-router 的重定向-redirect</h3>
        <router-link to="/gohome">gohome</router-link>
        <router-link to="/routerUrl2/199/heheda hehe gg">GorouterUrl2</router-link>
      </div>
      <div>
        <h3>7、alias别名的使用</h3>
        <router-link to="/aliasHtml">alias</router-link>
        <router-link to="/hehedaAlias">hehedaAlias</router-link>
      </div>
      <div>
        <h3>8、路由的过渡动画</h3>
        <p>设置transition name="fade"(下面属性对应style标签设置)</p>
        <p>fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。</p>
        <p>fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。</p>
        <p>fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。</p>
        <p>fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。</p>
        <p>设置transition mode="in-out"：新元素先进入过渡，完成之后当前元素过渡离开。</p>
        <p>设置transition mode="out-in"：当前元素先进行过渡离开，离开完成后新元素过渡进入。</p>
      </div>
      <div>
        <h3>9、mode的设置和404页面的处理</h3>
        <p>在index.js中设置mode</p>
        <p>1、histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！</p>
        <p>2、hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。</p>
        <router-link to="/xiaxiede" name="在index.js中设置">瞎写的-->404</router-link>
      </div>
      <div>
        <h3>10、路由中的钩子</h3>
        <p><router-link to="/gouzi1" >在index.js中设置beforeEnter--beforeRouteLeave,不能设置</router-link></p>
        <p><router-link to="/gouzi2" >在gouzi2.vue中设置beforeEnter && beforeRouteLeave</router-link></p>
        <p>1、to:路由将要跳转的路径信息，信息是包含在对像里边的。</p>
        <p>2、from:路径跳转前的路径信息，也是一个对象的形式。</p>
        <p>3、next:路由的控制参数，常用的有next(true)和next(false)。</p>
      </div>
      <div>
        <h3>11、编程式导航</h3>
        <div>
          <button @click="goback">后退</button>
          <button @click="gogo">前进</button>
          <button @click="gohome">返回首页</button>
        </div>
        <p><router-link to="/gouzi2" >在gouzi2.vue中设置beforeEnter && beforeRouteLeave</router-link></p>
      </div>
    </div>
   <div class="app-right">
      <h3>页面</h3>
      <div name="4、单页面多路由区域操作">
          <router-view name="left" style="float:left;width:50%;height:30px;background:#ddd"></router-view>
          <router-view name="right" style="float:left;width:50%;height:30px;background:red"></router-view>
      </div>
      <transition name="fade" mode="out-in">
        <router-view style="background:#CCC"></router-view>
      </transition>
   </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goback (){
      this.$router.go(-1);
    },
    gogo () {
      this.$router.go(1);
    },
    gohome () { //push用法
      this.$router.push('/');
    }
  }
}
</script>

<style>
.fade-enter{
  opacity:0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-left,.app-right{width:50%;float:left;}
</style>
