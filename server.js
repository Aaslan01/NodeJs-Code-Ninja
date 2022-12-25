
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {

    let path = './Views/';

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    res.setHeader('Content-type', 'text/html');
    fs.readFile(path, (err, data) => {
        console.log('test');
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
})
server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000");
})