<template>
   <div>
       <div class="my_form_item">
           <label v-if="lable">{{lable}}</label>
           <slot></slot>
           <p class="error_mes" v-if="errorMessage">{{errorMessage}}</p>
       </div>

   </div>
</template>

<script>
import validate from 'async-validator'
export default {
   props:{
       lable:{
           type:String,
           default:''
       }
   },
   data(){
       return{
           errorMessage:''
       }
   },
   methods:{

   }
}
</script>

<style lang="less" scoped>
    .my_form_item{
        width: 100%;
        display: flex;
        justify-content: start;
        margin-top: 16px;
        label{
            margin-right: 10px;
            width: 48px;
            line-height: 40px;
            display: inline-block;
        }
        .error_mes{
            color: red;
        }
    }
</style>