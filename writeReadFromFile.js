const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>First App NodeJSproJ</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(req.url === '/message' && req.method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY MUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First App NodeJSproJ</title></head>');
    res.write('<body><h1>Default Landing Page</h1></body>');
    res.write('</html>');
    res.end();
    
    
})
server.listen(4000);