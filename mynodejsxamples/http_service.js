var http = require("http");

http
   .createServer(function (request, response) {

      response.writeHead(200, { 'Content-Type': 'text/plain' });

      // Send the response text as "Hello World"
      response.end('Hello World\n');

   })
   .listen(3100);

console.log('Server running at http://127.0.0.1:3100/');