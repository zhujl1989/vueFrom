<template>
  <div>
    <my-tab :list="list" @click="menuClick"></my-tab>
  </div>
</template>
<script>
import myTab from "@/components/myTab/index";
export default {
    data(){
        return{
         list: [
        {
          id: 1,
          menu: '导航菜单一',
          child: [
            {
              id: 101,
              menu: '导航菜单一01',
              url: 'menu01'
            },
            {
              id: 102,
              menu: '导航菜单一02',
              url: 'menu02'
            },
            {
              id: 103,
              menu: '导航菜单一03',
              url: 'menu03'
            }
          ]
        },
        {
          id: 2,
          menu: '导航菜单二',
          child: [
            {
              id: 101,
              menu: '导航菜单一02',
              url: 'menu02'
            },
            {
              id: 102,
              menu: '导航菜单一03',
              url: 'menu03'
            },
            {
              id: 103,
              menu: '导航菜单一04',
              url: 'menu05'
            }
          ]
        }
      ]
         }
    },
    components:{
        myTab
    },
    methods:{
        menuClick(index,childeItem,item){
            
        }
    }
}
</script>