import request from '@/utils/request'

export function economicGroup(data) {
    return request({
      url: '/api/v1/economicGroup/search',
      method: 'post',
      data
    })
  }

  export function economicQuery(data) {
    return request({
      url: '/api/v1/economicGroup/query',
      method: 'post',
      data
    })
  }

export function saveEconomic(data) {
  return request({
    url: '/api/v1/economicGroup/save',
    method: 'post',
    data
  })
}

export function updateEconomic(data) {
  return request({
    url: '/api/v1/economicGroup/update',
    method: 'post',
    data
  })
}

export function getDetail(data) {
  return request({
    url: '/api/v1/economicGroup/detail',
    method: 'post',
    data
  })
}

export function getEconomicDetail(data) {
  return request({
    url: '/api/v1/economicGroupDetail/query',
    method: 'post',
    data
  })
}

export function operationType(data) {
  return request({
    url: '/api/v1/operationalType/query',
    method: 'post',
    data
  })
}