
var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(3100);

function doRequest(request, response) {

    switch (request.url) {
      case "/":
        fs.readFile("./index.html", 'UTF-8' ,function (err, data) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        });
        break;
      case "/style.css":
        fs.readFile("./style.css",'UTF-8', function (err, data) {
          response.writeHead(200, { "Content-Type": "text/css" });
          response.write(data);
          response.end();
        });
        break;
    }
  };
