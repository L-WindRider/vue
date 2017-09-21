<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.modulea.count}}</h3>
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addaction">+</button>
            <button @click="reduceaction">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default{
        data() {
            return{
                msg:'Hello vuex'
            }
        },
        // computed:{ //state简写第一种方法
        //     // count(){
        //     //     return this.$store.state.count;
        //     // }
        // },
        // computed:mapState({ //state简写第二种方法
        //     count:state=>state.count
        // }),
        //computed:mapState(['count']),//state简写第三种方法
        computed:{
            ...mapState(['count']),//state简写第三种方法
            // count(){//getters第一种方法
            //    return this.$store.getters.count;
            // }
            ...mapGetters(['count']),//getters简写第二种方法
        },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addaction','reduceaction'])
        },//修改点击事件
        store,
    }
</script>