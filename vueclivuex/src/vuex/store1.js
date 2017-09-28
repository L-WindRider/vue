import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//声明一个常量
    count1:1
}
var store1=new Vuex.Store({
    state
})
export default store1;//暴露出去