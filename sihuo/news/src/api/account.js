import request from '@/utils/request'

export function getAccount(data) {
  return request({
    url: '/api/v1/account/list',
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
    url: '/api/v1/account/detail',
    method: 'post',
    data: {
      accountId: id
    }
  })
}

export function saveAccount(data) {
  return request({
    url: '/api/v1/account/save',
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
    url: '/api/v1/accountGroup/save',
    method: 'post',
    data
  })
}

export function updateGroup(data) {
  return request({
    url: '/api/v1/accountGroup/update',
    method: 'post',
    data
  })
}

export function getGroup(data) {
  return request({
    url: '/api/v1/accountGroup/detail',
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
    url: '/api/v1/accountGroup/detail',
    method: 'post',
    data: {
      accountId: id
    }
  })
}

export function accountGroup(data) {
  return request({
    url: '/api/v1/accountGroup/list',
    method: 'post',
    data
  })
}

export function updateAccount(data) {
  return request({
    url: '/api/v1/account/update',
    method: 'post',
    data
  })
}

export function getAuthList(data) {
  return request({
    url: '/api/v1/menuFunction/query',
    method: 'post',
    data
  })
}

export function deleteGroup(data) {
  return request({
    url: '/api/v1/accountGroup/delete',
    method: 'post',
    data
  })
}

export function updatePassword(data) {
  return request({
    url: '/api/v1/password/update',
    method: 'post',
    data
  })
}