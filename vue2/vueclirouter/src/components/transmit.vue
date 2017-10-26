<template>
  <div>
  <h2>{{mes}}</h2>
  <p>{{$route.params.username}}</p>
  <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      mes:'你好,我是hi'
    }
  }
}
</script>