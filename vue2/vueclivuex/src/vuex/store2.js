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
export default new Vuex.Store({ //暴露出去
    state,mutations
})