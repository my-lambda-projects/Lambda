// --------------------------- create basic server --------------------------- \\
const http = require("http");

let myServer = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<p><strong> hello </strong> batkan </p>");
    response.end();
});

myServer.listen(3000);