<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in arr">{{item}}</li>
    </ul>
    <button @click="push">push</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:['q','w','e']
    }
  },
   methods:{
     push(){
       this.arr.push('r');
     }
    }
}
</script>