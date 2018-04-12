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

  //To execute tail command
  // cp.exec(command, (err, stdout, stderr) => {
  //     if (err) throw err;
  //     console.info(stdout.split("\n").length,stdout.length);
  //     //It used to check existance of file or directory and return err, stats (info about file or directory)
  //     // fs.stat(filename, (err, stats) => {
  //     //     if (err) throw err;
  //     //
  //     //     //Removes the Element from  the file based on the size
  //     //     fs.truncate(filename, stats.size - stdout.length, (err) => {
  //     //         if (err) throw err;
  //     //         console.log('File last 10 content has been truncated!');
  //     //     })
  //     // });
  // });

};
