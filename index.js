const http = require('http');
const fs = require('fs/promises');

const PORT = 5000;

const requestListener = (request, response) => {
    const { url } = request;

    if(url === '/index.html') { // http://localhost:5000/index.html
        fs.readFile('./views/index.html', 'utf-8')
        .then(data => {
            response.statusCode = 200;
            response.end(data);
        });
    } else {
        response.statusCode = 404;
        response.end();
    }
}
const server = http.createServer(requestListener);

server.listen(PORT);