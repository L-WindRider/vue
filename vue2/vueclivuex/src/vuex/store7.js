import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//声明一个常量
    count1:2
}
var store1=new Vuex.Store({ //暴露出去
    state
})
export default store1;