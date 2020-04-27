<template>
  <div class="home">
    <my-form :model="userInfo"  width="500px">
        <my-form-item lable="登录">
            <my-input v-model="userInfo.userName" ></my-input>
        </my-form-item>
        <my-form-item lable="注册">
            <my-input v-model="userInfo.password" type="password"></my-input>
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
          userName:''
        }
      }
  },
  components: {
    myInput,
    myFormItem,
    myForm
  }
}
</script>
