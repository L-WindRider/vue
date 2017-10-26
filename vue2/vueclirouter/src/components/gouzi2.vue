<template>
    <h3>{{ msg }}</h3>
</template>

<script>
export default {
  name: 'gouzi2',
  data () {
    return {
      msg: '你好，我是gouzi2'
    }
  },
  beforeRouteEnter: (to, from, next) => {//router钩子函数--准备进入
   console.log('准备进入');
    console.log(to);//来源（携带各种参数）
    console.log(from);//目的地（携带各种参数）
    console.log(next);
    next();//可以跳转
    // next(false);//不可以跳转
    // next(true);//可以跳转
    // next({ path: '/gouzi2'});//重定义跳转
  },
  beforeRouteLeave: (to, from, next) => {//router钩子函数--准备离开
    console.log('准备离开');
    console.log(to);//来源（携带各种参数）
    console.log(from);//目的地（携带各种参数）
    console.log(next);
    next();//可以跳转
    // next(false);//不可以跳转
    // next(true);//可以跳转
    // next({ path: '/gouzi2'});//重定义跳转
  }
}
</script>