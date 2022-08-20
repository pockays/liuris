<template>
<div>
 <div class="nav">
 <!-- banner -->
  <div class="banner">
   <el-row :gutter="20" align="middle" justify="space-evenly">
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
          <el-col :span="16" >
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
                style="margin:0 5px"
              >
                {{l.name}}
              </el-menuItem>
            </el-menu>
          </el-col>
          <!-- user -->
          <el-col :span="3" class="logout">
              <el-button type="primary" round size="large" >退出登录</el-button>
          </el-col>
        </el-row>
        
  </div>
 </div>

 <!-- 退出登录 -->
  
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
          path: "/collection",
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
    width: 1500px;
    margin: 0 auto;
    .el-menu-demo{
      display: flex;
      justify-content:center;
    }
    .logout{
      display: flex;
      justify-content:flex-end;
    }
  }
  .logo {
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }
}

</style>