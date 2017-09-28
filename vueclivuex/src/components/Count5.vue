<template>
    <div>
         <h1>state访问状态对象</h1>
        <p>三、通过mapState的数组来赋值</p>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}</h3>
        <h3>{{count}}</h3>
        
        <p>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </p>
        <h3>{{$store.state.number}}</h3>
        <h3>{{number}}</h3>
        <p>
            <button @click="$store.commit('numadd')">+</button>
            <button @click="$store.commit('numreduce')">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store5';
    import {mapState} from 'vuex';
    export default{
        data() {
            return{
                msg:'Hello vuex'
            }
        },
        computed:mapState(['count','number']),
        store,
    }
</script>