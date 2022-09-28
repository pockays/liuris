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


        <el-main>
          <!-- 前四个栏子 -->
          <div class="news" v-for="item in $store.state.mana" :key="item.id">
           <div class="news-item" >
            <h3 class="title" :style="{'background':item.color}"><i class="element-icons title-icon"  :class="item.icon" ></i>{{ item.title }}</h3>
            <h3 class="more" :style="{'background':item.color}"><i class="element-icons el-icon-arrow-right"></i></h3>
           </div>
           <div class="news-body">
            <el-row :gutter="27">
              <el-col :span="item.span" v-for="lis in item.note" :key="lis.id" justify="space-between"> 
                <a href="" class="news-article">
                  <img :src="lis.image" alt="">
                  <h4>{{lis.word}}</h4>
                </a>
              </el-col>
            </el-row>
           </div>
          </div>
          <!-- 第五个栏子 -->
          <div class="news" >
              <div class="news-item" >
               <h3 class="title" style="background:#ff6347"><i class="element-icons title-icon el-icon-zixun"  ></i> 摆烂日记 </h3>
               <h3 class="more" style="background:#ff6347"><i class="element-icons el-icon-arrow-right"></i></h3>
              </div>
              <div class="news-body">
                <el-row :gutter="27">

                  <el-col :span="12">
                    <div class="note-box">
                      <p class="substance">
                       
                      </p>
                      <p class="date">
                        
                      </p>
                    </div>
                  </el-col>

                  <el-col :span="12">
                    <div class="note-box">
                      <p class="substance">
                        
                      </p>
                      <p class="date">
                        
                      </p>
                    </div>
                  </el-col>
                </el-row>
              </div>
          </div>
          <!-- 赞赏栏 -->
          <el-row :gutter="20" justify="center" class="thanks">
                  <el-col :span="5"><div class="donate"><a href="" class="thanks_btn"><i class="element-icons el-icon-yinhangka"></i></a><h2>给我点米</h2></div></el-col>
                  <el-col :span="5" ><div class="good"><button type="button"  class="thanks_btn" @click="good.value+=1,update_good_debounce()" ><i class="element-icons el-icon-aixin"></i></button><h2>{{ good.value }}</h2></div></el-col>
                  <el-col :span="5"><div class="live"><a href="" class="thanks_btn"><i class="element-icons el-icon-zhibo"></i></a><h2>直播间</h2></div></el-col>
          </el-row>
        </el-main>
      </div>

      
      <el-footer>
        <div class="wrap">
          <el-row justify="center">
            <el-col :span="8">
              <p>@ 2022 
                 <a href="http://localhost:8080/#/">liuris</a>
              </p>
            </el-col >
            <el-col :span="8" >
              <p class="footer-right">
                <a href="#">关于我</a>
                &nbsp;·&nbsp;
                <a href="#">时间轴</a>
                &nbsp;·&nbsp;
                <a href="#">加群讨论</a>
                &nbsp;·&nbsp;
                <a href="#">订阅日记</a>
              </p>
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
    <!-- 回到顶部 -->
    <el-backtop :bottom="100" right="30">
    <i class="element-icons el-icon-shangjiantou"></i>
  </el-backtop>
</div>
</template>
<script lang="ts">
import axios from "axios"
import {onMounted, reactive} from "vue"
import debounce from "../hook/debounce"
export default {
  name:"Home",
  components:{},
  setup(){
    let good = reactive({value:''})
    const get_good=()=>{
      axios.get('http://127.0.0.1/user').then(res=>{
        console.log(res.data)
       good.value = res.data[0].good
      }).catch(err=>{
        console.log("获取数据失败"+err)
      })
    }
    onMounted(get_good)


    const update_good=()=>{
      axios.get('http://127.0.0.1/update',{ params: {good:good.value}})
      .catch(err=>{
        console.log("更新数据失败"+err)
      })
    }
    const update_good_debounce=debounce(update_good,1000)

    return{good,update_good_debounce}
  }
}
</script>

<style scoped lang="less">
@keyframes heart-scale {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform:scale(.9);
  }
}

.content{
  width: 1200px;
   margin: 0 auto;
  padding: 48px 20px;
}
// 头部
.el-header {
 display: flex;
 margin-bottom: 5em;
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
// icon的颜色设置
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


// 主体部分
.el-main{
  margin-bottom: 5em;
  .news:nth-child(4) .news-article{
    height: 230px;
  }
  .news-item{
    display: flex;
    font-size: 18px;
    justify-content:space-between;
    margin-bottom: 20px;
  h3{
    color: #fff;
    font-weight: 700;
    position: relative;
    border-radius: 1em;
    .title-icon{
      position: absolute;
      top: -1px;
      left: 0px;
      font-size: 24px;
      padding: 0.9rem 0.9rem;
      border-radius: 1em;
      background: rgba(0, 0, 0, 0.1);
    }

    .el-icon-arrow-right{
      font-size: 22px;
    }
  }

  .title{
    padding: .9em 2em .9em 4em;
  }
  .more{
    padding: .8em 1em;
  }
}
.news-body
{
  margin-bottom: 80px;

  .news-article{
   display: block;
   height: 193.5px;
   overflow: hidden;
   border-radius: 1em;
   color: #fff;
   position:relative;
   img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   transition: transform .5s;
   }

   h4 {
    left: 0;
    right: 0;
    bottom: 0;
    padding: .75em;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: rgba(0,0,0,.5);
   }
  }
  .note-box {
    color: #fff;
    padding: 1em;
    height: 100%;
    height: 150px;
    position: relative;
    border-radius: 1em;
    background: #ff9987;
 }

 p {
  line-height: 1.8;
  overflow: hidden;
  text-overflow: ellipsis;
 }
 .substance{
  margin-bottom: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
 }
 .date{
  left: 1em;
  right: 1em;
  bottom: 1em;
  position: absolute;
  white-space: nowrap;
 }

 .news-article:hover {
  color:#ffc107;
  img{
    transform: scale(1.1);
  }
 }
} 
.thanks{
  text-align: center;
  .thanks_btn {
    color: #fff;
    width: 2.5em;
    height: 2.5em;
    font-size: 2.5em;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    line-height: 2.5;
    border-radius: 8em;
    border-color: transparent;
    background: #ffc107;
    .element-icons {
      font-size: inherit;
      display: inline-block
    }
    .el-icon-aixin {
      animation: heart-scale .5s ease-in-out infinite alternate;
    }
  }
  h2 {
    margin-top: .5em;
    font-weight: 700;
    color: #ffc107;
    font-size: 1.5em;
  }
  .good .thanks_btn {
    background: #ff6347;
  }
}
}

// 底部部分
.el-footer {
color: #fff;
position: relative;
padding: 10vw 0 2em;
a {
  color: inherit;
}
.footer-right {
  display: flex;
  justify-content:flex-end;
}
}
footer::before {
top: 0;
left: 0;
right: 0;
bottom: 0;
content: "";
z-index: -1;
position: absolute;
background: url(src/assets/footer.png) top/cover;
}

// 回到顶部
.el-backtop {
  width: 2.25em;
  height: 2.25em;
  border-radius: 66%;
  box-shadow: 0 0 10px rgba(0,0,0,.1), 0 5px 20px rgba(0,0,0,.2);
}
.el-icon-shangjiantou {

  font-size: 25px;
  font-weight: 700;
  color: #795548;
}
</style>