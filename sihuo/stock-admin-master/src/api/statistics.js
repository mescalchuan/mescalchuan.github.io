import request from '@/utils/request'

export function villageStatistics(data) {
  return request({
    url: '/api/v1/statistics/village',
    method: 'post',
    data
  })
}

export function townStatistics(data) {
  return request({
    url: '/api/v1/statistics/township',
    method: 'post',
    data
  })
}

export function countryStatistics(data) {
  return request({
    url: '/api/v1/statistics/county',
    method: 'post',
    data
  })
}