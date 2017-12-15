var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/hello") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>world.</p></body></html>');
        res.end();
    
    }

    else
        res.end('Invalid Request!');

});

server.listen(8080); 

console.log('Node.js web server at port 8080 is running..')
