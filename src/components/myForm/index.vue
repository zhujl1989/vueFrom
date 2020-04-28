<template>
   <div class="myform">
      <div class="my_form_box">
         <slot></slot>
      </div>       
   </div>
</template>

<script>
export default {
   name:'myform',
   provide(){
       return{
          form:this,
       }
   },
   props:{
      width:{
        type:String,
        default:'300px'
      },
      model:{
         type:Object,
        
      },
      rules:{
         type:Object
      }
   },
   mounted(){      
        document.querySelector(".my_form_box").style.width = this.width;
   }
}
</script>

<style>

</style>