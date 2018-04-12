/*
*
*Print the last 10 lines of each file to the standard output. With more than one file, precede each with a header giving the file name.
*/

var fs = require('fs'),
    util = require('util'),
    cp = require('child_process');

function Services() {

}

Services.prototype.readTailFunction = function (options,callback) {
  options = options ? options : {};
  var filename = options.filename || './file_input';
  var lines = options.lines || 10;
  var command = util.format('tail -n %d %s', lines, filename);

  cp.exec(command,callback);
};
module.exports = new Services();
