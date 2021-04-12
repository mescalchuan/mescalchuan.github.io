import request from '@/utils/request'

export function searchMember(data) {
  return request({
    url: '/api/v1/family/search',
    method: 'post',
    data
  })
}

export function getMember(data) {
  return request({
    url: '/api/v1/family/members',
    method: 'post',
    data
  })
}

export function createFamily(data) {
  return request({
    url: '/api/v1/family/save',
    method: 'post',
    data
  })
}

export function familyDetail(data) {
  return request({
    url: '/api/v1/member/detail',
    method: 'post',
    data
  })
}

export function familyMember(data) {
  return request({
    url: '/api/v1/family/members',
    method: 'post',
    data
  })
}

export function memberDetail(data) {
  return request({
    url: '/api/v1/member/detail',
    method: 'post',
    data
  })
}

export function memberRelationship(data) {
  return request({
    url: '/api/v1/relationship/query',
    method: 'post',
    data
  })
}

export function updateMember(data) {
  return request({
    url: '/api/v1/member/update',
    method: 'post',
    data
  })
}

export function cancelMember(data) {
  return request({
    url: '/api/v1/member/cancel',
    method: 'post',
    data
  })
}

export function addMember(data) {
  return request({
    url: '/api/v1/member/save',
    method: 'post',
    data
  })
}

export function getBirthDay(data) {
  return request({
    url: '/api/v1/birthDate/query',
    method: 'post',
    data
  })
}

// 查询农户
export function searchMembers(data) {
  return request({
    url: '/api/v1/members/search',
    method: 'post',
    data
  })
}

export function memberDownload(params) {
  return request({
    url: '/api/v1/member/download',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

export function history(data) {
  return request({
    url: '/api/v1/updateHistory/query',
    method: 'post',
    data
  })
}