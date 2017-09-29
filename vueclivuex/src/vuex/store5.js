import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//声明一个常量
    count:2,
    number:1
}
const mutations={
    add(state){
        state.count++
    },
    reduce(state){
        state.count--
    },
    numadd(state){
        state.number++
    },
    numreduce(state){
        state.number--
    }
}
var store1=new Vuex.Store({ //暴露出去
    state,mutations
})
export default store1;