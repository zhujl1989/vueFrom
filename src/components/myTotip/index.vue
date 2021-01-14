<template>
    <div style="position:relative">
        <span ref="tigger" class="mouseContent" :style="{width:width+'px'}">
            <slot></slot>
        </span>
        <div class="tooltip" ref="popover" v-show="isShow"> 
            <div class="arrow"></div>
            <div class="contentBox">
                <slot name="content" v-html="content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'tooltip',
    props:{
     tigger:{
         type:String,
         default:'hover'
     },
     content:String,
     width:{
         type:Number,
         default:200
     },
    },
    data(){
        return{
            isShow:false
        }
    },
    mounted(){
        const trigger = this.$refs.tigger
        const popover = this.$refs.popover
        if(this.tigger == "hover"){
            document.querySelector(".mouseContent").addEventListener('mouseenter',()=>{
               this.isShow = true              
            })
             document.querySelector(".mouseContent").addEventListener('mouseleave',()=>{
                this.isShow = false               
            })
        }

    },
    beforeDestroy(){
        document.querySelector(".mouseContent").removeEventListener('mouseleave')
        document.querySelector(".mouseContent").removeEventListener('mouseenter')
    }
}
</script>
<style scoped>
.tooltip{
    /* display: none; */
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    left: 48%;
    top: -60px;
}
/* .mouseContent>p{
    width: 100%;
    word-break:break-all;
    white-space: nowrap;
	display:-webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical;
	overflow:hidden;    
    text-overflow: ellipsis
} */
.arrow{
    width: 0;
    height: 0;
    border: 10px solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.6);
    transform: rotate(180deg);
    -webkit-transform:rotate(180deg);
    position: absolute;
    bottom: -20px;
    left: 50%;
}
</style>