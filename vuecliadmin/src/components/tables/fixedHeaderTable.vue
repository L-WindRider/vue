<template>
   <el-table :data="tableData" style="width: 100%" border stripe height="250">
      <el-table-column prop="id"  label="ID"  width="80"></el-table-column>
      <el-table-column prop="userName" label="NAME" width="180"></el-table-column>
      <el-table-column prop="age" label="AGE" width="80"> </el-table-column>
      <el-table-column prop="ability" label="ABILITY"> </el-table-column>
      <el-table-column prop="value" label="VALUE" align="right"> </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            id:1,
            userName: 'heheda',
            age: '30',
            ability: 'Web,HTML5,PHP',
            value:'80%'
          }, {
            id:2,
            userName: 'heheda2',
            age: '28',
            ability: 'Web,PHP',
            value:'70%'
          }, {
            id:3,
            userName: 'heheda3',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          }, {
            id:4,
            userName: 'heheda3',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:5,
            userName: 'heheda3',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:6,
            userName: 'heheda3',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:7,
            userName: 'heheda3',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:8,
            userName: 'heheda34',
            age: '35',
            ability: 'Web,HTML5,PHP,DB',
            value:'80%'
          }]
        }
      }
    }
</script>
<style scoped>
    
</style>
