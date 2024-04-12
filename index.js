const http = require('http');

const PORT = 5000;

const requestListener = (request, response) => {
    const { url, method } = request;
    console.log(url, method);
    
    response.statusCode = 404;
    response.end('Hello from server');
}
const server = http.createServer(requestListener);

server.listen(PORT);