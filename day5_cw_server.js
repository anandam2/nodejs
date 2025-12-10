var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("Request URL: " + req.url + " Method: " + req.method);

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to ABC College!");
    } 
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>About ABC College</h1>");
    } 
    else {
        res.writeHead(404, "Not Found", { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});