<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$route.query.index}}</p>
    <p>{{index}}</p>
    <p>{{name}}</p>
    <button @click="judge">判断</button>
  </div>
</template>

<script>
export default {
  name: 'routerUrl3',
  data () {
    return {
      msg: '你好，我是routerUrl3',
      index:this.$route.query.index,
      name:this.$route.query.name
    }
  },
   methods:{
      judge:function(){
        if(this.index==1) alert('1');
        else  alert('错误');
      }
    }
}
</script>