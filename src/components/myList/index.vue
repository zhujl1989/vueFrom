<template>
  <div>
    <div v-for="item in currentList">
      <slot v-bind="item"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "list",
  props: {
    requestData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      queryData:{
        pageNo:1,
        pageSize:20
      },
      currentList:[],
      total:null
    };
  },
  mounted() {
   this.getList();
   this.addWindowScroll()
  },
  methods: {
    getList() {
      let { url, queryParam } = this.requestData;
      this.queryData = Object.assign(this.queryData,queryParam)
      this.request(url,this.queryData).then(res=>{
        let response = JSON.parse(res)
          if(response.success){
            this.currentList = this.currentList.concat(response.result.records)
            this.total = response.result.total
            console.log(this.currentList)
          }
      })    

    },
    request(url,queryData) { 
      let queryParam = ''
      let arr = Object.values(queryData)
      let keys = Object.keys(queryData)
      keys.forEach((e,i)=>{
         queryParam += `${e}=${arr[i]}&`
      })
      let xmlHttp = new XMLHttpRequest();         
      return new Promise((resolve, reject) => { 
         xmlHttp.open("get", `${url}?${queryParam}`, true);    
         xmlHttp.setRequestHeader('X-Access-Token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTAzMTI2NzQsInVzZXJuYW1lIjoiemh1amwifQ.E9V0VcdqdalFhV3e98aaFVznzZ2dKMO4-_HaupC-ro8')
        xmlHttp.send(queryData);   
        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status==200 ) { 
            resolve(xmlHttp.responseText);  
          }
        };
               
      
      });
      
    },
      addWindowScroll() {
      let _this = this

      window.onscroll = function () {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop      
        //变量windowHeight是可视区的高度
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        //变量scrollHeight是滚动条的总高度
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight
        //滚动条到底部的条件
        if (scrollTop + windowHeight >= scrollHeight - 10) {
          //到了这个就可以进行业务逻辑加载后台数据了
          _this.isBottom = true

          if (_this.total <= _this.queryData.pageNo * 20) {
            return
          }        
          _this.queryData.pageNo = _this.queryData.pageNo + 1          
          _this.getList()
        } else {
          _this.isBottom = false
         
        }
      }
    },
  },
};
</script>