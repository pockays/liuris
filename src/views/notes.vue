<template>

<el-container>
<!-- nav -->
<el-header>
<el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="false"
  >
    <el-menu-item index="1" router="/notes?year=2022" key="1" @click="routeChange('2022')">2022</el-menu-item>
    <el-menu-item index="2" router="/notes?year=2021" key="2" @click="routeChange('2021')">2021</el-menu-item>
    <el-menu-item index="3" router="/notes?year=2020" key="3" @click="routeChange('2020')">2020</el-menu-item>
    <el-menu-item index="4" router="/notes?year=2019" key="4" @click="routeChange('2019')">2019</el-menu-item>
    <el-menu-item index="5" router="/notes?year=2018" key="5" @click="routeChange('2018')">2018</el-menu-item>
  </el-menu>
</el-header>

<el-main>

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
      const handleSelect = (val: string, oldVal: string): void => {
      activeIndex.value = val;
    }
      const router = useRouter()
      const routeChange= (year:string)=>{ 
        router.push({path:'/notes',query:{year:year}})       
      }
    return {activeIndex,handleSelect,routeChange}
    }
}
</script>

<style lang="less" scoped>
.el-container {
  width: 1200px;
  margin: 0 auto;
  .el-header{
    display: flex;
    justify-content:center;
  }
}
</style>