<template>
  <div class="home">
    <my-form :model="userInfo" :rules="rules" width="500px" ref="loginform">
        <my-form-item lable="账号" prop="username">
            <my-input v-model="userInfo.username" ></my-input>
        </my-form-item>
        <my-form-item lable="密码" prop="password">
            <my-input v-model="userInfo.password" type="password"></my-input>
        </my-form-item>
        <my-form-item>
            <div class="footer">
               <button @click="submitForm('loginform')" class="btn">提交</button>
            </div>
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
      this.$refs[form].validate( async vaild=>{
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
<style>
  .footer{
    flex: 1;
    text-align: center;
  }
  .btn{
      color: #fff;
      background-color: #1989fa;
      border: 1px solid #1989fa;
      line-height: 40px;
      padding: 0 30px;
      border-radius: 3px;
  }    
</style>