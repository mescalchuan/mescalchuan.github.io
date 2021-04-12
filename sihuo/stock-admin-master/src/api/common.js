import request from '@/utils/request'

export function getVillage() {
  return request({
    url: '/api/v1/village/list',
    method: 'post'
  })
}

export function getAllVillage() {
  return request({
    url: '/api/v1/village/loadAll',
    method: 'post'
  })
}

export function queryPosition() {
  return request({
    url: '/api/v1/position/query',
    method: 'post'
  })
}

export function queryGroup(data) {
  return request({
    url: '/api/v1/villageGroup/list',
    method: 'post',
    data
  })
}
