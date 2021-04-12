import request from '@/utils/request'

export function getEmailList(data) {
  return request({
    url: '/api/v1/admin/letter/load',
    method: 'post',
    data
  })
}

export function deleteEmail(data) {
  return request({
    url: '/api/v1/admin/letter/delete',
    method: 'post',
    data
  })
}

export function emailDetail(data) {
  return request({
    url: '/api/v1/letter/detail',
    method: 'post',
    data
  })
}

export function replyEmail(data) {
  return request({
    url: '/api/v1/admin/letter/reply',
    method: 'post',
    data
  })
}