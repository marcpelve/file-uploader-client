'use strict'

const onUploadSuccess = function (data) {
  $('#feedback').text('Success')
  $('.display').html(`<img src="${data.fileUpload.url}">`)
}

module.exports = {
  onUploadSuccess
}
