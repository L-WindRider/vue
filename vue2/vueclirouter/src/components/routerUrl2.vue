<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>新闻ID：<span>{{ $route.params.newsId}}</span></p>
    <p>新闻标题：<span>{{ $route.params.newsTitle}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '你好，我是hello2'
    }
  }
}
</script>
