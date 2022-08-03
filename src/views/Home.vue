<template>
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
</template>

<script >
import{useRouter} from 'vue-router'
export default {
  name:"Home",
  components:{},
  setup(){
    const router = useRouter()
    const handleLogout = ()=>{
      localStorage.removeItem('msToken')
      router.push('/login')
    }
    return{handleLogout}
  }
}

</script>

<style scoped>
.container{
    width:50%;
    margin:200px auto
}

.submit-btn {
  width: 100%;
}
</style>