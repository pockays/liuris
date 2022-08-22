<template>
<div class="container">
  <Nav v-if="state.isShowNav" />
  <div class="main">
   <router-view />
  </div>
</div>

</template>
<script lang="ts">
import Nav from "./components/Nav.vue"
import {  useRoute, } from 'vue-router';
import {reactive,onMounted} from "vue";
export default {
  name:"App",
  components:{Nav},
  watch: {
    $route: function (val: any, oldVal: any) {
      (this as any).routeChange(val, oldVal);
    },
  },
  setup(){
    const state = reactive({
      isShowNav: true,
    });
    const route = useRoute();
    const routeChange = (val: any, oldVal: any): void => {
      if (val.path ==="/"||val.path ==="/notes"||val.path ==="/album"||val.path ==="/collection"||val.path ==="/video"){
        state.isShowNav = true;
      } else {
        state.isShowNav = false;
      }
  }
  onMounted(() => {
        routeChange(route, route);
    })
  return {
      state,
      routeChange,
    };
}
}
</script>

<style>

#app {
  padding-top: 61px;
}
</style>