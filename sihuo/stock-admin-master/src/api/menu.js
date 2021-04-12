import request from '@/utils/request'

export function getMenu(data) {
  return request({
    url: '/api/v1/menu/load',
    method: 'post',
    data
  })
}

export function getMenuFunctions() {
  return request({
    url: '/api/v1/menuFunction/query',
    method: 'post'
  })
}
