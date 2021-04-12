import request from '@/utils/request'

export function search(data) {
  return request({
    url: '/api/v1/comprehensive/query',
    method: 'post',
    data
  })
}

export function getInfoType(data) {
  return request({
    url: '/api/v1/infoType/query',
    method: 'post',
    data
  })
}
  
