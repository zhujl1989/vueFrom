<template>
    <div>
       <my-totip :trigger="'hover'" :width='300'>
           <p style="margin-top:100px">鼠标经过</p>
           <template slot="content">
               <p>提示内容</p>
           </template>           
       </my-totip>
    </div>
</template>
<script>
import myTotip from "@/components/myTotip/index";
export default {
    data(){
        return{

        }
    },
    components:{
        myTotip
    }
}
</script>