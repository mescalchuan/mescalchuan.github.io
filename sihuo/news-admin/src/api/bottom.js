import request from '@/utils/request'

export function getWebInfo(data) {
  return request({
    url: '/api/v1/webInfo/query',
    method: 'post',
    data
  })
}

export function updateWebInfo(data) {
  return request({
    url: '/api/v1/admin/webInfo/update',
    method: 'post',
    data
  })
}