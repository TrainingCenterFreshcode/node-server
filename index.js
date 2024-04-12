const http = require('http');
const fs = require('fs/promises');

const PORT = 5000;

const requestListener = async (request, response) => {
    const { url, method } = request;

    if(method === 'GET') {
        if(url === '/index.html') { // http://localhost:5000/index.html
            try {
                const data = await fs.readFile('./views/index.html', 'utf-8');
                response.statusCode = 200;
                response.end(data);
            } catch (error) {
                response.statusCode = 404;
                response.end();
            }
        }
        else if(url === '/style.css') {
            try {
                const data = await fs.readFile('./views/style.css', 'utf-8'); // http://localhost:5000/style.css
                response.statusCode = 200;
                response.end(data);
            } catch (error) {
                response.statusCode = 404;
                response.end();
            }
        }
        else {
            response.statusCode = 404;
            response.end();
        }
    } else if(method === 'POST') {
        if(url === '/user') {
            let jsonString = '';
            request.on('data', chunk => {
                jsonString += chunk;
            });
            request.on('end', () => {
                const user = JSON.parse(jsonString);
                console.log(user);

                response.statusCode = 200;
                response.end();
            });
        }
    }
}
const server = http.createServer(requestListener);

server.listen(PORT);