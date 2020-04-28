<template>
    <div class="inputBox">
        <!--v-model要实现值得绑定，实现input事件-->
        <input :type="type" :value="value" @input="editInput"/>
    </div>
</template>

<script>
export default {
  props:{
      type:{
          type:String,
          default:'text'
      },
      value:{
          type:String,
          default:''
      }
  },
  methods:{
      editInput(e){
          console.log(4)
          this.$emit('input',e.target.value);
          this.$parent.$emit("validate");
      }
  }
}
</script>

<style lang="less" scoped>
  .inputBox{
      width: 100%;
      input{
          padding-left: 10px;
          padding-right: 10px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          border: 1px solid royalblue;
          border-radius: 3px;
      }
      input:focus{
          outline: none;
          border-color: royalblue;
      }
  }
</style>>
  
