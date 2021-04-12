import request from '@/utils/request'

export function getDetail(data) {
  return request({
    url: '/api/v1/news/detail',
    method: 'post',
    data
  })
}

export function getNewsList(data) {
  return request({
    url: '/api/v1/news/query',
    method: 'post',
    data
  })
}

export function articleSave(data) {
  return request({
    url: '/api/v1/admin/article/save',
    method: 'post',
    data
  })
}

export function articleUpdate(data) {
  return request({
    url: '/api/v1/admin/article/update',
    method: 'post',
    data
  })
}

export function articleDelete(data) {
  return request({
    url: '/api/v1/admin/article/delete',
    method: 'post',
    data
  })
}