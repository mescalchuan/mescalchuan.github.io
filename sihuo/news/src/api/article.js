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

