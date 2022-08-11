<template>
<div>
 <div class="nav">
 <!-- banner -->
  <div class="banner">
   <el-row :gutter="20">
          <!-- logo -->
          <el-col :span="3">
            <router-link to="/">
              <img
                class="logo"
                src="../assets/8.png"
                alt="liuris"
              >
            </router-link>
          </el-col>
          <!-- nav -->
          <el-col :span="16">
            <el-menu
              :router="true"
              :default-active="state.activeIndex"
              active-text-color="#409eff"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menuItem
                :route="l.path"
                :index="l.index"
                v-for="l in state.list"
                :key="l.index"
              >
                {{l.name}}
              </el-menuItem>
            </el-menu>
          </el-col>
          <!-- user -->
          <el-col :span="5"></el-col>
        </el-row>
        
  </div>
 </div>

 <!-- 退出登录 -->
  <el-form label-width="100px
 " class="container">
    <el-form-item>
      <el-button
      @click="handleLogout()"
        type="primary"
        class="submit-btn"
        >退出登录</el-button
      >
    </el-form-item>
  </el-form>
</div>
</template>
<script  lang="ts">
import {reactive} from "vue";
import{useRouter} from 'vue-router'
export default {
  name:"Nav",
  components:{},
  setup(){
      const state = reactive ({
      title: "liuris",
      list: [
        {
          index: "1",
          path: "/",
          name: "liuris",
        },
        {
          index: "2",
          path: "/notes",
          name: "笔记",
        },
        {
          index: "3",
          path: "/album",
          name: "相册",
        },
        {
          index: "4",
          path: "/video",
          name: "视频",
        },
        {
          index: "5",
          path: "/Collection",
          name: "收藏",
        }
      ],
      activeIndex: "1",
    });

    const routeChange = (val: any, oldVal: any) => {
      for (let i = 0; i < state.list.length; i++) {
        const l = state.list[i];
        if (l.path === val.path) {
          state.activeIndex = i + 1 + "";
          state.title = l.name;
          break;
        }
      }
    };
    const handleSelect = (val: string, oldVal: string): void => {
      state.activeIndex = val;
    };

    const router = useRouter()
    const handleLogout = ()=>{
      localStorage.removeItem('msToken')
      router.push('/login')
    }
    return{handleLogout,state,routeChange,handleSelect}
  }
}

</script>

<style scoped lang="less">
.banner{
  width: 1200px;
  margin: 0 auto;
}

.container{
    width:50%;
    margin:200px auto
}

.submit-btn {
  width: 100%;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .banner {
    width: 1200px;
    margin: 0 auto;
  }
  .logo {
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }
}

</style>