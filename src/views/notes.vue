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
    text-color="#f8cedd"
  >
    <el-menu-item index="1" router="/notes?year=2022" key="1" @click="routeChange('2022')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2022</el-menu-item>
    <el-menu-item index="2" router="/notes?year=2021" key="2" @click="routeChange('2021')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2021</el-menu-item>
    <el-menu-item index="3" router="/notes?year=2020" key="3" @click="routeChange('2020')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2020</el-menu-item>
    <el-menu-item index="4" router="/notes?year=2019" key="4" @click="routeChange('2019')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2019</el-menu-item>
    <el-menu-item index="5" router="/notes?year=2018" key="5" @click="routeChange('2018')" @mouseenter="notesNavHover" @mouseleave="notesNavLeave">2018</el-menu-item>
  </el-menu>
</el-header>

<el-main v-if="items_year=='2022'">
  <div  class="notes_items" v-for="notes_items in $store.state.article[0].diary" :key="notes_items.id" >
    <h1>{{notes_items.head}}</h1>
    <div class="notes_content">
    <p v-for="p_items in notes_items.content" :key="p_items" >{{p_items}}</p>
    </div>
    <el-row>
      <el-col :span="2"><i class="element-icons" :class="notes_items.weather" ></i>&nbsp;{{notes_items.weather_detail}}</el-col>
      <el-col :span="2" ><i class="element-icons" :class="notes_items.mood" ></i>&nbsp;{{notes_items.mood_detail}}</el-col>
      <el-col :span="1" :offset="19" class="like"><i class="element-icons el-icon-dianzan" @click="notes_items.like++" ></i>&nbsp;{{notes_items.like}}</el-col>
    </el-row>
  </div>
</el-main>

<el-main v-if="items_year=='2021'">
  <div  class="notes_items" v-for="notes_items in $store.state.article[1].diary" :key="notes_items.id" >
    <h1>{{notes_items.head}}</h1>
    <div class="notes_content">
    <p v-for="p_items in notes_items.content" :key="p_items">{{p_items}}</p>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
  </div>

</el-main>
<el-main v-if="items_year=='2020'">
  <div  class="notes_items" v-for="notes_items in $store.state.article[2].diary" :key="notes_items.id" >
    <h1>{{notes_items.head}}</h1>
    <div class="notes_content">
    <p v-for="p_items in notes_items.content" :key="p_items">{{p_items}}</p>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
  </div>

</el-main>
<el-main v-if="items_year=='2019'">
  <div  class="notes_items" v-for="notes_items in $store.state.article[3].diary" :key="notes_items.id" >
    <h1>{{notes_items.head}}</h1>
    <div class="notes_content">
    <p v-for="p_items in notes_items.content" :key="p_items">{{p_items}}</p>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
  </div>

</el-main>
<el-main v-if="items_year=='2018'">
  <div  class="notes_items" v-for="notes_items in $store.state.article[4].diary" :key="notes_items.id" >
    <h1>{{notes_items.head}}</h1>
    <div class="notes_content">
    <p v-for="p_items in notes_items.content" :key="p_items">{{p_items}}</p>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
  </div>

</el-main>

</el-container>

</template>

<script lang="ts">

import{useRouter} from 'vue-router'
import {ref} from "vue"

export default {
    name:"notes",
    components:{},
    setup(){
      const activeIndex = ref('1')
      const items_year =ref('2022')
      // @ts-ignore    
      activeIndex.value = window.sessionStorage.getItem('activeIndex')
      const handleSelect = (val: string, oldVal: string): void => {
      activeIndex.value = val;
      window.sessionStorage.setItem('activeIndex', activeIndex.value)
    }
    // 动态路由导航(query参数版)
      const router = useRouter()
      const routeChange= (year:string)=>{ 
        items_year.value=year
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
        (items[activeIndex.value-1]as HTMLElement).style.backgroundColor='#9bedff'
        // @ts-ignore 
        event.target.style.color='#f8cedd'
      }

    
    return {activeIndex,handleSelect,routeChange,notesNavHover,notesNavLeave,items_year}
    }
}
</script>

<style lang="less" scoped>
.el-container {
  position: relative;
  width: 900px;
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
        background-color: #9bedff;
        color: rgb(249, 159, 174)!important;
      }
    } 
  }
  .el-main{
    --el-main-padding: 38px;
    letter-spacing: 0.05em;
    line-height: 31px;
    h1 {
      border-left: 2px solid #ffc107;
      font-size: 1.4em;
      padding-left: .75em;
      margin-bottom: 16px;
      color: pink;
    }
    .notes_content{
    color: #67492e;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: .5em;
    background-color: #fff;
    box-shadow: 0 0 1em rgba(0,0,0,.05);
    }
    p {
      text-indent:2em;
      margin-bottom: 1em;
    }
    p:last-child {
    margin-bottom: 0;
    }
 
      color: #888;
      font-size: 1.1em;
      
      .element-icons{
        font-size: 1.1em;
        vertical-align:-0.9px;
      }
      .like{
      display: flex;
      justify-content:flex-end;
      }

    }

  }


</style>