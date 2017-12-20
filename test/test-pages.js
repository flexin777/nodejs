var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8080/hello' , function(error, response, body) {
        expect(body).to.equal('<html><body><p>world.</p></body></html>');
        done();
    });
});
