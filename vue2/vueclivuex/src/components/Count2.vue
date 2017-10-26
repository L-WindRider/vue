<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}</h3>
        <p>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>

        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store2';
    export default{
        data() {
            return{
                msg:'Hello vuex'
            }
        },
        store,
    }
</script>