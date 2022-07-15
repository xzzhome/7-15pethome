<template>
<div>
  <el-table :data="tableData" border stripe style="width: 100%">

    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="id" label="编号" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="phone" label="电话" width="180"></el-table-column>
    <el-table-column prop="email" label="邮件" width="230"></el-table-column>
    <el-table-column prop="address" label="地址" width="300"></el-table-column>
    <el-table-column prop="createTime" label="日期" width="180"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
<!--current-change 页面改变时会触发
    totals 总数量  data 一个页面展示的数据  后端传过来的
    current-page 分页参数：当前页
    page-size 分页参数：每页个数-->
  <el-pagination background align="right" layout="prev, pager, next"
    @current-change="pageChange"
    :total="totals"
    :current-page="currentPage"
    :page-size="pageSize">
  </el-pagination>
</div>
</template>

<script>
export default {
  
  data(){
    return {
      tableData: [], //一开始是没有数据的，通过方法给tableData赋值，this.tableData
      totals:0,
      currentPage:1,
      pageSize:5
    }
  },
  methods:{
    //查找全部数据的函数
    findAllUsers(){
      //URL请求路径，data前端发送的数据，result后端传过来的数据，then成功，catch失败
      this.$http.post("/user/list", {"currentPage":this.currentPage,"pageSize":this.pageSize}).then((result)=>{
        //result数据里包含各种各样的东西，真正的数据存在result的data模块
        this.tableData = result.data.data;
        this.totals = result.data.totals;
      }).catch((result)=>{
        alert(result);
      })
    },
    //页面改变时的函数，除了当前页发生变化，总数量和每页个数都不变
    pageChange(currentPage){
      //获取当前页
      this.currentPage = currentPage;
      //重新发送请求
      this.findAllUsers();
    }
  },
  mounted(){
    this.findAllUsers()
  }
}
</script>

<style scoped>

</style>
