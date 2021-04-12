import request from '@/utils/request'

export function introctionDetail(data) {
  return request({
    url: '/api/v1/admin/introduction/query',
    method: 'post',
    data
  })
}

export function introctionUpdate(data) {
  return request({
    url: '/api/v1/admin/introduction/update',
    method: 'post',
    data
  })
}