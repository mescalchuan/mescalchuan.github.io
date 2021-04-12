import request from '@/utils/request'

export function getCirculateType() {
  return request({
    url: '/api/v1/circulateType/query',
    method: 'post'
  })
}

export function getLandType() {
  return request({
    url: '/api/v1/landType/query',
    method: 'post'
  })
}

export function getProjectType() {
  return request({
    url: '/api/v1/projectType/query',
    method: 'post'
  })
}

export function supplySearch(data) {
  return request({
    url: '/api/v1/supply/search',
    method: 'post',
    data
  })
}

export function demandSearch(data) {
  return request({
    url: '/api/v1/need/search',
    method: 'post',
    data
  })
}

export function supplySubmit(data) {
  return request({
    url: '/api/v1/supply/save',
    method: 'post',
    data
  })
}

export function demandSubmit(data) {
  return request({
    url: '/api/v1/need/save',
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

export function getAreaIntervalType(data) {
  return request({
    url: '/api/v1/areaInterval/query',
    method: 'post',
    data
  })
}

export function getPriceIntervalType(data) {
  return request({
    url: '/api/v1/priceInterval/query',
    method: 'post',
    data
  })
}

export function getTimeIntervalType(data) {
  return request({
    url: '/api/v1/timeInterval/query',
    method: 'post',
    data
  })
}