const http = require('http');

const myServer = http.createServer((req, res) => {
    // console.log(req);
    // console.log('shubham');
    // process.exit();
    const url = req.url;
    if (url === '/home') {
        res.write('<html>');
        res.write('<body><h1>Welcome To My Home Page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/about') {
        res.write('<html>');
        res.write('<body><h1>Welcome To About Page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/node') {
        res.write('<html>');
        res.write('<body><h1>Welcome To My Node.js Project</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>Welcome To My Home Page</h1></body>');
    res.write('</html>');
    // process.exit();
})
myServer.listen(4000);
