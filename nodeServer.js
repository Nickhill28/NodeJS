const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hi Im Nick\n');
    console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
    console.log('Nick');
})
server.listen(4000);