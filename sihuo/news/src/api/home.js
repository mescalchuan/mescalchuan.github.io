import request from '@/utils/request'

export function getHomeData(data) {
  return request({
    url: '/api/v1/index/query',
    method: 'post',
    data
  })
}

export function getNavigation(data) {
  return request({
    url: '/api/v1/websiteNavigation/query',
    method: 'post',
    data
  })
}

export function getWebInfo(data) {
  return request({
    url: '/api/v1/webInfo/query',
    method: 'post',
    data
  })
}