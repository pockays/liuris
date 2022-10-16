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
          <el-col :span="16" :push="1">
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
                style=" font-size: 16px;color: #795548"
              >
              <i class="element-icons" :class="l.icon" ></i>&nbsp;&nbsp;{{l.name}}
              </el-menuItem>
            </el-menu>
          </el-col>
          <!-- user -->
          <el-col :span="4" class="logout">
              <el-button type="primary" round size="large"  @click="handleLogout()">退出登录</el-button>
          </el-col>
          <el-col :span="1">
            <el-button type="warning"  circle class="skip" @click="switchskip()"><i class='element-icons el-icon-huanfu' /></el-button>
          </el-col>
        </el-row>
  </div>
 </div>

 <!-- 退出登录 -->
  
</div>
</template>
<script  lang="ts">
import {reactive} from "vue"
import{useRouter} from 'vue-router'
export default {
  name:"Nav",
  components:{},
  // watch: {
  //   $route: function (val: any, oldVal: any) {
  //     (this as any).routeChange(val, oldVal);
  //   },
  // },
  setup(){
      const state = reactive ({
      title: "liuris",
      list: [
        {
          index: "1",
          path: "/",
          name: "liuris",
          icon:"el-icon-shouye"
        },
        {
          index: "2",
          path: "/notes",
          name: "笔记",
          icon:"el-icon-youji"
        },
        {
          index: "3",
          path: "/album",
          name: "相册",
          icon:"el-icon-tupian"
        },
        {
          index: "4",
          path: "/video",
          name: "视频",
          icon:"el-icon-chakantiezishipin"
        },
        {
          index: "5",
          path: "/collection",
          name: "收藏",
          icon:"el-icon-shoucang1"
        }
      ],
      activeIndex: "1",
    });
    // 该代码块用于路由变化后导航栏的状态保持    注！！   该代码块与上面watch搭配使用，但是有个小bug即刷新后有一个从首页高亮到该页高亮的过程，后采用下面使用sessionStorage的方式
    // const routeChange = (val: any, oldVal: any) => {  
    //   for (let i = 0; i < state.list.length; i++) {
    //     const l = state.list[i];
    //     if (l.path === val.path) {
    //       state.activeIndex = i + 1 + "";
    //       state.title = l.name;
    //       break;
    //     }
    //   }
    // };

    // @ts-ignore
    state.activeIndex = window.sessionStorage.getItem('state.activeIndex')
    const handleSelect = (val: string, oldVal: string): void => {
      state.activeIndex = val;
      window.sessionStorage.setItem('state.activeIndex', state.activeIndex)
    };
    // 退出登录
    const router = useRouter()
    const handleLogout = ()=>{
      localStorage.removeItem('msToken')
      router.push('/login')
    }
    // 换肤
    let i=0
    const switchskip = ()=>{
      var myCars = ["src/assets/background.png","", "src/assets/2.png", "src/assets/3.jpg", "src/assets/4.jpg"];
      i++
      document.body.style.backgroundImage = 'url( '+ myCars[i] +' )'
      if (i == myCars.length - 1) {
          i = -1;
      }
    }

    return{handleLogout,state,handleSelect,switchskip}
  }
}

</script>

<style scoped lang="less">


.submit-btn {
  width: 100%;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 0 1em rgba(0, 0, 0, .1);
  .banner {
    width: 1600px;
    margin: 0 auto;
    .el-menu-demo{
      display: flex;
      justify-content:center;
      background-color:transparent;
      border-bottom: none;
    .el-menu-item {
      padding: 0 15px;
    }
    .el-menu-item:focus {
      background-color: transparent;
    }
    }
    .logout{
      display: flex;
      justify-content:flex-end;
    }
  }
  .logo{
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }

.el-icon-huanfu {
  color: #74d6fe;
}

}

</style>