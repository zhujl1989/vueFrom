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
   props:{
      width:{
        type:String,
        default:'300px'
      },
      model:{
         type:Object,
         default:{}
      }
   },
   mounted(){      
        document.querySelector(".my_form_box").style.width = this.width;
   }
}
</script>

<style>

</style>