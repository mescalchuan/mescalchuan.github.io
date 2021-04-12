import request from '@/utils/request'

export function getMenu(data) {
  return request({
    url: '/api/v1/admin/manageMenu/load',
    method: 'post',
    data
  })
}

export function getCategory(data) {
  return request({
    url: '/api/v1/category/query',
    method: 'post',
    data
  })
}
export function getMenuFunctions() {
  return request({
    url: '/api/v1/admin/menus/query',
    method: 'post'
  })
}

export function getArticleCategory(data) {
  return request({
    url: '/api/v1/admin/articleCategory/query',
    method: 'post',
    data
  })
}

export function getChildCategory(data) {
  return request({
    url: '/api/v1/admin/category/queryByParent',
    method: 'post',
    data
  })
}

export function categorySave(data) {
  return request({
    url: '/api/v1/admin/category/save',
    method: 'post',
    data
  })
}

export function categoryUpdate(data) {
  return request({
    url: '/api/v1/admin/category/update',
    method: 'post',
    data
  })
}

export function categoryDelete(data) {
  return request({
    url: '/api/v1/admin/category/delete',
    method: 'post',
    data
  })
}