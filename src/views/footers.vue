<template>
  <!-- 底部 -->
  <el-footer>
        <div class="wrap">
          <el-row justify="center" >
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
</template>

<script>
export default {
    name:"footers",
    components:{},
}
</script>

<style lang="less" scoped>
/* 底部部分 */
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
.el-row{
  margin: -15px 0;
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
</style>