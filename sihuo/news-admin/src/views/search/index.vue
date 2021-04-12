<template>
  <div class="search-page">
    <area-selector  @areaChange="areaChange"/>
    <div class="search-content">
      <div class="option-box">
        <div class="search-box">
          <el-button type="primary" @click="search">全文检索<i class="el-icon-search el-icon--right"/></el-button>
          <el-input
            v-model="searchKey"
            placeholder="输入组织或农民相关信息..."
            class="search-input"
            clearable
          />
        </div>
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>经济组织</span>
        </div>
        <el-table
          header-cell-class-name="table-header-color"
          :data="tableData"
          border
          style="width: 100%; padding: 10px"
        >
          <el-table-column
            prop="id"
            label="编号"
          />
          <el-table-column
            prop="groupCode"
            label="组织代码"
          />
          <el-table-column
            prop="groupName"
            label="组织名称"
          />
          <el-table-column
            prop="legal"
            label="法人代表	"
          />
          <el-table-column
            prop="establishTime"
            label="成立日期"
          />
          <el-table-column
            prop="address"
            label="地址"
          />
          <el-table-column
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-button  icon="el-icon-warning" type="warning" size="small" @click="goDetail('economic', scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>农民</span>
        </div>
        <el-table
          header-cell-class-name="table-header-color"
          :data="memberInfos"
          border
          style="width: 100%; padding: 10px"
        >
          <el-table-column
            prop="familyNo"
            label="户号"
          />
          <el-table-column
            prop="memberName"
            label="姓名"
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
            label="出生日期	"
          />
          <el-table-column
            prop="currentAddress"
            label="家庭住址"
          />
          <el-table-column
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-button v-if="$hasAuth(16)" icon="el-icon-warning" type="warning" size="small"  @click="goDetail('member', scope.row.memberId)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
  import AreaSelector from '@/components/AreaSelector'
  import { search } from '@/api/search'
  export default {
    components: {
      AreaSelector
    },
    data() {
      return {
        tableData: [],
        memberInfos: [],
        searchKey: '',
        basicInfo: {
          index: 1,
          code: '323232',
          name: '张家口',
          represent: '酷酷酷'
        },
        areaList: [],
        init: false
      }
    },
    created() {
    },
    methods: {
      areaChange(val) {
        this.areaList = val
        if(!this.init) {
          this.init = true
        }
        else {
          this.search()
        }
      },
      search() {
        search({
          keyword: this.searchKey,
          villageId: this.areaList[1].value
        }).then(res => {
          this.tableData = res.data.economicGroupInfos
          this.memberInfos = res.data.memberInfos
        })
      },
      goDetail(type, id) {
        let query = {}
        if(type === 'economic') {
          query.economicId = id
        }
        else {
          query.memberId = id
        }
        this.$router.push({
          path: '/search-system/detail',
          query
        })
      }

    }
  }
</script>

<style lang="scss" scoped>
  .search-page {
    width: 100%;
    padding: 10px;
    background: rgb(235, 238, 242);
    min-height: calc(100vh - 50px);
  }

  .search-content {
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
    background: rgb(245, 247, 250) !important;
    color: #333 !important;
  }
</style>
