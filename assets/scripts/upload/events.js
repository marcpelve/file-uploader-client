'use strict'

const api = require('./api')
const ui = require('./ui')

function readURL (input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader()
    reader.onload = function (e) {
      $('#image-target').attr('src', e.target.result)
    }

    reader.readAsDataURL(input.files[0])
  }
}

function putImage () {
  readURL(this)
}
// $('#select-file').change(function () {
//   readURL(this)
// })

const onCreateUpload = function (event) {
  event.preventDefault()

  $('.display').html('<img src="https://media3.giphy.com/media/cZDRRGVuNMLOo/source.gif">')

  const data = new FormData(event.target)
  console.log(...data)

  api.upload(data)
    .then(ui.onUploadSuccess)
    .catch(console.error)
}

module.exports = {
  onCreateUpload,
  putImage
}
