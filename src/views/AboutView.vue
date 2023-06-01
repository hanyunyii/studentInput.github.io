<template>
  <div class="list">
    <div class="top">
      <div style="margin-top: 15px;">
        <span style="color: red;float: left">注意：该平台只能用于教学警示网络安全使用</span>

        <el-input placeholder="请输入姓名" v-model="query.query" class="input-with-select"
                  style="width: 30%;min-width: 150px;float: right">
          <el-button slot="append" icon="el-icon-search" @click="getStudentList"></el-button>

        </el-input>
      </div>
      <el-table
          :header-cell-style="{background:'#000000',color:'orange',height:'100px'}"
          :data="studentList"
          border
          class="table"
          style="width: 100%;font-size: 2rem;font-weight: bold;">
        <el-table-column
            prop="id"
            label="编号"
            >
        </el-table-column>
        <el-table-column
            prop="createTime"
            label="添加时间"
           >
        </el-table-column>
        <el-table-column
            label="姓名"
            prop="name"
        >
        </el-table-column>
        <el-table-column
            label="身份证"
            prop="idCard"
        >
        </el-table-column>
        <el-table-column
            label="手机号"
            prop="phone"
        >
        </el-table-column>
      </el-table>
      <el-pagination
          background
          layout="prev, pager, next"
          :total="query.total"
          :page-size="query.limit"
          :current-page="query.page"
          @current-change="pageChange"
          @size-change="sizeChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>


import {getStudent} from "@/api/studentApi";

export default {
  name: "List",

  data() {
    return {
      rowClassName:'warning-row',
      query: {
        page: 1,
        limit: 10,
        query: '',
        total: 0
      },
      name: '',
      addModel: false,
      showSchedule: false,
      renovationId: 0,
      studentList: [],

    }
  },
  methods: {
    intervalGetStudentList(){
      setInterval(()=>{
        this.getStudentList()
      },10000)
    },
    handleClose() {
      this.showSchedule = false
    },
    pageChange(val) {
      this.query.page = val;
      this.getStudentList()

    },
    sizeChange(val) {
      this.query.limit = val;
      this.getStudentList()
    },
    getStudentList() {
      document.title="数据列表"
      getStudent(this.query).then(res => {
        this.query.page = res.data.page.current
        this.query.limit = res.data.page.size
        this.query.total = res.data.page.total
        this.studentList = res.data.page.records
      })
    },
  },
  mounted() {

  },
  created() {
    this.getStudentList()
    this.intervalGetStudentList()
  }
}
</script>

<style scoped>

/deep/ .el-table__row{
  background: black !important;
color: orange;
}
/deep/ thead{
  /*background-color: black !important;*/
  /*color: orange;*/
  /*height: 100px;*/
}
/deep/ .cell{
  height: 70px;
  line-height: 70px;
}
.el-table  .row-class{
  background: #f6bf5e;
}
.el-table .warning-row {
  background: oldlace;
}
</style>
