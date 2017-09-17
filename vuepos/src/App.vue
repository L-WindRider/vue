<template>
  <div id="app" class="lh_befoafte">
    <posleft></posleft>
   <div class="posright">
      <router-view></router-view>
   </div>
  </div>
</template>

<script>
import posleft from '@/components/common/posleft'
export default {
  name: 'app',
  components:{
    posleft
  }
}
</script>

<style>
.posright{float:right;width: 95%;height: 100%;overflow:hidden;}
</style>
