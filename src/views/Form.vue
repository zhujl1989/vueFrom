<template>
  <div class="home">
    <my-form :model="userInfo" :rules="rules" width="500px" ref="loginform">
        <my-form-item lable="登录" prop="username">
            <my-input v-model="userInfo.username" ></my-input>
        </my-form-item>
        <my-form-item lable="注册" prop="password">
            <my-input v-model="userInfo.password" type="password"></my-input>
        </my-form-item>
        <my-form-item>
            <button @click="submitForm('loginForm')">提交</button>
        </my-form-item>
    </my-form>
  </div>
</template>
<script>
import myForm from '@/components/myForm/index'
import myFormItem from '@/components/myFormItem/index'
import myInput from '@/components/myInput/index'
export default {
  name: 'home',
  data(){
      return{
        userInfo:{
          username:'',
          password:''
        },
        rules:{
          username: [{ required: true, message: "请输入用户名" }],
          password: [{ required: true, message: "请输入密码" }]
        }
      }
  },
  components: {
    myInput,
    myFormItem,
    myForm
  },
  methods:{
    submitForm(form){
      
      this.$refs['loginform'].validate( async vaild=>{
            if(vaild){
              console.log("验证成功")
            }else{
              console.log("验证失败")
            }
      })
    }
  }
}
</script>
