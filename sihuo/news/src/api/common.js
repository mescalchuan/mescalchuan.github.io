import request from '@/utils/request'

export function getAllVillage() {
  return request({
    url: '/api/v1/village/loadAll',
    method: 'post'
  })
}

export function articleSearch(data) {
  return request({
    url: '/api/v1/article/search',
    method: 'post',
    data
  })
}