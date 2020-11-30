<template>
  <div>
      <el-table
              :data="tableData"
              style="width: 100%">
          <el-table-column
                  prop="studentNo"
                  label="学号"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="studentName"
                  label="姓名"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="phone"
                  label="手机"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="sex"
                  label="姓别"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="address"
                  label="地址">
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
    export default {
        name: "StudentComp"
        ,
        data:function () {
            return {
                tableData:[]
            }
        },
        created:function () {
            this.getData();
        },
        methods:{
            getData:function () {
                let params=new URLSearchParams();
                params.append('opt','all');
                this.axios.post("/api/tw/home",params).then(d=>{
                    this.tableData=d.data;
                }).catch(d=>{
                    alert(d);
                })
            }
        }
    }
</script>

<style scoped>

</style>