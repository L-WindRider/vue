<template>
    <div>
         <h1>state访问状态对象</h1>
        <p>二、通过mapState的对象来赋值</p>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}</h3>
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store4';
    import {mapState} from 'vuex';
    export default{
        data() {
            return{
                msg:'Hello vuex'
            }
        },
        computed:mapState({
            // count:function(state){
            //     return state.count;
            // }
            count:state=>state.count, //箭头函数写法，同上
        }),
        store,
    }
</script>