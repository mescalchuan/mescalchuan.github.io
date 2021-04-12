<template>
  <div class="searchdetail-page">
    <back></back>
    <div class="searchdetail-content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          
          <div v-if="mode === 'economic'">
            <span>{{ res.groupId }}</span>
            <span>组织代码: {{ res.groupCode }}</span>
            <span>组织名称: {{ res.groupName }}</span>
            <span>法人: {{ res.legal }}</span>
            <el-tag type="success" size="mini" >股东信息</el-tag>
          </div>
          <div v-else>
            <span style="font-weight:normal">{{ res.address }}</span>
            <span>户 {{ res.familyNo }} ({{res.adminMemberName}})</span>
          </div>
        </div>
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          v-if="mode === 'economic'"
          style="width: 100%"
        >
          <el-table-column
            prop="familyNo"
            label="股东户号"
            width="120"
          />
          <el-table-column
            prop="shareholderName"
            label="股东"
          />
          <el-table-column
            prop="stockRightNo"
            label="股权证号"
          />
          <el-table-column
            prop="idCard"
            label="身份证号"
          />
          <el-table-column
            prop="address"
            label="家庭住址"
          />
           <el-table-column
            prop="stockRightCount"
            label="综合股权数量"
          />
        </el-table>
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          v-else
          style="width: 100%"
        >
          <el-table-column
            prop="memberName"
            label="成员"
            width="120"
          />
          <el-table-column
            prop="relationshipName"
            label="与户主关系"
          />
          <el-table-column
            prop="sexName"
            label="性别"
          />
          <el-table-column
            prop="idCard"
            label="身份证号"
          />
          <el-table-column
            prop="birthDate"
            label="出生日期"
          />
           <el-table-column
            prop="currentAddress"
            label="家庭住址"
          />
           <el-table-column
            prop="description"
            label="备注"
          />
        </el-table>
      </el-card>
      <!-- <el-card class="box-card">
        <div slot="header" class="clearfix">
          
          <div>
            <span>{{ basicInfo.id }}</span>
            <span>组织代码: {{ basicInfo.groupCode }}</span>
            <span>组织名称: {{ basicInfo.groupName }}</span>
            <span>法人: {{ basicInfo.legal }}</span>
            <el-tag type="success" size="mini" >变更记录</el-tag>
          </div>
        </div>
        <el-card v-for="(item, index) in records" :key="index">
            <p><strong>超级管理员(admin)</strong> <el-tag type="danger" size="mini">2017-07-08 15:28:24</el-tag> <el-tag type="danger" size="mini">经济组织新增</el-tag></p>   
            <p>账户admin(超级管理员)进行了经济组织资产清算，股权设置操作</p>
            <p><strong>总资产：</strong>9000000</p>
            <p><strong>股权类型设置：</strong>成员股（折算系数1）</p>
            <p><strong>总资产：</strong>9000000</p>
            <p><strong>总资产：</strong>9000000</p>
        </el-card>
      </el-card> -->
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import Back from '../../components/Back'
import { economicGroupDetailSearch, memberDetailSearch } from '@/api/search'
export default {
  components: {
    Pagination,
    Back
  },
  data() {
    return {
      mode: '',
      tableData: [],
      searchKey: '',
      records: [{}],
      res: {}
    }
  },
  created() {
    this.mode = this.$route.query.economicId ? 'economic' : 'member'
    this.searchList()
  },
  methods: {
    searchList() {
      let data = {
        economicGroupId: this.$route.query.id,
      }
      if(this.mode === 'economic') {
        economicGroupDetailSearch({
          economicGroupId: this.$route.query.economicId
        }).then(res => {
          this.tableData = res.data.shareholderInfoList
          this.res = res.data
        })
      }
      else {
        memberDetailSearch({
          memberId: this.$route.query.memberId
        }).then(res => {
          this.tableData = res.data.memberInfos
          this.res = res.data
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .searchdetail-page {
   width: 100%;
    padding: 10px;
    background: rgb(235,238,242);
    min-height: calc(100vh - 50px);
  }

  .searchdetail-content {
    background: #fff;
    padding: 20px;
    margin-top: 15px;
  }

  .tag-title {
      padding: 10px 0;
      margin: 10px 0 20px 0;
      border-bottom: 1px dashed #d4dfee;
  }

  .top {
      margin-top: 0;
      padding-top: 0;
  }

  .tag-cursor {
      cursor: pointer;
  }

  .option-box {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .box-card {
    margin-top: 10px;
    .clearfix {
      span {
        font-size: 14px;
        font-weight: 600;
        display: inline-block;
        margin-right: 20px;
      }
    }
  }

  .search-input {
    width: 300px;
  }
</style>

<style>
  .table-header-color {
    background: rgb(245,247,250)!important;
    color: #333 !important;
  }
</style>
