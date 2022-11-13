<template>
<div class="container">
  <sakura />
  <Nav v-if="state.isShowNav" />
  <div :class="state.isShowNav?'main':''">
   <router-view />
  </div>
  <footers />
</div>

</template>
<script lang="ts">
import Nav from "./components/Nav.vue"
import footers from "./views/footers.vue"
import sakura from "./views/sakura.vue"
import {  useRoute,useRouter } from 'vue-router';
import {reactive,onMounted} from "vue";
export default {
  name:"App",
  components:{Nav,footers,sakura},
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
    // // 刷新后回到首页
    // const router = useRouter();
    // if (route.path !== "")
    //     router.replace("")

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

<style >
body {
  background: url('src/assets/background.png');
}
.main {
  padding-top: 61px;
}


</style>