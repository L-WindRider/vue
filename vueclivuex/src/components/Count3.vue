<template>
    <div>
        <h1>state访问状态对象</h1>
        <p>一、通过computed的计算属性直接赋值</p>
        <!-- <p>三、通过mapState的数组来赋值</p> - -->
        <br>
        <h2>{{msg}}</h2>
        <h3>原始写法：{{$store.state.count}}</h3>
        <h3>computed写法：{{count}}</h3>
        <P>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">+</button>
        </P>
    </div>
</template>

<script>
    import store from '@/vuex/store3';
    export default{
        data() {
            return{
                msg:'Hello vuex'
            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        },
        store,
    }
</script>