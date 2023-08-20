const http = require('http');

const myServer = http.createServer((req, res) => {
    // console.log(req);
    console.log('shubham');
    process.exit();
})
myServer.listen(4000);
