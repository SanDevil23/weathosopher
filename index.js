// script for running the server

const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    
    let fpath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url );
    console.log(fpath);
    
    let ext = path.extname(fpath);

    let ctype = 'text/css';

    switch(ext){
        case '.js':
            ctype = 'text/javascript';
            break;
        case '.html':
            ctype = 'text/html';
            break;
        case '.json':
            ctype = 'application/json';
            break;
        case '.png':
            ctype = 'image/png';
            break;
        case '.jpg':
            ctype = 'image/jpg';
            break;
    };

    fs.readFile(fpath, (err, content) => {
        if (err){
            if (err.code = 'ENOENT'){
                fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, content) => {
                    res.writeHead(200,{'Content-type':'text/html'});
                    res.end(content, 'utf-8');    
                })
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200,{'Content-type': ctype});
            res.end(content, 'utf-8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`The Server is running on the port ${PORT}`));