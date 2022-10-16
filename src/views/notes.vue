<template>

<el-container>
<!-- nav -->
<el-header>
<el-menu
    :default-active="activeIndex"
    class="el-menu-demo1"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="false"
    background-color="transparent"
    text-color="red"
  >
    <el-menu-item index="1" router="/notes?year=2022" key="1" @click="routeChange('2022')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2022</el-menu-item>
    <el-menu-item index="2" router="/notes?year=2021" key="2" @click="routeChange('2021')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2021</el-menu-item>
    <el-menu-item index="3" router="/notes?year=2020" key="3" @click="routeChange('2020')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2020</el-menu-item>
    <el-menu-item index="4" router="/notes?year=2019" key="4" @click="routeChange('2019')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2019</el-menu-item>
    <el-menu-item index="5" router="/notes?year=2018" key="5" @click="routeChange('2018')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2018</el-menu-item>
  </el-menu>
</el-header>

<el-main>

</el-main>

</el-container>

</template>

<script lang="ts">
import{useRouter} from 'vue-router'
import {ref,getCurrentInstance} from "vue"
export default {
    name:"notes",
    components:{},
    setup(){
      const {proxy} = getCurrentInstance() as any
      const activeIndex = ref('1')
      // @ts-ignore    
      activeIndex.value = window.sessionStorage.getItem('activeIndex')
      const handleSelect = (val: string, oldVal: string): void => {
      activeIndex.value = val;
      window.sessionStorage.setItem('activeIndex', activeIndex.value)
    }
    // 动态路由导航(query参数版)
      const router = useRouter()
      const routeChange= (year:string)=>{ 
        router.push({path:'/notes',query:{year:year}})       
      }  
      // 鼠标经过导航栏选项变黄
      const notesNavHover = (event:Event)=>{
        var items =document.querySelectorAll('.el-menu-demo1 .el-menu-item')
        for(var i=0;i<items.length;i++){
          (items[i] as HTMLElement).style.backgroundColor='transparent'
        }
         // @ts-ignore  
        event.target.style.color='#fff'
        // @ts-ignore  
        event.target.style.backgroundColor="#ffc107"
      }
      // 鼠标离开导航栏恢复原样
      const notesNavLeave = (event:Event)=>{
        var items =document.querySelectorAll('.el-menu-demo1 .el-menu-item')
        for(var i=0;i<items.length;i++){
          (items[i] as HTMLElement).style.backgroundColor='transparent'
          
        }
        // @ts-ignore 
        (items[activeIndex.value-1]as HTMLElement).style.backgroundColor='#9aff47'
        // @ts-ignore 
        event.target.style.color='red'
      }
    return {activeIndex,handleSelect,routeChange,notesNavHover,notesNavLeave}
    }
}
</script>

<style lang="less" scoped>
.el-container {
  width: 1200px;
  margin: 0 auto;
  padding: 48px 20px;
  .el-header{
    display: flex;
    justify-content:center;
    height: 40px;
    .el-menu-demo1{
      border: none;
      .el-menu-item{
        border-radius: 2em;
        border: none;
      }
      .is-active{
        background-color: #9aff47;
      }
    }
    
  }
}

</style>