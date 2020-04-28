# vueFrom
vue登录注册表单组件（带验证功能）

1、安转验证器并引入组件
npm i async-validator -S;
import myForm from '@/components/myForm/index'
import myFormItem from '@/components/myFormItem/index'
import myInput from '@/components/myInput/index'
2、注册组件
components: {
    myInput,
    myFormItem,
    myForm
}
3、绑定数据和验证器
4、调用登录验证方法
  this.$refs[form].validate( async vaild=>{
            if(vaild){
              console.log("验证成功")
            }else{
              console.log("验证失败")
            }
  })
