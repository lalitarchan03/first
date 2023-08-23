const http = require('http');
const fs = require('fs');
// const { buffer } = require('stream/consumers');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile("message.txt", {encoding: "utf-8"}, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter Message </title></head>');
            res.write(`<body> ${data} </body>`);
            res.write('<body><form action="/message" method="POST"><input type ="text" name="data"> <button type="submit">Send</button> </form> </body>');
            res.write('</html>');
            return res.end();
        })
        
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // console.log(message);
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            
        });
        
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>my first page</title></head>');
        res.write('<body><h1>Welcome To My Home Page</h1></body>');
        res.write('</html>');
    }
    
});

server.listen(3000);