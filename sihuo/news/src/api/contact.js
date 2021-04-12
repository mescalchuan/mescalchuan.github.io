import request from '@/utils/request'

export function getEmailList(data) {
  return request({
    url: '/api/v1/letter/query',
    method: 'post',
    data
  })
}

export function getFeedbackType(data) {
  return request({
    url: '/api/v1/feedbackType/query',
    method: 'post',
    data
  })
}

export function emailSubmit(data) {
  return request({
    url: '/api/v1/letter/save',
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