import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//state访问状态对象
    count:1
}
const mutations={//Mutations修改状态
    add(state,n){
        state.count+=n;
    },
    reduce:state=>state.count--,
}

const getters={//getters计算过滤操作
    count(state){
        return state.count+=10
    }
}
const actions={//actions异步修改状态
    addaction(countext){
        countext.commit('add',10);
        setTimeout(()=>countext.commit('reduce'),2000)
        console.log('我比reduce先执行了');
    },
    reduceaction({commit}){
        commit('reduce');
    }
}
const modulea={
    state,mutations,getters,actions 
}
// const moduleb={
//     state,mutations,getters,actions 
// }

export default new Vuex.Store({ //暴露出去
    modules:{
        modulea:modulea
    }
    // state,
    // mutations,
    // getters,
    // actions
})