const http = require('http');
http.createServer((req, res) => {
    res.end("<h1>Hello Node!!!!</h1>")
}).listen(3000)