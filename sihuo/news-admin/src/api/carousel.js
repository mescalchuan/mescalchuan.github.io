import request from '@/utils/request'

export function getCarouselList(data) {
  return request({
    url: '/api/v1/admin/rotationImage/load',
    method: 'post',
    data
  })
}

export function upload(data) {
  return request({
    url: '/api/v1/image/upload',
    method: 'post',
    data
  })
}

export function fileUpload(data) {
  return request({
    url: '/api/v1/file/upload',
    method: 'post',
    data
  })
}

export function addCarousel(data) {
  return request({
    url: '/api/v1/admin/rotationImage/save',
    method: 'post',
    data
  })
}

export function editCarousel(data) {
  return request({
    url: '/api/v1/admin/rotationImage/update',
    method: 'post',
    data
  })
}

export function deleteCarousel(data) {
  return request({
    url: '/api/v1/admin/rotationImage/delete',
    method: 'post',
    data
  })
}