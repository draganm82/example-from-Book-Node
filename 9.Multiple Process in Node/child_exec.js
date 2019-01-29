const childProcess = require ('child_process');
const options = {maxBuffer: 100*1024, encoding: 'utf8', timeout:5000};
const child = childProcess.exec ('dir/B', options, function (error, stdout, stderr) {
 if (error) {
   console.log('Error Code: '+error.code);
   console.log('Error Signal: '+error.signal);
 }
 console.log ('Results: \n' + stdout);
 if (stderr.length) {
   console.log('Errors: ' + stderr);
 }
});
child.on('exit', function (code) {
  console.log('Completed with code: ' +code);
});
