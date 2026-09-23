const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server =  http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Acess-Control-Allow-origin', '*')


    res.setHeader('Content-type', 'application/json; charset = utf-8');
    res.end(JSON.stringify({mensager: "essa é o casio"}));

});

server.listen(port, hostname, () => {
    console.log (`servidor rodando em http://${hostname}:${port}/`);
});