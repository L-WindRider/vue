import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//声明一个常量
    count:2
}
const mutations={
    add(state){
        state.count++
    },
    reduce(state){
        state.count--
    }
}
var store=new Vuex.Store({
    state,mutations
})
export default store;//暴露出去