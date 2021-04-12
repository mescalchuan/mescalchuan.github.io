import request from '@/utils/request'

export function importExcel(data) {
  return request({
    url: '/api/v1/member/import',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}