var expect  = require('chai').expect;
var request = require('request');

function check(done) {
request('http://localhost:8080/hello' , function(error, response, body) {
       expect(body).to.equal('<html><body><p>world.</p></body></html>');
       done();
   });

}

it('Main page content', function(done) {
var exec = require('child_process').exec, child;

exec('node /home/vadym/Desktop/nodejs/nodejs-master/index.js',
   function (error, stdout, stderr) {
       console.log('stdout: ' + stdout);
       console.log('stderr: ' + stderr);
    check();
       if (error !== null) {
            console.log('exec error: ' + error);
       }
   });
done();
   });
