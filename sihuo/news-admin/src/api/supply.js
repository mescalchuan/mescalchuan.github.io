import request from '@/utils/request'

export function supplySearch(data) {
  return request({
    url: '/api/v1/admin/supply/load',
    method: 'post',
    data
  })
}

export function demandSearch(data) {
  return request({
    url: '/api/v1/admin/need/load',
    method: 'post',
    data
  })
}

export function getSupplyDetail(data) {
  return request({
    url: '/api/v1/supply/detail',
    method: 'post',
    data
  })
}

export function getDemandDetail(data) {
  return request({
    url: '/api/v1/need/detail',
    method: 'post',
    data
  })
}

export function checkStatus(data) {
  return request({
    url: '/api/v1/admin/checkStatus/query',
    method: 'post',
    data
  })
}

export function supplyDelete(data) {
  return request({
    url: '/api/v1/admin/supply/delete',
    method: 'post',
    data
  })
}

export function supplyStatusChange(data) {
  return request({
    url: '/api/v1/admin/supply/check',
    method: 'post',
    data
  })
}

export function needDelete(data) {
  return request({
    url: '/api/v1/admin/need/delete',
    method: 'post',
    data
  })
}

export function needStatusChange(data) {
  return request({
    url: '/api/v1/admin/need/check',
    method: 'post',
    data
  })
}

export function getProjectType() {
  return request({
    url: '/api/v1/projectType/query',
    method: 'post'
  })
}
export function getCirculateType() {
  return request({
    url: '/api/v1/circulateType/query',
    method: 'post'
  })
}