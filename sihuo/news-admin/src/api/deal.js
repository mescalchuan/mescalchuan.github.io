import request from '@/utils/request'

export function dealSearch(data) {
  return request({
    url: '/api/v1/transaction/search',
    method: 'post',
    data
  })
}

export function getDealDetail(data) {
  return request({
    url: '/api/v1/transaction/detail',
    method: 'post',
    data
  })
}

export function transactionSave(data) {
  return request({
    url: '/api/v1/admin/transaction/save',
    method: 'post',
    data
  })
}