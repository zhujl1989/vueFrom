<template>
  <div>
    <my-list :requestData="requestData" v-slot="item">
      <!--列表样式-->
        <div>
            <ul>
                <li>【{{item.bhgxwlxName}}】&nbsp;&nbsp;&nbsp;&nbsp;{{item.bhgxwmc}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.updateTime}}</li>
            </ul>
        </div>
    </my-list>
  </div>
</template>
<script>
import myList from "@/components/myList/index";
export default {
  data() {
    return {
      requestData: {
        url:
          "https://dev.lingwww.com/riskportal-admin//news/newsWgalInfoSolr/queryJdalPageList",
        queryParam: {
          issueId: "51a6d76f8eddf507d44524c9745665cc",
          title2Id: "0cf3df4c8fbf46acb6a25e9fe5110b9b",
          bhgxwmc: "一日内重复治疗",
        },
      },
    };
  },
  components:{
    myList
  },
};
</script>