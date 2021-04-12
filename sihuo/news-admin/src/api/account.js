import request from '@/utils/request'

export function getAccount(data) {
  return request({
    url: '/api/v1/admin/account/list',
    method: 'post',
    data
  })
}

/**
 * 获取账户详情，用于编辑
 * @param {string} id
 * @returns {AxiosPromise}
 */
export function getAccountInfoById(id) {
  return request({
    url: '/api/v1/admin/account/detail',
    method: 'post',
    data: {
      accountId: id
    }
  })
}

export function saveAccount(data) {
  return request({
    url: '/api/v1/admin/account/save',
    method: 'post',
    data
  })
}

/**
 * 新建用户组
 * @param data
 * @return {AxiosPromise}
 */
export function saveGroup(data) {
  return request({
    url: '/api/v1/admin/accountGroup/save',
    method: 'post',
    data
  })
}

export function updateGroup(data) {
  return request({
    url: '/api/v1/admin/accountGroup/update',
    method: 'post',
    data
  })
}

export function getGroup(data) {
  return request({
    url: '/api/v1/admin/accountGroup/detail',
    method: 'post',
    data
  })
}

/**
 * 获取用户组详情，用于编辑
 * @param {string} id
 * @returns {AxiosPromise}
 */
export function getGroupInfoById(id) {
  return request({
    url: '/api/v1/admin/accountGroup/detail',
    method: 'post',
    data: {
      accountId: id
    }
  })
}

export function accountGroup(data) {
  return request({
    url: '/api/v1/admin/accountGroup/list',
    method: 'post',
    data
  })
}

export function updateAccount(data) {
  return request({
    url: '/api/v1/admin/account/update',
    method: 'post',
    data
  })
}

export function getAuthList(data) {
  return request({
    url: '/api/v1/admin/menus/query',
    method: 'post',
    data
  })
}

export function deleteGroup(data) {
  return request({
    url: '/api/v1/admin/accountGroup/delete',
    method: 'post',
    data
  })
}

export function updatePassword(data) {
  return request({
    url: '/api/v1/admin/password/update',
    method: 'post',
    data
  })
}