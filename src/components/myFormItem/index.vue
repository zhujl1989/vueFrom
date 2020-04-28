<template>
   <div>
       <div class="my_form_item">
           <label v-if="lable">{{lable}}</label>
           <slot></slot>           
       </div>
       <p class="error_mes" v-if="errorMessage">{{errorMessage}}</p>
   </div>
</template>

<script>
import Validator from 'async-validator'
export default {
   inject:['form'],
   props:['lable','prop'],
   data(){
       return{
           errorMessage:''
       }
   },
   created(){
      this.$on('validate',this.validate)
   },
   methods:{
      validate(){ 
          return new Promise(resolve=>{
                const rules = this.form.rules[this.prop];
                const value = this.form.model[this.prop];
                let  descriptRule = { [this.prop] : rules }
                let  validator = new Validator(descriptRule)
                validator.validate({ [this.prop] : value },errors=>{
                    if(errors){
                        //错误                 
                        this.errorMessage = errors[0].message;
                        resolve(false)
                    }else{
                        this.errorMessage = " ";
                        resolve(true)
                    }
                })
          })  
          
      }
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
        
    }
    .error_mes{
            color: red;
            text-align: left;
            margin-left: 56px;
    }
</style>