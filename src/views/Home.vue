<template>
<div class="common-layout">
    <el-container>
      <div class="content">
       <el-header height="144px" >
         <el-avatar
         src="src/assets/8.png" :size="144"
         />
         <div class="info">
           <h1>liuris</h1>
           <p>一个热爱生活的人</p>
           <div>
             <a href=""><i class="element-icons el-icon-shejiaotubiao-39" ></i></a>
             <a href="https://github.com/pockays"><i class="element-icons el-icon-github"></i></a>
             <a href="https://steamcommunity.com/profiles/76561198893622129/"><i class="element-icons el-icon-steam"></i></a>
             <a href="https://space.bilibili.com/25327173"><i class="element-icons el-icon-icon_bilibili-circle"></i></a>
             <a href="https://music.163.com/#/user/home?id=269656258"><i class="element-icons el-icon-netease-cloud-music-fill"></i></a>
           </div>
        </div>
        </el-header>
       <el-main>Main</el-main>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
</div>
</template>
<script  lang="ts">

export default {
  name:"Home",
  components:{},
}
</script>

<style scoped lang="less">
.common-layout {
   width: 1200px;
   margin: 0 auto;
}
.content{
  padding: 48px 20px;
}

.el-header {
 display: flex;
}
.info{
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  width: 425px;
  padding-left: 32px;
  h1{
    font-size: 2em;
    color: pink;
  }
  p {
    color: skyblue;
  }
  a {
    margin-right: 13px;
    text-decoration: none;
    i {
    font-size: 2.3em;
   }
  }
  
}
.el-icon-shejiaotubiao-39{
  color: #12b7f5;
}
.el-icon-github{
  color: #44006f;
}

.el-icon-steam
{
  color: #144679;
}

.el-icon-icon_bilibili-circle{
  color: #f25d8e;
}
.el-icon-netease-cloud-music-fill
{
  color: #c20c0c;
}
</style>