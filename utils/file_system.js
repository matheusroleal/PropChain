var fs = require('fs');

exports.load_buffer_file = function (buffer, fileName) {
  var filePath = './'+fileName
  var wstream = fs.createWriteStream(filePath);

  wstream.write(buffer);

  wstream.end();
  return filePath;
}

exports.remove_file = function (filePath){
  fs.unlinkSync(filePath)

  console.log('File '+ filePath +' deleted!');
}
