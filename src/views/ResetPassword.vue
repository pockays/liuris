<template>
  <el-form label-width="100px
" class="container">
    <el-form-item  label="密码" >
      <el-input type="password" v-model="password" placeholder="Enter Password..."></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
      @click="handleResetPassword()"
        type="primary"
        class="submit-btn"
        >重置</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts"> 
import {ref,getCurrentInstance} from "vue"
import{useRouter,useRoute} from 'vue-router'
export default {
 setup() {
    const{proxy} =getCurrentInstance() as any
    const password = ref<string>("")
    const router =useRouter()
    const route =useRoute()
  const handleResetPassword =async ()=>{
    if(password.value){
    const res= await proxy.$axios.post("/api/v1/auth/resetpassword"+route.params.id,{
        password:password.value
        })
    if(res.data.success){
        router.push("/")
      }
    }
  }
   return {handleResetPassword,password}
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