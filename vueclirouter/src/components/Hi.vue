<template>
  <div>
  <h2>{{mes}}</h2>
  <router-view></router-view>
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