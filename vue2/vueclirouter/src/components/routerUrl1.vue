<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$route.query.index}}</p>
    <p>{{index}}</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'routerUrl1',
  data () {
    return {
      msg: '你好，我是routerUrl1',
      index:this.$route.query.index,
      name:this.$route.query.name
    }
  }
}
</script>