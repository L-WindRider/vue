<template>
  <div class="hello">
    <ul>
      <li v-for='msg in msgs1'>{{msg}}</li>
    </ul>
    <div>{{newmsgs2}}</div>
    <div>{{msgs3}}</div>
    <button @click="add">加个</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msgs1: ['ms1-1','ms1-2'],heheda1:'ms1-3',msgs2:['msgs2-1','ms2-2'],heheda2:'ms2-3',
      msgs3:[]
    }
  },
  computed:{
    newmsgs1(){
       return this.msgs1.push(this.heheda1);
    },
    newmsgs2(){
       return this.msgs2.push(this.heheda2);
    }
  },
  methods:{
    add(){
      if(this.heheda1==='w') this.heheda1='q';
      else this.heheda1='w';
      this.heheda2='w';
      this.msgs3.push('1');
      Vue.set(this.msgs3,0,'d');
    }
  },
  watch:{ //构造器内部使用watch
      newmsgs1(newvalue,oldvalue){
          console.log(newvalue);//新值
          console.log(oldvalue);//旧值
      },
      newmsgs2(newvalue,oldvalue){
          console.log(newvalue);//新值
          console.log(oldvalue);//旧值
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
