var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Hello World Server\n');
}).listen(8081);


