<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count1}}</h3>
    </div>
</template>

<script>
    import store from '@/vuex/store1';
    export default{
        data() {
            return{
                msg:'Hello vuex'
            }
        },
        store,
    }
</script>