
var request = require('request')
var fs = require('fs')
var url = 'http://tesseract.projectnaptha.com/img/eng_bw.png'
var filename = 'pic.png'

var writeFileStream = fs.createWriteStream(filename)

request(url).pipe(writeFileStream).on('close', function() {
  console.log(url, 'saved to', filename)
})
