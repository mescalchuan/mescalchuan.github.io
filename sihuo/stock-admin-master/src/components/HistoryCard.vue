<template>
  <div class="history-container">
    <div>
      <el-tag type="danger" size="mini" v-for="item in [datas.stockRightOperateDate, datas.stockRightOperateType, '见证人：'+ datas.appraiser]">{{ item }}</el-tag>
    </div>
    <p><strong>股东: </strong><strong>{{datas.shareholderName}}</strong> (户号：{{ basicInfo.familyNo }} 身份证号：{{ basicInfo.idCard }})</p>
    <p><strong>股东入股组织: </strong><strong>{{datas.economicGroupName}}</strong> (组织代码：{{ datas.economicGroupCode }} 地址：{{ datas.economicGroupAddress }})</p>
    <p><strong>{{datas.stockRightOperateType}}类型:</strong> {{datas.stockRightType}}</p>
    <p><strong>{{datas.stockRightOperateType}}数额:</strong> {{datas.operateCount}}</p>
    <p><strong>成交额:</strong> {{datas.totalAmount}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'HistoryCard',
  props: {
    datas: {
      type: Object,
      default: () => ({})
    },
    basicInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      info: {
        tags: ['cxsw(张化龙)', '2017-09-22', '入股', '见证人：无'],
        gudong: 'ddsds',
        gudongGroup: 'sasa',
        type: 'dsdsd',
        count: 20,
        moner: 2002
      },
      moment
    }
  }
}
</script>

<style lang="scss" scoped>
.history-container{
  background: #f6f6f6;
  padding: 10px 20px;
  border: 1px solid #b0c3dc;

  p {
    font-size: 14px;
    margin: 10px 0;
  }
}
</style>
