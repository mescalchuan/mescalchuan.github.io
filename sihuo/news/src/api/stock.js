import request from '@/utils/request'

export function getStockList(data) {
  return request({
    url: '/api/v1/shareholder/search',
    method: 'post',
    data
  })
}

export function getStockDetail(data) {
  return request({
    url: '/api/v1/shareholder/detail',
    method: 'post',
    data
  })
}

export function download(params) {
  return request({
    url: '/api/v1/shareholder/download',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

export function createStock(data) {
  return request({
    url: '/api/v1/shareholder/create',
    method: 'post',
    data
  })
}

export function history(data) {
  return request({
    url: '/api/v1/stockRight/history',
    method: 'post',
    data
  })
}

export function stockRightType(data) {
  return request({
    url: '/api/v1/stockRightType/query',
    method: 'post',
    data
  })
}

export function settleType(data) {
  return request({
    url: '/api/v1/settleType/query',
    method: 'post',
    data
  })
}
export function dealType(data) {
  return request({
    url: '/api/v1/dealType/query',
    method: 'post',
    data
  })
}
export function dealSave(data) {
  return request({
    url: '/api/v1/stockRight/pledge',
    method: 'post',
    data
  })
}
export function pledgeList(data) {
  return request({
    url: '/api/v1/pledge/list',
    method: 'post',
    data
  })
}
export function pledgeRelease(data) {
  return request({
    url: '/api/v1/pledge/release',
    method: 'post',
    data
  })
}

export function save(data) {
  return request({
    url: '/api/v1/stockRight/add',
    method: 'post',
    data
  })
}
export function reduceSave(data) {
  return request({
    url: '/api/v1/stockRight/reduce',
    method: 'post',
    data
  })
}

export function shareHolderInfoQuery(data) {
  return request({
    url: '/api/v1/shareholderInfo/query',
    method: 'post',
    data
  })
}

export function shareHolderQuery(data) {
  return request({
    url: '/api/v1/shareholder/query',
    method: 'post',
    data
  })
}
export function otherShareHolderQuery(data) {
  return request({
    url: '/api/v1/otherShareholder/query',
    method: 'post',
    data
  })
}
export function transform(data) {
  return request({
    url: '/api/v1/stockRight/transform',
    method: 'post',
    data
  })
}


export function bonusQuery(data) {
  return request({
    url: '/api/v1/dividend/query',
    method: 'post',
    data
  })
}

export function bonusRecord(data) {
  return request({
    url: '/api/v1/dividendRecord/query',
    method: 'post',
    data
  })
}

export function bonusAdd(data) {
  return request({
    url: '/api/v1/dividend/add',
    method: 'post',
    data
  })
}

export function bonusDetail(data) {
  return request({
    url: '/api/v1/dividend/detail',
    method: 'post',
    data
  })
}

export function stockImport(data) {
  return request({
    url: '/api/v1/shareholder/import',
    method: 'post',
    data
  })
}
