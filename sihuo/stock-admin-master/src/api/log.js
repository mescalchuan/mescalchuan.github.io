import request from '@/utils/request'

export function getLog(data) {
  return request({
    url: '/api/v1/operateLog/query',
    method: 'post',
    data
  })
}

export function getOperateType() {
  return request({
    url: '/api/v1/operateType/query',
    method: 'post'
  })
}