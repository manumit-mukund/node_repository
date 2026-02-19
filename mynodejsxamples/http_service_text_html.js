var http = require("http");

http
   .createServer(function (request, response) {

      response.writeHead(200, { 'Content-Type': 'text/html' });

      // Send the response text as "Hello World"
      response.end('<h2>Hello World</h2>');

   })
   .listen(3200);

console.log('Server running at http://127.0.0.1:3200/');