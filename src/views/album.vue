<template>
<el-container>
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
    <el-menu-item index="1" router="/album?year=2022" key="1" @click="routeChange('2022')" @mouseenter="albumNavHover" @mouseleave="albumNavLeave">2022</el-menu-item>
    <el-menu-item index="2" router="/album?year=2021" key="2" @click="routeChange('2021')" @mouseenter="albumNavHover" @mouseleave="albumNavLeave">2021</el-menu-item>
    <el-menu-item index="3" router="/album?year=2020" key="3" @click="routeChange('2020')" @mouseenter="albumNavHover" @mouseleave="albumNavLeave">2020</el-menu-item>
    <el-menu-item index="4" router="/album?year=2019" key="4" @click="routeChange('2019')" @mouseenter="albumNavHover" @mouseleave="albumNavLeave">2019</el-menu-item>
    <el-menu-item index="5" router="/album?year=2018" key="5" @click="routeChange('2018')" @mouseenter="albumNavHover" @mouseleave="albumNavLeave">2018</el-menu-item>
  </el-menu>
  </el-header>
  
  <el-main v-if="items_year=='2022'">
    <el-row  >
    <el-col v-for="items_album in $store.state.album[0].content"  :key="items_album.id" :span="6">
    <div class="image-items" >
    <el-image
      style="width: 260px; height: 200px;"
      :src="items_album.url"
      :preview-src-list="$store.state.album[0].srcList"
      :initial-index="items_album.id"
      fit="cover"
      lazy
      /> 
      <p>芝士mana</p>
    </div>
  </el-col>
  </el-row>
  </el-main>

  <el-main v-if="items_year=='2021'">
    <el-row justify="space-evenly" >
    <el-col v-for="items_album in $store.state.album[1].content"  :key="items_album.id" :span="6">
    <el-image
      style="width: 260px; height: 200px;"
      :src="items_album.url"
      :preview-src-list="$store.state.album[1].srcList"
      :initial-index="items_album.id"
      fit="cover"
      lazy
    />
  </el-col>
  </el-row>
  </el-main>

  <el-main v-if="items_year=='2020'">
    <el-row justify="space-evenly" >
    <el-col v-for="items_album in $store.state.album[2].content"  :key="items_album.id" :span="6">
    <el-image
      style="width: 260px; height: 200px;"
      :src="items_album.url"
      :preview-src-list="$store.state.album[2].srcList"
      :initial-index="items_album.id"
      fit="cover"
      lazy
    />
  </el-col>
  </el-row>
  </el-main>

  <el-main v-if="items_year=='2019'">
    <el-row justify="space-evenly" >
    <el-col v-for="items_album in $store.state.album[3].content"  :key="items_album.id" :span="6">
    <el-image
      style="width: 260px; height: 200px;"
      :src="items_album.url"
      :preview-src-list="$store.state.album[3].srcList"
      :initial-index="items_album.id"
      fit="cover"
      lazy
    />
  </el-col>
  </el-row>
  </el-main>

  <el-main v-if="items_year=='2018'">
    <el-row justify="space-evenly" >
    <el-col v-for="items_album in $store.state.album[4].content"  :key="items_album.id" :span="6">
    <el-image
      style="width: 260px; height: 200px;"
      :src="items_album.url"
      :preview-src-list="$store.state.album[4].srcList"
      :initial-index="items_album.id"
      fit="cover"
      lazy
    />
  </el-col>
  </el-row>
  </el-main>

</el-container>
</template>

<script lang="ts">
import{useRouter} from 'vue-router'
import {ref} from "vue"
export default {
    name:"album",
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
        router.push({path:'/album',query:{year:year}})       
      }  
      // 鼠标经过导航栏选项变黄
      const albumNavHover = (event:Event)=>{
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
      const albumNavLeave = (event:Event)=>{
        var items =document.querySelectorAll('.el-menu-demo1 .el-menu-item')
        for(var i=0;i<items.length;i++){
          (items[i] as HTMLElement).style.backgroundColor='transparent'
        }
        // @ts-ignore 
        (items[activeIndex.value-1]as HTMLElement).style.backgroundColor='#9bedff'
        // @ts-ignore 
        event.target.style.color='#f8cedd'
      }
      return {activeIndex,handleSelect,routeChange,albumNavHover,albumNavLeave,items_year}
    }
}
</script>

<style lang="less" scoped>
.el-container{
  position: relative;
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
        background-color: #9bedff;
        color: rgb(249, 159, 174)!important;
      }
    } 
  }
  .el-main{
    // 查看图片时的样式
    :deep(.el-image-viewer__img) {
     max-height: 80%!important;
     max-width: 80%!important;
    }
    .el-col{
      position: relative;
      margin-bottom: 20px;
      .image-items{
        overflow: hidden;
        position: relative;
        width: 260px;
        height: 200px;
        border-radius: 1em;
      p{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 30px;
        line-height: 30px;
        width: 100%;
        color: #fff;
        text-align: center;
        background: rgba(0, 0, 0, 0.283);
        transition:bottom .3s;
     } 
    }
    .image-items:hover p {
      bottom: -30px;
     }
  }
}
}
</style>