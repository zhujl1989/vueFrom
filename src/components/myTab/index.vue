<template>
    <div class="menuBox">
        <div class="tabBox">
             <ul>
                 <li class="subMenu" v-for="(item,index) in list" :key="item.id">
                     <span :class="current==index?'isActive':''">{{item.menu}}</span>
                     <ul class="childMenu">
                         <li v-for="childItem in item.child" :key="childItem.id" @click="menuClick(index, childItem, item)">
                             <span>{{childItem.menu}}</span>
                         </li>
                     </ul>
                 </li>
             </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
       list:{
           type:Array,
           default:[],
       }
    },
    data(){
        return{
            current:0
        }
    },
    methods:{
        menuClick (index, childItem, item) {       
        this.current = index; // 设置点击后的激活状态
        this.$emit('click', index, childItem, item);
      }
    }
}
</script>

<style lang="less" scoped>
  *{margin:0;padding:0;}
  li{list-style:none;}
  .menuBox{
    height:60px;
    width:100%;
    background:#fff;
    box-shadow: 0 2px 5px #ccc;
    .subMenu{
      float:left;
      width:150px;
      >span{
        display:block;
        height:58px;
        line-height:60px;
        text-align:center;
        border-bottom:2px solid #fff; 
      }
      span.isActive{
        border-bottom:2px solid blue;
      }
      .childMenu{
        display:none;
        li{
          display:block;
          height:60px;
          line-height:60px;
          text-align:center;
          background:#fff;
          span{
            display:block;
            height:58px;
            border-bottom:2px solid #fff;
            &:hover{
              border-bottom:2px solid blue;
              cursor:defualt;
            }
          }
        }
      }
      &:hover{
        >span{
          border-bottom:2px solid blue;
          cursor:defualt;
        }
        .childMenu{
          display:block;
        }
      }
    }
  }
</style>
