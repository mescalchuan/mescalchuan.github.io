import request from '@/utils/request'

export function search(data) {
  return request({
    url: '/api/v1/search',
    method: 'post',
    data
  })
}

export function economicGroupDetailSearch(data) {
    return request({
      url: '/api/v1/economicGroupDetail/search',
      method: 'post',
      data
    })
  }

  export function memberDetailSearch(data) {
    return request({
      url: '/api/v1/memberDetail/search',
      method: 'post',
      data
    })
  }
  
  
